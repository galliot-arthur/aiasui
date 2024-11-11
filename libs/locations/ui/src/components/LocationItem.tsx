"use client";

import { Instagram } from "@material-ui/icons";

import { onDelete } from "./serverActions/onDelete";
import { i18n, ListItem } from "@commons/ui";
import { Location } from "@prisma/client";

interface Props {
  location: Location;
}

export function LocationItem({ location }: Props) {
  return (
    <ListItem
      title={location.name}
      subtitle={`${location.country} - ${location.city}`}
      links={[
        {
          href: location.instagramUrl,
          title: i18n.location.instagram,
          icon: <Instagram fontSize="inherit" color="inherit" />,
        },
      ]}
      deleteButton={{
        action: () => onDelete(location.id),
        description: i18n.location.delete,
      }}
    />
  );
}
