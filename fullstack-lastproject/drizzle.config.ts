import { defineConfig } from "drizzle-kit";
import { env } from "./lib/utils";

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env("DB_URL"),
    token: env("DB_TOKEN"),
  },
  verbose: true,
  strict: true,
});