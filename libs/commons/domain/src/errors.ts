import { z } from "zod";

export const API_GLOBAL_ERROR = "api_global_error";
export const NOT_FOUND_ERROR = "not_found";
export const BAD_REQUEST_ERROR = "bad_request";
export const FORBIDDEN_ERROR = "forbidden";

export const API_ERRORS = [
  API_GLOBAL_ERROR,
  NOT_FOUND_ERROR,
  BAD_REQUEST_ERROR,
  FORBIDDEN_ERROR,
] as const;
export type ApiError = (typeof API_ERRORS)[number];

export const ErrorSchema = z.object({
  message: z.enum(API_ERRORS),
  status: z.number(),
});

export type ErrorResponse = z.infer<typeof ErrorSchema>;
