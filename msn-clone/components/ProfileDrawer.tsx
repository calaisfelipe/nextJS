"use client";
import React, { useMemo, Fragment, useState, useCallback } from "react";
import { Conversation, User } from "@prisma/client";
import useOtherUser from "@/app/hooks/useOtherUser";
import { format } from "date-fns";
import { Transition, Dialog } from "@headlessui/react";
import { IoClose, IoTrash } from "react-icons/io5";
import Avatar from "./Avatar";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { toast } from "react-hot-toast";
import AvatarGroup from "./AvatarGroup";

type ProfileDrawerType = {
  data: Conversation & { users: User[] };
  isOpen: boolean;
  onClose: () => void;
};

const ProfileDrawer = ({ data, isOpen, onClose }: ProfileDrawerType) => {
  const [openModal, setOpenModal] = useState(false);
  const otherUser = useOtherUser(data);
  const joinedDate = useMemo(() => {
    return format(new Date(otherUser.createdAt), "PP");
  }, [otherUser.createdAt]);

  const title = useMemo(() => {
    return data.name || otherUser.name;
  }, [data, otherUser.name]);

  const statusText = useMemo(() => {
    if (data.isGroup) {
      return `${data.users.length} members`;
    }

    return "Active";
  }, [data]);

  //Modal settings

  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);

    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/conversation");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong");
        setOpenModal(false);
      })
      .finally(() => setIsLoading(false));
  }, [conversationId, router, onClose]);

  return (
    <>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Delete confirmation"
        message="Are you sure you want to delete this conversation? This action cannot be undone."
        btn1={{ title: "Yes", action: onDelete }}
        btn2={{ title: "Cancel", action: () => setOpenModal(false) }}
        loading={isLoading}
      />

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 flex max-w-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500"
                  //leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll py-06 bg-white shadow-xl">
                      <div className="px-4 sm:px-6 ">
                        <div className="flex items-start justify-end">
                          <div className="ml-3 flex- h-7 items-center pt-2">
                            <button
                              onClick={onClose}
                              type="button"
                              className="rounder-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                            >
                              <span className="sr-only">Close Panel</span>
                              <IoClose size={24} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative
                    mt-6 flex-1 px-4 sm:px-6"
                      >
                        <div className="flex flex-col items-center">
                          <div className="mb-2 ">
                            {data.isGroup ? (
                              <AvatarGroup users={data.users} />
                            ) : (
                              <Avatar user={otherUser} />
                            )}
                          </div>
                          <div>{title}</div>
                          <div className="text-xs md:text-sm text-gray-500">
                            {statusText}
                          </div>
                          <div className="flex gap-10 my-8">
                            <div
                              onClick={() => setOpenModal(true)}
                              className="flex flex-col cursor-pointer items-center hover:opacity-75"
                            >
                              <div className="w-10 h-10 bg-neutral-100 flex rounded-full items-center justify-center">
                                <IoTrash size={20} />
                              </div>
                              <div className="text-xs md:text-sm text-neutral-600 font-light">
                                Delete
                              </div>
                            </div>
                          </div>
                          <div className="w-full pt-5 pb-5 sm:px-0 sm:pt-0 ">
                            <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                              {data.isGroup && (
                                <div>
                                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                    Emails
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                    <ul className="flex flex-col gap-1 text-gray-900 text-sm font-medium">
                                      {data.users.map((user) => 
                                        <li key={user.id}>{user.email}</li>
                                      )}
                                    </ul>
                                  </dd>
                                </div>
                              )}
                              {!data.isGroup && (
                                <div>
                                  <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                    Email
                                  </dt>
                                  <dd className="mt-1 text-sm text-gray-900 sm-col-span-2">
                                    {otherUser.email}
                                  </dd>
                                </div>
                              )}
                              {!data.isGroup && (
                                <>
                                  <hr />
                                  <div>
                                    <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                                      Joined
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm-col-span-2">
                                      <time dateTime={joinedDate}>
                                        {joinedDate}
                                      </time>
                                    </dd>
                                  </div>
                                </>
                              )}
                            </dl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ProfileDrawer;
