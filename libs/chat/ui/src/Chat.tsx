"use client";

import { useChat } from "ai/react";
import { Message } from "./components/Message";
import { i18n } from "@/libs/commons/ui";
import { FormEventHandler, useState } from "react";
import { Loop, Send } from "@material-ui/icons";

export function Chat() {
  const [isLoading, setIsLoading] = useState(false);
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: () => setIsLoading(false),
    onError: () => setIsLoading(false),
  });

  const handleChatSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleSubmit();
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-6rem)] pt-12 mx-auto justify-between gap-4 relative">
      <ul className="flex flex-col gap-4 overflow-y-auto h-[calc(100vh-6rem)] pb-24 border-1 border-gray-200 rounded-lg px-4 shadow-inner-white">
        {messages.map((message) => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
        {isLoading && (
          <div className="flex items-center justify-center w-full">
            <p className="animate-spin text-green-300">
              <Loop fontSize="large" color="inherit" />
            </p>
          </div>
        )}
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
            aria-label={i18n.chat.inputPlaceholder}
          >
            <Send fontSize="small" color="inherit" />
          </button>
        </div>
      </form>
    </div>
  );
}
