
import { NextRequest, NextResponse } from "next/server";
export async function middleware (req: NextRequest){
    console.log("middleware",req.nextUrl.pathname);
    if(req.nextUrl.pathname === "/hola"){
        return NextResponse.json({hola:true});
    }
}