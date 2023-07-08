import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
      GitHubProvider({ 
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: {
            label: "username",
            type: "text",
            placeholder: "Insert your name here",
          },
          password: {
            label: "password",
            type: "password",
            placeholder: "Insert your password here",
          },
        },
        async authorize(credentials: any) {
          const userAuthorized = {
            name: "felipe",
            password: "123456",
            id: "21",
          };
  
          if (
            credentials?.username === userAuthorized.name &&
            credentials?.password === userAuthorized.password
          ) {
            return userAuthorized;
          } else {
            throw new Error("Username or password invalid");
          }
        },
      }),
    ]
  }