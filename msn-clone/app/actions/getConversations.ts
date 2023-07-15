import prisma from '@/lib/prismadb'
import getCurrentUser from './getCurrentUser'


export default async function getConversations(){
    const user = await getCurrentUser()
    if(!user?.id){
        return []
    }
    try{
         const conversations = await prisma.conversation.findMany({
            orderBy:{
                lastMessafeAt: 'desc'
            },
            where:{
                userIds:{
                    has: user.id
                }
            },
            include: {
                users: true,
                messages: {
                    include: {
                        sender: true,
                        seen: true
                    }
                }
            }
         }) 

    
         return conversations

    }catch(error){
        return []
    }


}

