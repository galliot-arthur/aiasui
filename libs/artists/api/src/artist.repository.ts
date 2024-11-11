import { Artist } from "@artists/domain";
import { prismaDb } from "@database/api";

async function create(body: Artist) {
  const result = await prismaDb.artist.create({
    data: {
      ...body,
      instagramUrl: body.instagramUrl,
      contactEmail: body.contactEmail ?? null,
    },
  });

  return result;
}

export const ArtistRepository = { create };
