import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password, username } = body;

    if (!name || !email || !password || !username) {
      return new NextResponse("Missing data", { status: 401 });
    }

    const existingUser = await prismadb.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return new NextResponse("Email already used", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prismadb.user.create({
      data: {
        email,
        hashedPassword,
        name,
        username,
      },
    });

    if (!newUser) {
      return new NextResponse("Internal Error", { status: 500 });
    }

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
