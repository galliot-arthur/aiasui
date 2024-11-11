import { artistSchema } from "@artists/domain";
import { z } from "zod";

export const eventSchema = z.object({
  name: z.string(),
  startDate: z
    .string()
    .date()
    .transform((value) => new Date(value)),
  endDate: z
    .string()
    .date()
    .transform((value) => new Date(value)),
  price: z.number(),
});

export type Event = z.infer<typeof eventSchema>;

export const hydratedEventSchema = eventSchema.extend({
  artists: z.array(artistSchema),
});

export type HydratedEvent = z.infer<typeof hydratedEventSchema>;
