import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res })

    const { data, error } = await supabase.auth.getSession();

    const session = data?.session

    if (!session){
        return NextResponse.rewrite(new URL ('/login', req.url))
    }

    console.log(error)
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ]
}