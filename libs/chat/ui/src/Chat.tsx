"use client";

import { useChat } from "ai/react";
import { Message } from "./components/Message";
import { i18n } from "@/libs/commons/ui";
import { FormEventHandler, MouseEvent, useState } from "react";
import { Send, LocalPizza } from "@material-ui/icons";
import { ChatState } from "./helpers/types";
import { Status } from "./components/Status";
import { ErrorSchema } from "@/libs/commons/domain";
import { ROLE_USER } from "@/libs/chat/domain";

const INITIAL_STATE: ChatState = {
  isLoading: false,
  error: null,
};

export function Chat() {
  const [state, setState] = useState<ChatState>(INITIAL_STATE);

  const setLoadingState = (isLoading: boolean) =>
    setState((s) => ({ ...s, isLoading }));

  const { messages, input, handleInputChange, handleSubmit, setMessages } =
    useChat({
      onFinish: () => setLoadingState(false),
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

  const handleAutoMessage = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setState({ isLoading: true, error: null });
    setMessages((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        role: ROLE_USER,
        content: i18n.chat.inputPlaceholder,
      },
    ]);

    handleSubmit({}, { allowEmptySubmit: true });
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-6rem)] pt-12 mx-auto justify-between gap-4 relative">
      <ul className="flex flex-col justify-end gap-4 overflow-y-scroll h-[calc(100vh-6rem)] pb-12 border-1 border-gray-200 rounded-lg px-4 shadow-inner-white shadow-lg shadow-gray-100">
        {messages.map((message) => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
        <Status {...state} />
      </ul>

      <form
        onSubmit={handleChatSubmit}
        className="flex flex-row gap-4 items-start border-1 rounded-lg"
      >
        <div className="w-full flex flex-col py-2">
          <label className="text-xs ml-3" htmlFor="question">
            {i18n.chat.inputLabel}
          </label>
          <textarea
            className="p-2.5 h-64 focus:outline-none"
            value={input}
            placeholder={i18n.chat.inputPlaceholder}
            onChange={handleInputChange}
            id="question"
          />
        </div>
        <div className="rounded-lg w-12 h-20 flex flex-col items-center justify-center text-lg m-0 overflow-hidden mr-2 mt-1">
          <button
            className="w-full h-10 active:bg-gray-300 pt-1.5 px-2 focus:outline-none focus:bg-gray-300 hover:text-green-500 text-blue-500"
            tabIndex={0}
            type="submit"
            aria-label={i18n.chat.sendMessage}
            title={i18n.chat.sendMessage}
          >
            <Send fontSize="inherit" color="inherit" />
          </button>
          <button
            className="w-full h-10 active:bg-gray-300 pb-1.5 px-2 focus:outline-none focus:bg-gray-300 hover:text-green-500 text-gray-400"
            onClick={handleAutoMessage}
            tabIndex={0}
            aria-label={i18n.chat.autoMessage}
            title={i18n.chat.autoMessage}
          >
            <LocalPizza fontSize="inherit" color="inherit" />
          </button>
        </div>
      </form>
    </div>
  );
}
