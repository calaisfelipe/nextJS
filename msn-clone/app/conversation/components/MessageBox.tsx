"use client";
import React from "react";
import { FullMessageType } from "@/app/types";
import { useSession } from "next-auth/react";
import Avatar from "@/components/Avatar";
import { format } from "date-fns";
import Image from "next/image";

type MessageBoxType = {
  isLast: boolean;
  data: FullMessageType;
};

const MessageBox = ({ isLast, data }: MessageBoxType) => {
  const session = useSession();

  const isOwn = session?.data?.user?.email === data?.sender?.email;

  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = `flex gap p-4 ${isOwn && "justyfy-end"}`;

  const avatar = `${isOwn && "order-2"}`;

  const body = `flex flex-col gap-2 w-full ${isOwn && "items-end"}`;

  const message = `text-sm w-fit overflow-hidden ${
    isOwn ? "bg-sky-500" : "bg-gray-100"
  } ${data.image ? "rounder-md" : "rounded-full py-2 px-3"}`;

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{data.sender.name}</div>
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt), "p")}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              height="288"
              width="288"
              alt="image"
              src={data.image}
              className="object-cover cursor-pointer hover:scale-110 transition translate"
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div className=" text-xs text-gray-500 font-light">
            {`Seen by ${seenList}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
