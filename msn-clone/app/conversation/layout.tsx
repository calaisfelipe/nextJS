import React from "react";
import Sidebar from "@/components/Sidebar";
import ConversationList from "./components/ConversationList";
import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

const ConversationsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

    const conversations = await getConversations()
    const users = await getUsers()

  return (
    <div>
      <Sidebar>
        <div className="h-full">
            <ConversationList 
            initialItems={conversations}
            users={users}
            />
            {children}</div>
      </Sidebar>
    </div>
  );
};

export default ConversationsLayout;
