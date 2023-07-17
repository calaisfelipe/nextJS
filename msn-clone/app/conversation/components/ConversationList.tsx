"use client";
import React, { useState } from "react";
import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";

type ConversationListProps = {
  initialItems: FullConversationType[];
};

const ConversationList = ({ initialItems }: ConversationListProps) => {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();

  const { isOpen, conversationId } = useConversation();

  return (
    <aside
      className={`fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg-:w-80 lg:block overflow-y-auto border-r border-gray-200 ${
        isOpen ? "hidden" : "block w-full left-0"
      }`}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4 w-44">
          <div className="text-2xl font-bold  text-neutral-800">Messages</div>
          <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition ">
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        <div className="flex gap-3 lg:gap-5 flex-col">
          {items.map((item) => <ConversationBox key={item.id} data={item} selected={conversationId === item.id} />)}
        </div>
      </div>
    </aside>
  );
};

export default ConversationList;
