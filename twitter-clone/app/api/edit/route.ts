import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {

    const { name, username, profileImage, coverImage, bio, id } = await req.json();

    if (!name || !username) {
      return new NextResponse("Missing data", { status: 500 });
    }

    const updatedUser = await prismadb.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        username,
        profileImage,
        coverImage,
        bio,
      },
    });

    if (!updatedUser) {
      return new NextResponse("Failed to Edit user", { status: 500 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
