import { prismaDb } from "@database/api";
import { Location } from "@locations/domain";

async function create(body: Location) {
  const result = await prismaDb.location.create({
    data: {
      ...body,
      contactEmail: body.contactEmail ?? null,
    },
  });

  return result;
}

export const LocationRepository = { create };
