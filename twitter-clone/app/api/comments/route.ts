import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import options from "../auth/[...nextauth]/options";
import { serialize } from "v8";

export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const params = Object.fromEntries(searchParams.entries());

    const postId = params.postId;
    const { body } = await req.json();
    const currentUser = await getServerSession(options);

    const user = await prismadb.user.findUnique({
      where: {
        email: currentUser?.user?.email as string,
      },
    });

    if (!user) {
      return new NextResponse("User not exist", { status: 401 });
    }

    if (!postId || !body) {
      return new NextResponse("Missing Data", { status: 402 });
    }

    const comment = await prismadb.comment.create({
      data: {
        body,
        postId,
        userId: user.id,
      },
    });

    try {
      const post = await prismadb.post.findUnique({
        where: {
          id: postId,
        },
      });

      if (post?.userId) {
        await prismadb.notification.create({
          data: {
            body: "Someone replied to your tweet",
            userId: post.userId,
          },
        });
      }

      await prismadb.user.update({
        where: {
          id: post?.userId,
        },
        data: {
          hasNotification: true,
        },
      });
    } catch (error) {
      console.log(error);
    }

    if (!comment) {
      return new NextResponse("Error to create post", { status: 403 });
    }

    return NextResponse.json(comment);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
