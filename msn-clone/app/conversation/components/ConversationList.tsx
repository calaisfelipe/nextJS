"use client";
import React, { useState, useMemo, useEffect } from "react";
import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import { User } from "@prisma/client";
import getUsers from "@/app/actions/getUsers";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/lib/pusher";
import { find } from "lodash";

type ConversationListProps = {
  initialItems: FullConversationType[];
  users: User[];
};

const ConversationList = ({ initialItems, users }: ConversationListProps) => {
  const session = useSession();
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const { isOpen, conversationId } = useConversation();

  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  useEffect(() => {
    if (!pusherKey) {
      return;
    }

    pusherClient.subscribe(pusherKey);

    const newHandler = (conversation: FullConversationType) => {
      setItems((current) => {
        if (find(current, { id: conversation.id })) {
          return current;
        }

        return [...current, conversation];
      });
    };

    const updateHandler = (conversation: FullConversationType) => {
      setItems((current) =>
        current.map((currentConversation) => {
          if (currentConversation.id === conversation.id) {
            return {
              ...currentConversation,
              messages: conversation.messages,
            };
          }

          return currentConversation;
        })
      );
    };

    const removeHandler = (conversation: FullConversationType) => {
      setItems((current) => {
        return [...current.filter((conver) => conver.id !== conversation.id)];
      });

      if(conversationId === conversation.id ){
        router.push('/conversations')
      }

    };

    pusherClient.bind("conversation:new", newHandler);
    pusherClient.bind("conversation:update", updateHandler);
    pusherClient.bind("conversation:remove", removeHandler);

    return () => {
      pusherClient.unsubscribe(pusherKey);
      pusherClient.unbind("conversation:new", newHandler);
      pusherClient.unbind("conversation:update", updateHandler);
      pusherClient.unbind("conversation:remove", removeHandler);
    };
  }, [pusherKey, conversationId, router]);

  return (
    <>
      <GroupChatModal
        users={users}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg-:w-80 lg:block overflow-y-auto border-r border-gray-200 ${
          isOpen ? "hidden" : "block w-full left-0"
        }`}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4 w-44">
            <div className="text-2xl font-bold  text-neutral-800">Messages</div>
            <div
              className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition"
              onClick={() => setIsModalOpen(true)}
            >
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          <div className="flex gap-3 lg:gap-5 flex-col">
            {items.map((item) => (
              <ConversationBox
                key={item.id}
                data={item}
                selected={conversationId === item.id}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
