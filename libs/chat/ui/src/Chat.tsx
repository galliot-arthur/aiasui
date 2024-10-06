"use client";

import { useChat } from "ai/react";
import { Message } from "./components/Message";
import { i18n } from "@/libs/commons/ui";
import { FormEventHandler, useState } from "react";
import { Send } from "@material-ui/icons";
import { ChatState } from "./helpers/types";
import { Status } from "./components/Status";
import { ErrorSchema } from "@/libs/commons/domain";
import {
  isGenerateObjectSuccessBody,
  ROLE_ASSISTANT,
} from "@/libs/chat/domain";
import { Event } from "@/libs/event/domain";

export function Chat() {
  const [state, setState] = useState<ChatState>({
    isLoading: false,
    error: null,
  });

  const setLoadingState = (isLoading: boolean) =>
    setState((s) => ({ ...s, isLoading }));

  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      onFinish: () => setLoadingState(false),
      onResponse: async (r) => {
        if (r.ok) {
          const body = await r.json();
          if (isGenerateObjectSuccessBody<Event>(body)) {
            setMessages((previous) => [
              ...previous,
              {
                id: crypto.randomUUID(),
                role: ROLE_ASSISTANT,
                content: `Your event ${body.object.event.name} have been succesfully created`,
              },
            ]);
            setLoadingState(false);
          }
        }
      },
      onError: (e) => {
        try {
          const parsed = ErrorSchema.parse(JSON.parse(e.message));
          setState({ isLoading: false, error: parsed });
        } catch (error) {
          console.error(error);
        }
      },
    });

  const handleChatSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setState({ isLoading: true, error: null });
    handleSubmit();
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-6rem)] pt-12 mx-auto justify-between gap-4 relative">
      <ul className="flex flex-col justify-end gap-4 overflow-y-auto h-[calc(100vh-6rem)] pb-12 border-1 border-gray-200 rounded-lg px-4 shadow-inner-white">
        {messages.map((message) => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
        <Status {...state} />
      </ul>

      <form
        onSubmit={handleChatSubmit}
        className="flex flex-row gap-4 items-end"
      >
        <div className="w-full flex flex-col gap-1">
          <label className="text-xs text-gray-500" htmlFor="question">
            {i18n.chat.inputPlaceholder}
          </label>
          <input
            className="p-2.5 border-1 border-gray-300 rounded-lg shadow-sm"
            value={input}
            onChange={handleInputChange}
            id="question"
          />
        </div>
        <div>
          <button
            className="active:bg-gray-300 text-sm focus:outline-none focus:bg-gray-300 px-4 py-3 rounded-lg hover:bg-gray-200 hover:text-green-500 shadow-sm hover:shadow-green-100 border-1 border-gray-200"
            type="submit"
            tabIndex={0}
            aria-label={i18n.chat.sendMessage}
            title={i18n.chat.sendMessage}
          >
            <Send fontSize="small" color="inherit" />
          </button>
        </div>
      </form>
    </div>
  );
}
