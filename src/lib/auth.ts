import bcrypt from "bcryptjs";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // USE PROCESS ENV MAYBE
        const user = {
          id: "1",
          name: "Cheng",
          username: "chengconnectgroup",
          passwordHash:
            "$2b$10$0q9KbSTL2R1NQqlkH.a7GOzcfPo87s6ChxdXdtZIVF4oK0Kagri82",
        };

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );

        if (credentials.username === user.username && isPasswordValid) {
          return { id: user.id, name: user.name };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
