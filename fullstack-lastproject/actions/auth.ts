"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function actionLogin(formData: FormData) {
  const passwordField = formData.get("password");
  if (!passwordField) {
    return `Missing form`;
  }
  const password = passwordField.valueOf();
  if (typeof password !== "string") {
    return `Wrong Type`;
  }
  if (password !== process.env.PASSWORD) {
    return `Wrong Credentials`;
  }

  cookies().set("galleta", process.env.TOKEN || "Queeeeeeeee");
  const pathField = formData.get("path");
  const pathObj = pathField?.valueOf();
  const path = typeof pathObj ==="string" ? pathObj :"";
  redirect(path? path : "/");
}

export async function actionLogout() {
  cookies().delete("galleta");
  redirect("/login");
}
