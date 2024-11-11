import { ONE_TO_ONE_ROLES } from "./constants";
import { z } from "zod";

export const ConvertibleMessageSchema = z.object({
  role: z.enum(ONE_TO_ONE_ROLES),
  content: z.string(),
});

export type ConvertibleMessage = z.infer<typeof ConvertibleMessageSchema>;
