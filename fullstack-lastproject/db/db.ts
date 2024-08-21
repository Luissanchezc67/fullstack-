import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@/lib/utils";

const client = createClient({
    url: env("DB_URL"),
    authToken: env("DB_TOKEN"),
});

export const db = drizzle(client);
