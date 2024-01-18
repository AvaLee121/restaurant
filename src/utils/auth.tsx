import GoogleProvider from "next-auth/providers/google"

export const authOptions:import("next-auth").NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        // ...add more providers here
      ],
    

}