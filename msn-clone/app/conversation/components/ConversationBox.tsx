"use client";
import React, { useCallback, useMemo } from "react";
import { Conversation, Message, User } from "@prisma/client";
import Avatar from "@/components/Avatar";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";
import AvatarGroup from "@/components/AvatarGroup";

type ConversationBoxType = {
  data: FullConversationType;
  selected?: boolean;
};

const ConversationBox = ({ data, selected }: ConversationBoxType) => {
  const session = useSession();
  const router = useRouter();
  const otherUser = useOtherUser(data);

  const handleClick = useCallback(() => {
    router.push(`/conversation/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const currentUserEmail = useMemo(() => {
    return session?.data?.user?.email;
  }, [session?.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!currentUserEmail) {
      return false;
    }

    return (
      seenArray.filter((user) => user.email === currentUserEmail).length !== 0
    );
  }, [lastMessage, currentUserEmail]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an Image";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div
      onClick={handleClick}
      className={`w-40 relative flex items-center sparce-x-3  hover:bg-neutral-100 rounderd-lg transition cursor-pointer ${
        selected ? "bg-neutral-100" : "bg-white"
      }`}
    >

      {data.isGroup ? <AvatarGroup users={data.users} /> : <Avatar user={otherUser} />}
      
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900 ml-2">
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
                <p className="text-xs text-gray-400 font-light">
                    {format(new Date(lastMessage.createdAt), 'p')}
                </p>
            )}
          </div>
          <p className={`truncate text-xs lg:text-sm text-bold`}>
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
