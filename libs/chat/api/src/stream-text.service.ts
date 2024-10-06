import { convertToCoreMessages, streamText } from "ai";
import { ollama } from "ollama-ai-provider";
import { ConvertibleMessage } from "@chat/domain";

type StreamTextOptions = {
  isConfirmMessage?: boolean;
};

export class StreamTextService {
  async streamText(messages: ConvertibleMessage[], options: StreamTextOptions) {
    const result = await streamText({
      model: ollama("llama2:chat"),
      messages: convertToCoreMessages(messages),
      system: options.isConfirmMessage
        ? "Just send a quick message so the user knows the request have been performed"
        : "",
    });

    return result.toDataStreamResponse();
  }
}
