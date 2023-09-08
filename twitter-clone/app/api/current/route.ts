import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import options from "../auth/[...nextauth]/options";

export async function GET(req:Request) {
  try {
    const session = await getServerSession(options);

    if (!session) {
      return new NextResponse("Not logged in", { status: 401 });
    }

    const currentUser = await prismadb.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (!currentUser) {
      return new NextResponse("User not exist", { status: 401 });
    }

    return NextResponse.json(currentUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
