import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { prismadb } from "@/lib/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    if (!email || !password || !name) {
      return new NextResponse("Missing data", { status: 400 });
    }

    const existingUser = await prismadb.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json("Email already used");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createUser = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    if (!createUser) {
      return new NextResponse("Internal error", { status: 500 });
    }

    return NextResponse.json(createUser);
  } catch (err) {
    console.log(err, "Registration error");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
