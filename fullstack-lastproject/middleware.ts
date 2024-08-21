import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { dbGetSessionById } from "./db/sessions";

export async function middleware(req: NextRequest) {
  const authCookie = cookies().get("auth");
  if (!authCookie) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url));
  }

  const sessionId = authCookie.value;
  const session = await dbGetSessionById(sessionId);
  if (!session) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url));
  }
  
  const now = new Date();
  if (session.expiresAt < now) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"],
};
