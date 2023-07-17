import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();

    const { conversationId, message, image } = body;

    if (!currentUser?.id || !currentUser.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const createNewMessage = await prisma.message.create({
      data: {
        body: message,
        image: image,
        conversation: {
          connect: {
            id: conversationId,
          },
        },
        sender: {
          connect: {
            id: currentUser.id,
          },
        },
        seen: {
            connect:{
                id: currentUser.id
            }
        },
      },
      include:{
        seen: true,
        sender: true,
    }
    });

    const updateConversation = await prisma.conversation.update({
        where:{
            id: conversationId
        },
        data:{
            lastMessafeAt: new Date(),
            messages:{
                connect:{
                    id: createNewMessage.id
                }
            }
        },
        include:{
            users: true,
            messages: {
                include:{
                    seen: true
                }
            }
        }
    })

    return NextResponse.json(createNewMessage)

  } catch (error) {
    console.log(error, "ERROR_MESSAGES");
    return new NextResponse("Internal Error");
  }
}
