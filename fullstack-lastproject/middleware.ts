import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const galleta = cookies().get("galleta");
  if (!galleta || galleta.value != process.env.TOKEN) {
    return NextResponse.redirect(
      new URL(`/login?path=${req.nextUrl.pathname}`, req.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|login).*)"],
};
