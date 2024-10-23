import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";


export async function GET(req: NextRequest) {
    const requestUrl = new URL(req.url)
    const code = requestUrl.searchParams.get("code")

    try {
        if(code){
            const supabase = createRouteHandlerClient({cookies})
            const data = await supabase.auth.exchangeCodeForSession(code)   
        }
    } catch (error) {
        console.log("Auth_callback", error)
    }

    return NextResponse.redirect(requestUrl.origin)
}