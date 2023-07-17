"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type MessageInputType = {
  register: UseFormRegister<FieldValues>;
  id: string;
  errors: FieldErrors;
  required?: boolean;
  placeholder: string;
  type?: string;
};

const MessageInput = ({
  id,
  register,
  errors,
  required,
  placeholder,
  type,
}: MessageInputType) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        {...register(id, { required })}
        required={required}
        placeholder={placeholder}
        type={type}
        className="text-black font-light py-2 px-4 bg-neutral-200 w-full rounded-full focus:outline-none"
      />
    </div>
  );
};

export default MessageInput;
