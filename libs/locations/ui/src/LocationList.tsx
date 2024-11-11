import { prismaDb } from "@database/api";

import { Location } from "@prisma/client";
import { ListCard, i18n } from "@commons/ui";
import { LocationItem } from "./components/LocationItem";

export async function LocationList() {
  const locations: Location[] = await prismaDb.location.findMany();

  return (
    <ListCard
      title={i18n.location.title}
      items={locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    />
  );
}
