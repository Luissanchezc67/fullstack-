import { eq } from "drizzle-orm";
import { db } from "./db";
import { sessions } from "./schema";

export const dbGetSessionById = async (sessionId: string) => {
  const [session] = await db.select().from(sessions).where(eq(sessions.id, sessionId));
  return session;
};

export const dbCreateNewSession = async (userId: string) => {
  const expire = new Date();
  expire.setDate(expire.getDate() + 30);

  console.log(userId);
  const [session] = await db
    .insert(sessions)
    .values({
      id: crypto.randomUUID(),
      expiresAt: expire,
      userId,
    })
    .returning();

  return session;
};