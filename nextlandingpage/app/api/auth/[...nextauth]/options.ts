import bcrypt from 'bcrypt';
import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prismadb } from "@/lib/prismadb";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "insert your password",
        },
      },
      async authorize(credentials, req): Promise<any> {
        console.log("authorize method", credentials);
        //const user = { password: "123456", email: "teste@example.com", name:'teste' };

        
        if(!credentials?.email || !credentials?.password){
          throw new Error('Missing credentials')
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        if(!user || !user.hashedPassword){
          throw new Error('Invalid Credentials')
        }

        const validPassword = await bcrypt.compare(credentials.password, user.hashedPassword)


        if(!validPassword){
        throw new Error('Password invalid')
        }

        return user;
      },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  //secret: process.env.SECRET,
  debug: process.env.NODE_ENV === "development",
};
