import {NextResponse} from 'next/server'
import { prismadb } from '@/lib/prisma';


export async function GET(req:Request,{params:{userId}}:any) {
    try {
      
  
       const posts = await prismadb.post.findMany({
          where: {
            userId: userId,
          },
          include: {
            user: true,
            comments: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
     
  
      return NextResponse.json(posts);
    } catch (error) {
      console.log(error);
      return new NextResponse("Something went wrong", { status: 402 });
    }
  }