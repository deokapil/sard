import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";
import { env } from "@/env";

const DATABASE_URL = env.DATABASE_URL ?? "";

const drizzleConfig = {
  schema: "./src/drizzle/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: { url: DATABASE_URL },
} satisfies Config;

export default defineConfig(drizzleConfig);
