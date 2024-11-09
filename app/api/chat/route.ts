import {
  GenerateObjectService,
  StreamTextService,
  ValidateQueryDot,
} from "@/libs/chat/api";
import { GENERATE_OBJECT_UNKNOWN_ERROR } from "@/libs/chat/domain";

import { ApiResponse } from "@/libs/commons/api";
import { eventSchema } from "@/libs/event/domain";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  return StreamTextService.streamText(messages);
  /*  if (ValidateQueryDot.isConvertibleMessageSchema(messages) === false) {
    return ApiResponse.badRequestError;
  }

  const generation = await GenerateObjectService.generateObject(
    messages,
    eventSchema
  );

  if (generation.ok) {
    return ApiResponse.apiSuccess(generation.val);
  }

  if (generation.val.type === GENERATE_OBJECT_UNKNOWN_ERROR) {
    return ApiResponse.apiGlobalError;
  }

  return ApiResponse.badRequestErrorWithData(generation.val); */
}
