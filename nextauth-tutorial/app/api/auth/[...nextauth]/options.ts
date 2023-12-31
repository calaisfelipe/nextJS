import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username:",
          type: "text",
          placeholder: "Insert your username",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "Insert your password",
        },
      },
      async authorize(credentials) {
        const user = { id: "22", name: "felipe", password: "123456" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          throw new Error("Username or password invalid");
        }
      },
    }),
  ],
};
