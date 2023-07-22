"use client";
import React, { useState, Fragment } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Dialog, Transition } from "@headlessui/react";
import InputForm from "./InputForm";
import Image from "next/image";
import placeholderImg from "@/public/images/placeholder-user.png";
import { CldUploadButton } from "next-cloudinary";
import { AiOutlineClose } from "react-icons/ai";

type SettingsModalType = {
  isOpen?: boolean;
  currentUser: User;
  onClose: () => void;
};

const SettingsModal = ({ isOpen, currentUser, onClose }: SettingsModalType) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setIsLoading(true);

    axios
      .post("/api/settings", data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Something went wrong"))
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
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
                        className="text-lg font-semibold leading-7 text-gray-900 flex gap-2 items-center"
                      >
                        Profile
                      </Dialog.Title>
                      <p className=" leading-6 text-sm text-gray-600 ">
                        Edit your public Information
                      </p>
                    </div>

                    <div className="mt-10 flex flex-col gap-y-8">
                      <InputForm
                        label="Name"
                        type="text"
                        regis={register("name")}
                        id="name"
                        errors={errors}
                      />

                      <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">
                          Photo
                        </label>
                        <div className="mt-2 flex items-center gap-x-3">
                          <Image
                            src={image || currentUser?.image || placeholderImg}
                            width={48}
                            height={48}
                            className="rounded-full"
                            alt="Avatar"
                          />
                          <CldUploadButton
                            options={{ maxFiles: 1 }}
                            onUpload={handleUpload}
                            uploadPreset="oej215pi"
                          >
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400

                                focus:outline-none 
                              focus-visible:ring-2 focus-visible:ring-sky-500
                         
                              focus-visible:ring-offset-2"
                              disabled={isLoading}
                            >
                              Upload
                            </button>
                          </CldUploadButton>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-sky-200 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        onClick={onClose}
                      >
                        done
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
export default SettingsModal;
