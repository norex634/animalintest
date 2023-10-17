import prisma from "@/lib/prisma";
import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages:{
    signIn: "/login",
    error: "/login"
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // fetch axios user 
        const user = await prisma.user.findUnique({
          where : {email : credentials.email}
        })
        const PassValide = await bcrypt.compare(credentials.password, user.password)
        if(!PassValide || !user){
          throw new Error ("invalide email or password du con")
        }

        return{
          nom:user.nom,
          prenom:user.prenom,
          image:user.image,
          email:user.email,
          role:user.role
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      return {...token}
    },
    async session({ session, token, user }) {
      session.user = token
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}

