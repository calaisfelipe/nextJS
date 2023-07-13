import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, password, email } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing info", {
        status: 400,
      });
    }

    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if(existingEmail){
      return NextResponse.json({"message": "Email already used"})
    }



    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });

    return NextResponse.json(user);
  } catch(error) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("Internal Errorr", { status: 500 });
  }
}
