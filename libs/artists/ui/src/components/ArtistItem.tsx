"use client";

import { Instagram } from "@material-ui/icons";
import { Artist } from "@prisma/client";
import { onDelete } from "./serverActions/onDelete";
import { i18n, ListItem } from "@commons/ui";

interface Props {
  artist: Artist;
}

export function ArtistItem({ artist }: Props) {
  return (
    <ListItem
      title={artist.name}
      subtitle={`${artist.country} - ${artist.city}`}
      content={artist.bio}
      footer={`[${artist.genres.join(", ")}]`}
      links={[
        {
          href: artist.instagramUrl,
          title: i18n.artist.instagram,
          icon: <Instagram fontSize="inherit" color="inherit" />,
        },
      ]}
      deleteButton={{
        action: () => onDelete(artist.id),
        description: i18n.artist.delete,
      }}
    />
  );
}
