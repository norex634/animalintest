import { NextResponse,NextRequest  } from 'next/server'
import { getToken } from "next-auth/jwt"
export { default } from "next-auth/middleware"
 
export async function middleware(request) {
    // recupération du token
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
    
    if(!token){
        // redirection vers la page de base
        if (request.nextUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/login', request.url))
        }
    }
}