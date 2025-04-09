/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { FullUser } from "./types/user";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<FullUser | undefined> {
  try {
    const user = await sql<FullUser[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user : FullUser | undefined = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        };

        console.log('Invalid credentials');

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user } : any) {
      if (user) { // User is available during sign-in
        token.lastname = user.lastname
        token.avatar_url = user.avatar_url
      }
      return token
    },
    session({ session, token } : any) {
      session.user.lastname = token.lastname
      session.user.avatar_url = token.avatar_url
      return session
    },
  }
});
