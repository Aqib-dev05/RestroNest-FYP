import { createRequire } from "module";

const require = createRequire(import.meta.url);

let prisma = null;

try {
  const pkg = require("@prisma/client");
  const PrismaClient = pkg.PrismaClient || pkg.default?.PrismaClient;
  if (PrismaClient) {
    prisma = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    });
  }
} catch {
  // Prisma client will be instantiated once prisma generate runs with schema models
  prisma = null;
}

export default prisma;
export { prisma };
