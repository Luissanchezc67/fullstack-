import { eq } from "drizzle-orm";
import { db } from "./db";
import { users } from "./schema";

export const dbGetUserByUsername = async (username: string) => {
  const [user] = await db.select().from(users).where(eq(users.username, username));
  return user;
};