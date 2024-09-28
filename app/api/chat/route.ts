import { ollama } from "ollama-ai-provider";
import { streamText, convertToCoreMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: ollama("llama2:chat"),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
