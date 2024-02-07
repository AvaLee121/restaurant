import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
/* import {NextAuthOptions} from "next-auth"; */

const prisma = new PrismaClient()

declare module "next-auth" {
  interface Session{
    user: User & {
      isAdmin: Boolean;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT{
      isAdmin: Boolean;
  }
}
export const authOptions:import("next-auth").NextAuthOptions = {
  adapter : PrismaAdapter(prisma) as any,  
  session : {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks:{
    async session({token, session}){
      if(token){
        session.user.isAdmin = token.isAdmin;
      }

      return session
    },
    async jwt({token}){
      const userInDb = await prisma.user.findUnique({
        where:{
          email: token.email!
        }
      })
      token.isAdmin = userInDb?.isAdmin!;
      return token;
    }
  }
};

export const getAuthSession = () => getServerSession(authOptions);