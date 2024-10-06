import { z } from "zod";

export const eventSchema = z.object({
  event: z.object({
    name: z.string(),
    /*   startDate: z
      .string()
      .date()
      .transform((value) => new Date(value)),
    endDate: z
      .string()
      .date()
      .transform((value) => new Date(value)), */
    artists: z.array(
      z.object({
        name: z.string(),
        amount: z.string(),
        email: z.string().email(),
      })
    ),
    price: z.number(),
  }),
});

export type Event = z.infer<typeof eventSchema>;
