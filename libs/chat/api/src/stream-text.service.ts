import { streamText as aIstreamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { ConvertibleMessage } from "@chat/domain";
import { HydratedEvent, hydratedEventSchema } from "@events/domain";
import { Artist, artistSchema } from "@artists/domain";
import { Location, locationSchema } from "@locations/domain";
import { Err, Ok } from "ts-results";
import { ArtistService } from "@artists/api";
import { LocationService } from "@locations/api";

async function streamText(messages: ConvertibleMessage[]) {
  const result = await aIstreamText({
    model: openai("gpt-4o"),
    messages: messages,
    system:
      "You are an music event planner assistant. Most the time you answer questions but you can also collect and validate data to generage an record of it that will be shared with the user later.",
    tools: {
      generateEvent: {
        description: "Generate an music event",
        parameters: hydratedEventSchema,
        execute: async (event: HydratedEvent) => {
          console.log(event);
          return "Hell yeah, event brother";
        },
      },
      generateArtist: {
        description: "Generate an artist.",
        parameters: artistSchema,
        execute: async (artist: Artist) => {
          console.log(artist);
          await ArtistService.createOne(artist);
          return "Hell yeah, artist brother";
        },
      },
      generateLocation: {
        description: "Generate a location to organise concert",
        parameters: locationSchema,
        execute: async (location: Location) => {
          await LocationService.createOne(location);
          return "Hell yeah, location brother";
        },
      },
    },
  });

  if (
    ["error", "other", "unknown"].includes(
      result.finishReason as unknown as string
    )
  ) {
    return Err(result.finishReason);
  }

  return Ok(result.toDataStreamResponse());
}

export const StreamTextService = {
  streamText,
};
