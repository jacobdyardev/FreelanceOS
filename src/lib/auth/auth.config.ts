// Central NextAuth configuration shared by the auth route and future server helpers.
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      credentials: {
        email: {},

        password: {},
      },

      async authorize(credentials) {
        // User validation will be added later
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    // Use stateless JWT sessions until server-side session storage is needed.
    strategy: "jwt",
  },
};
