"use client";
import useConversation from "@/app/hooks/useConversation";
import React from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { HiPhoto, HiPaperAirplane } from "react-icons/hi2";
import MessageInput from "./MessageInput";

const FormConversation = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("/api/messages", { ...data, conversationId });
  };

  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full ">
      <HiPhoto
        size={30}
        className="text-sky-500 hover:scale-110 cursor-pointer"
      />
      <form
        className="flex items-center gap-2 lg:gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="write a message"
          type="text"
        />
        <button
          type="submit"
          className="text-bold p-2 rounded-full bg-sky-500 cursor-pointer hover:bg-sky-600 transition text-white"
        >
          <HiPaperAirplane size={18} />
        </button>
      </form>
    </div>
  );
};

export default FormConversation;
