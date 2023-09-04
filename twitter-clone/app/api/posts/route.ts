import { NextResponse } from "next/server";
import { NextApiResponse } from "next";
import { prismadb } from "@/lib/prisma";

import { getServerSession } from "next-auth";
import options from "../auth/[...nextauth]/options";

export async function POST(req: Request) {
  try {
    const { body } = await req.json();
    const session = await getServerSession(options);

    const user = await prismadb.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (!user) {
      return new NextResponse("Something went wrong", { status: 401 });
    }

    const post = await prismadb.post.create({
      data: {
        body,
        userId: user.id as string,
      },
    });

    if (!post) {
      return new NextResponse("Something went wrong", { status: 401 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}

export async function GET(req: Request) {
  try {
    //const { userId } = await req.json();

    const posts = await prismadb.post.findMany({
      include: {
        user: true,
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    /*
    if (userId && typeof userId === "string") {
      posts = await prismadb.post.findMany({
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
    } else {
      posts = await prismadb.post.findMany({
        include: {
          user: true,
          comments: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });*/

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 402 });
  }
}
