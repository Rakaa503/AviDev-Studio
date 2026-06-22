import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
 const adminPassword = await bcrypt.hash("adminAvidev202610", 10);

   await prisma.user.upsert({
  where: { email: "AviDevelopmentStudio@gmail.com" },
  update: {
    password: adminPassword,
  },
  create: {
    name: "Admin",
    email: "AviDevelopmentStudio@gmail.com",
    password:adminPassword ,
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
  })