import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params: { userId } }: { params: { userId: string } }
) {
  try {
    if (!userId || typeof userId !== "string") {
      return new NextResponse("Invalid Id", { status: 401 });
    }

    const notifications = await prismadb.notification.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (notifications) {
      await prismadb.user.update({
        where: {
          id: userId,
        },
        data: {
          hasNotification: false,
        },
      });
    } else {
      return new NextResponse("error to get Notifications", { status: 402 });
    }

    return NextResponse.json(notifications);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 405 });
  }
}
