import {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import { prismadb } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';


export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                username:{label:'username', type:"text"},
                email:{label: "email", type:'email'},
                password:{ label:"password", type:'password'}
            },
            async authorize(credentials, req){
                const user = ''
                return user
            },
        }),

    ],
    session: {strategy: "jwt"},
    secret: process.env.NEXTAUTH_URL_SECRET as string,
    debug: process.env.NODE_ENV === 'development',


    
}

