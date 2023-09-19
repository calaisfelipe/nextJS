import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prismadb } from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
//import type { Adapter } from '@auth/core/adapters';
import bcrypt from "bcrypt";

const options: NextAuthOptions = {
  adapter:PrismaAdapter(prismadb),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        console.log("authorize method", credentials);

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing Credentials");
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials?.email
          }
        })

        if(!user || !user.hashedPassword){
          throw new Error('Email not exist')
        }

        const validPassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if(!validPassword){
          throw new Error('Invalid password')
        }

        return user


      },

    }),
  ],
  session: { strategy: "jwt" },
  jwt:{ secret: process.env.NEXTAUTH_JWT_SECRET as string},
  secret: process.env.NEXTAUTH_SECRET as string,
  debug: process.env.NODE_ENV === "development",
};

export default options;
