"use server";

import { dbCreateNewSession } from "@/db/sessions";
import { dbGetUserByUsername } from "@/db/users";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as bcrypt from "bcryptjs"

export async function actionLogin(formData: FormData) {
  
  const usernameField = formData.get("username");
  const passwordField = formData.get("password");
  if (!passwordField || !usernameField) {
    return `Missing form`;
  }
  const password = passwordField.valueOf();
  const username = usernameField.valueOf();
  if (typeof password !== "string" || typeof username !== "string") {
    return `Wrong Type`;
  }
  /*if (password !== process.env.PASSWORD) {
    return `Wrong Credentials`;
  }*/

  //get user by username
  const user = await dbGetUserByUsername(username);
  if (!user) {
    return `Wrong credentials`;
  }

  // Check password
  const passwordMatches = await bcrypt.compare(password, user.hashedPassword);
  if (!passwordMatches) {
    return `Wrong credentials`;
  }

  // Create Session
  const newSession = await dbCreateNewSession(user.id);
  if (!newSession) {
    return `Could not create new session`;
  }
  


  cookies().set("auth", newSession.id);
  
  const pathField = formData.get("path");
  const pathObj = pathField?.valueOf();
  const path = typeof pathObj ==="string" ? pathObj :"";
  redirect(path? path : "/");
}

export async function actionLogout() {
  cookies().delete("auth");
  redirect("/login");
}
