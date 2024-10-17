import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

// Middleware criado p/ evitar que a sessão se encerre durante a utilização do usuario
export async function middleware(req: NextRequest) {
    
    const res = NextResponse.next()

    try {
        
        const supabase = createMiddlewareClient({ req, res})
        await supabase.auth.getSession()


    } catch (error) {
        console.log("middleware", error)
    }

    return res

}