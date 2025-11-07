import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  let globalWithprisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };

  if (!globalWithprisma.prisma) {
    globalWithprisma.prisma = new PrismaClient();
  }

  prisma = globalWithprisma.prisma;
}

export default prisma;
