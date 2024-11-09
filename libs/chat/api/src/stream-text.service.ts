import { streamText as aIstreamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { ConvertibleMessage } from "@chat/domain";
import { eventSchema, Event } from "@/libs/event/domain";

async function streamText(messages: ConvertibleMessage[]) {
  const result = await aIstreamText({
    model: openai("gpt-4o"),
    messages: messages,
    system: "You are super cute",
    //You are an music event planner assistant. Most the time you answer questions but you can also collect and validate data to generage an record of it that will be shared with the user later.
    tools: {
      generateEvent: {
        description: "Generate an music event",
        parameters: eventSchema,
        execute: async (event: Event) => {
          console.log(event);
          return "Hell yeah brother";
        },
      },
    },
  });

  return result.toDataStreamResponse();
}

export const StreamTextService = {
  streamText,
};
