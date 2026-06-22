import "dotenv/config";
import { PrismaClient } from "@prisma/client";

console.log("DB:", process.env.DATABASE_URL);

const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

console.log("Prisma OK");npm run dev