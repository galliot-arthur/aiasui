import { prismaDb } from "@database/api";
import { ArtistItem } from "./components/ArtistItem";

import { Artist } from "@prisma/client";
import { ListCard, i18n } from "@commons/ui";

export async function ArtistList() {
  const artists: Artist[] = await prismaDb.artist.findMany();

  return (
    <ListCard
      title={i18n.artist.title}
      items={artists.map((artist) => (
        <ArtistItem key={artist.id} artist={artist} />
      ))}
    />
  );
}
