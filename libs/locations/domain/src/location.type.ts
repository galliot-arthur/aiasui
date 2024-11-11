import { eventSchema } from "@events/domain";
import { z } from "zod";

export const locationSchema = z.object({
  name: z.string(),
  address: z.string(),
  city: z.string(),
  contactEmail: z.string().optional(),
  website: z.string(),
  instagramUrl: z.string(),
  country: z.string(),
});

export type Location = z.infer<typeof locationSchema>;

export const hydratedLocationSchema = locationSchema.extend({
  events: z.array(eventSchema),
});

export type HydratedLocation = z.infer<typeof hydratedLocationSchema>;
