"use server";

import { prismaDb } from "@database/api";

export const onDelete = async (id: number) => {
  await prismaDb.artist.delete({
    where: { id },
  });
};
