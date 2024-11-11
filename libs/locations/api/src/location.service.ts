import { Err, Ok } from "ts-results";

import { Location, locationSchema } from "@locations/domain";
import { LocationRepository } from "./location.repository";

async function createOne(body: Location) {
  try {
    const parsed = locationSchema.parse(body);

    const created = await LocationRepository.create(parsed);

    return Ok(created);
  } catch (error) {
    return Err(error);
  }
}

export const LocationService = { createOne };
