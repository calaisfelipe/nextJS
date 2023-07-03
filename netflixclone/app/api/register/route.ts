import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(request: any) {
  if (request.method !== "POST") {
    return NextResponse.json({ message: "405 - ERROR" });
  }

  try {
    const { email, name, password } = await request.json();

    
    const existingUser = await prismadb.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email Taken" });
    }

   
   const hashedPassword = await bcrypt.hash(password, 12);

   
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user)
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "400 - ERROR" });
  }
}
