"use server";

import { prismaDb } from "@database/api";

export const onDelete = async (id: number) => {
  await prismaDb.location.delete({
    where: { id },
  });
};
