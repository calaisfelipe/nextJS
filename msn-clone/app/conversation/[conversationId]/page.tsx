import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/components/EmptyState";
import React from "react";
import HeaderConversation from "../components/HeaderConversation";
import BodyConversation from "../components/BodyConversation";
import FormConversation from "../components/FormConversation";

type Iparams ={
    conversationId: string
}


const ConversationId = async ({params}:{params: Iparams}) => {
    const conversation = await getConversationById(params.conversationId)
    const messages = await getMessages(params.conversationId)

    if(!conversation){
        return <div className="lg:pl-80 h-full">
            <div className="h-full flex flex-col">
                <EmptyState />
            </div>
        </div>
    }

  return (
    <div className="lg:pl-80 h-full">
    <div className="h-[100vh] flex flex-col">
        <HeaderConversation conversation={conversation} />
        <BodyConversation />
        <FormConversation />
    </div>
</div>


  )
}

export default ConversationId;
