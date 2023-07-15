import React from "react";
import Sidebar from "@/components/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

    const conversations = await getConversations()

  return (
    <div>
      <Sidebar>
        <div className="h-full">
            <ConversationList initialItems={conversations}/>
            {children}</div>
      </Sidebar>
    </div>
  );
};

export default ConversationsLayout;
