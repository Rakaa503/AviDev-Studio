import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@avidev.studio" },
    update: {},
    create: {
      name: "Admin AviDev",
      email: "admin@avidev.studio",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  console.log("Seed sukses 🔥");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });