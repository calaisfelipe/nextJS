import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const users = await prismadb.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!users) {
      return new NextResponse("Something went wrong", { status: 400 });
    }

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
