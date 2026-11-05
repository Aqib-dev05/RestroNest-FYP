import prisma from "../src/config/db.js";

async function main() {
  console.log(
    "Seeding placeholder - models will be seeded after schema migration.",
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
