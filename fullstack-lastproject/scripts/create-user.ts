import { db } from "@/db/db";
import { users } from "@/db/schema";
import * as bcrypt from "bcryptjs";

const [username, password] = process.argv.slice(2);
if (!username || !password) {
  console.error(`Usage: create-user.ts <username> <password>`);
  process.exit(1);
}

const salt = await bcrypt.genSalt();
const newUser = await db.insert(users).values({
  id: crypto.randomUUID(),
  username,
  hashedPassword: await bcrypt.hash(password, salt),
}).returning();

console.log(newUser);