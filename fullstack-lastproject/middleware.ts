
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export async function middleware (req: NextRequest){
const galleta = cookies().get("galleta");
if (!galleta){
    return NextResponse.redirect(new URL("/login", req.url));
}
    console.log(`No cookie!`);
}

export const config = {
    matcher: [
      '/((?!_next/static|_next/image|favicon.ico|login).*)',
    ],
  }