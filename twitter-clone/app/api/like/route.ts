import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import options from "../auth/[...nextauth]/options";

export async function POST(req: Request) {
  try {
    const { postId } = await req.json();

    const user = await getServerSession(options);

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: user?.user?.email as string,
      },
    });

    if (!currentUser) {
      return new NextResponse("User not exist", { status: 401 });
    }

    if (!postId || typeof postId !== "string") {
      return new NextResponse("invalid post id", { status: 402 });
    }

    const post = await prismadb.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return new NextResponse("Invalid ID", { status: 403 });
    }

    const updatedLikesIds = [...(post.likedIds || [])];

    updatedLikesIds.push(currentUser.id);

    const updatedPost = await prismadb.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updatedLikesIds,
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
            body: "Someone liked your tweet",
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

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 404 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { postId } = await req.json();

    const user = await getServerSession(options);

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: user?.user?.email as string,
      },
    });

    if (!currentUser) {
      return new NextResponse("User not exist", { status: 400 });
    }

    if (!postId || typeof postId !== "string") {
      return new NextResponse("invalid post id", { status: 400 });
    }

    const post = await prismadb.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    let updatedLikesIds = [...(post.likedIds || [])];

    updatedLikesIds = updatedLikesIds.filter(
      (likedId) => likedId !== currentUser.id
    );

    const updatedPost = await prismadb.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updatedLikesIds,
      },
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 401 });
  }
}
