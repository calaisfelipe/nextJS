"use client";
import React, { useState, Fragment } from "react";
import { FullMessageType } from "@/app/types";
import { useSession } from "next-auth/react";
import Avatar from "@/components/Avatar";
import { format } from "date-fns";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";

type MessageBoxType = {
  isLast: boolean;
  data: FullMessageType;
};

const MessageBox = ({ isLast, data }: MessageBoxType) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
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
    <>
      <Transition appear show={imageModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setImageModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md transform  rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-1">
                 

                  <div className="flex justify-center items-center relative">
                  <button onClick={() => setImageModalOpen(false)}>
                      <AiOutlineClose
                        className="text-gray-500 hover:text-gray-900 hover:text-bold absolute top-[-10%] left-[110%] border border-gray-900 rounded-md"
                        size={20}
                      />
                    </button>
                    <Image
                      onClick={() => setImageModalOpen(true)}
                      height={288}
                      width={288}
                      alt="image"
                      src={data.image!}
                      className="object-cover cursor-pointer"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
                onClick={() => setImageModalOpen(true)}
                height="288"
                width="288"
                alt="image"
                src={data.image}
                className="object-cover cursor-pointer hover:scale-110 transition translate p-2"
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
    </>
  );
};

export default MessageBox;
