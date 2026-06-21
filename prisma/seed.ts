import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      name: "Admin AviDev",
      email: "admin@avidev.studio",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  console.log("Seed OK 🔥");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());