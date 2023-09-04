import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";

export async function GET(req: Request, {params:{userId}}:{params:any}) {
  try {

    if (!userId || typeof userId !== 'string') {
      return new NextResponse("Invalid Id", { status: 401 });
    }

    const user = await prismadb.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      return new NextResponse("Something went wrong", { status: 400 });
    }

    const followersCount = await prismadb.user.count({
        where:{
            followingIds:{
                has: userId
            }
        }
    })


    return NextResponse.json({...user, followersCount});
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
