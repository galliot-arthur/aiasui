import { z } from "zod";

export const artistSchema = z.object({
  name: z.string(),
  contactEmail: z.string().optional(),
  instagramUrl: z.string(),
  bio: z.string(),
  genres: z.array(z.string()),
  country: z.string(),
  city: z.string(),
});

export type Artist = z.infer<typeof artistSchema>;
