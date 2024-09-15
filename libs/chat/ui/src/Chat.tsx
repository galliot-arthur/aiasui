"use client";

import { useChat } from "ai/react";
import { Message } from "./components/Message";
import { i18n } from "@/libs/commons/ui";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <ul className="flex flex-col gap-2">
        {messages.map((message) => (
          <li key={message.id}>
            <Message message={message} />
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border-1 border-gray-300 rounded-lg shadow-sm"
          value={input}
          placeholder={i18n.chat.inputPlaceholder}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
