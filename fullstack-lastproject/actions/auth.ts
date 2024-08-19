"use server"


import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function actionLogin() {
    cookies().set("galleta","...");
    redirect("/");
}

export async function actionLogout() {
    cookies().delete("galleta");
    redirect("/login")
}