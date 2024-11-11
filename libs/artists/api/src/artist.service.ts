import { Artist, artistSchema } from "@artists/domain";
import { Err, Ok } from "ts-results";
import { ArtistRepository } from "./artist.repository";

async function create(body: Artist) {
  try {
    const parsed = artistSchema.parse(body);

    const created = await ArtistRepository.create(parsed);

    return Ok(created);
  } catch (error) {
    return Err(error);
  }
}

export const ArtistService = { createOne: create };
