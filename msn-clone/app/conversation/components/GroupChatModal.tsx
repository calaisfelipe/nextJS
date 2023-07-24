"use client";
import { User } from "@prisma/client";
import React, { Fragment, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import ConversationId from "../[conversationId]/page";
import InputForm from "@/components/InputForm";
import SelectGroup from "./SelectGroup";

type groupModalType = {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
};

const GroupChatModal = ({ isOpen, onClose, users }: groupModalType) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/conversations", { ...data, isGroup: true })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("something went wrong"))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all ">
                  <div className="text-right">
                    <button onClick={() => onClose()}>
                      <AiOutlineClose
                        className="text-gray-500 hover:text-gray-900 hover:text-bold"
                        size={20}
                      />
                    </button>
                  </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-7 text-gray-900 flex gap-2 items-center"
                    >
                      Create a group chat
                    </Dialog.Title>
                    <p className=" leading-6 text-xs md:text-sm text-gray-500 ">
                      Create a chat with more than 2 people.
                    </p>
                  </div>

                    <div className="mt-10 flex flex-col gap-y-8">
                        <InputForm 
                        regis={register("name", {required: true})}
                        label='Name'
                        type="text"
                        id="name"
                        
                        errors={errors}

                        />

                        <SelectGroup 
                        disabled={isLoading}
                        label="Members"
                        options={users.map((user) => ({
                            value: user.id,
                            label: user.name
                        }))}

                        onChange={(value: any) => setValue('members', value, { shouldValidate: true}) }

                        value={members}
                        
                        />

                    </div>

                  <div className="mt-4 flex gap-2 justify-end">
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-3   00 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md border border-transparent bg-sky-200 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                      onClick={onClose}
                    >
                      Create Group
                    </button>
                  </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default GroupChatModal;
