import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import options from "../auth/[...nextauth]/options";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId || typeof userId !== "string") {
      return new NextResponse("Invalid Id", { status: 401 });
    }

    const user = await getServerSession(options);

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: user?.user?.email as string,
      },
    });

    if (!currentUser) {
      return new NextResponse("Invalid Id", { status: 401 });
    }

    let updatedFollowindIds = [...(currentUser.followingIds || [])];

    updatedFollowindIds.push(userId);

    const updatedUser = await prismadb.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowindIds,
      },
    });

    try {
      await prismadb.notification.create({
        data: {
          body: "Someone followed you",
          userId,
        },
      });

      await prismadb.user.update({
        where: {
          id: userId,
        },
        data: {
          hasNotification: true,
        },
      });
    } catch (error) {
      console.log(error);
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId || typeof userId !== "string") {
      return new NextResponse("Invalid Id", { status: 401 });
    }

    const user = await getServerSession(options);

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: user?.user?.email as string,
      },
    });

    if (!currentUser) {
      return new NextResponse("Invalid Id", { status: 401 });
    }

    let updatedFollowindIds = [...(currentUser.followingIds || [])];

    updatedFollowindIds = updatedFollowindIds.filter(
      (followingId) => followingId !== userId
    );

    const updatedUser = await prismadb.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowindIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
