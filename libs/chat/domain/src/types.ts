import { ONE_TO_ONE_ROLES } from "./constants";
import { z } from "zod";

export const GENERATE_OBJECT_SUCCESS = "success";
export const GENERATE_OBJECT_PARSE_ERROR = "parse-error";
export const GENERATE_OBJECT_VALIDATION_ERROR = "validation-error";
export const GENERATE_OBJECT_UNKNOWN_ERROR = "unknown-error";

export const GENERATE_OJBECT_RETURN_TYPES = [
  GENERATE_OBJECT_SUCCESS,
  GENERATE_OBJECT_PARSE_ERROR,
  GENERATE_OBJECT_VALIDATION_ERROR,
  GENERATE_OBJECT_UNKNOWN_ERROR,
] as const;

export type GenerateOjbectReturnType =
  (typeof GENERATE_OJBECT_RETURN_TYPES)[number];

export type GenerateObjectSuccessResponse<T extends {}> = {
  type: typeof GENERATE_OBJECT_SUCCESS;
  object: T;
};

export function isGenerateObjectSuccessBody<T extends {}>(
  body: unknown
): body is GenerateObjectSuccessResponse<T> {
  return (
    typeof body === "object" &&
    body !== null &&
    "type" in body &&
    body.type === GENERATE_OBJECT_SUCCESS
  );
}

export type GenerateObjectErrorResponse =
  | { type: typeof GENERATE_OBJECT_PARSE_ERROR; text: string }
  | { type: typeof GENERATE_OBJECT_VALIDATION_ERROR; value: unknown }
  | { type: typeof GENERATE_OBJECT_UNKNOWN_ERROR; error: unknown };

export const ConvertibleMessageSchema = z.object({
  role: z.enum(ONE_TO_ONE_ROLES),
  content: z.string(),
});

export type ConvertibleMessage = z.infer<typeof ConvertibleMessageSchema>;
