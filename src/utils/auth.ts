import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
/* import {NextAuthOptions} from "next-auth"; */

const prisma = new PrismaClient()

export const authOptions:import("next-auth").NextAuthOptions = {
  adapter : PrismaAdapter(prisma) as any,  
  providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        // ...add more providers here
      ],
};

export const getAuthSession = () => getServerSession(authOptions);