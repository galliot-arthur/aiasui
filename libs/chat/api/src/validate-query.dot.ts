import { ConvertibleMessage, ConvertibleMessageSchema } from "@chat/domain";
import { z } from "zod";

function isConvertibleMessageSchema(
  body: unknown
): body is ConvertibleMessage[] {
  return z.array(ConvertibleMessageSchema).safeParse(body).success;
}

export const ValidateQueryDot = {
  isConvertibleMessageSchema,
};
