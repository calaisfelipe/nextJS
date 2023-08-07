import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {prismadb} from '@/lib/prismadb'


export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb as any),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Username",
          type: "text",
          placeholder: "insert your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "insert your password",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
      },
      async authorize(credentials, req): Promise<any> {

        const user = {name: 'teste', password:'123456', email:'teste@example.com' }
       // const {email, name, hashedPassword } = credentials

        return user
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
