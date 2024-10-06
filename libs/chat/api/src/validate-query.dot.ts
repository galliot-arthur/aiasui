import { ConvertibleMessage, ConvertibleMessageSchema } from "@chat/domain";
import { z } from "zod";

export class ValidateQuery {
  isConvertibleMessageSchema(body: unknown): body is ConvertibleMessage[] {
    return z.array(ConvertibleMessageSchema).safeParse(body).success;
  }
}
