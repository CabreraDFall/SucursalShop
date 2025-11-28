require('dotenv').config();  // load env vars first
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log(process.env.DATABASE_URL, typeof process.env.DATABASE_URL);
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
