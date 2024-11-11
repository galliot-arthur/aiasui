import { StreamTextService, ValidateQueryDot } from "@chat/api";
import { ApiResponse } from "@commons/api";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (ValidateQueryDot.isConvertibleMessageSchema(messages) === false) {
    return ApiResponse.badRequestError;
  }

  const result = await StreamTextService.streamText(messages);

  if (result.err) {
    return ApiResponse.badRequestErrorWithData(result.val);
  }

  return result.val;
}
