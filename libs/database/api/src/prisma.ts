//@ts-nocheck
import { PrismaClient } from "@prisma/client";

let prismaDb: PrismaClient;

if (!global.prisma) {
  global.prisma = new PrismaClient();
}
prismaDb = global.prisma;

export { prismaDb };
