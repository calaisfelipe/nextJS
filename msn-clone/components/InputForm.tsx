"use client";
import React from "react";
import { FieldErrors } from "react-hook-form";

type inputType = {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
  action?: () => {};
  regis?: React.ComponentProps<"input">;
  errors: FieldErrors;
};

function InputForm({
  label,
  type,
  id,
  placeholder,
  action,
  regis,
  errors,
}: inputType) {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="font-bold text-sm " htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`w-full p-2 border focus:outline-none focus:border-sky-500 focus:ring-2 focus:rounded-md  drop-shadow-sm placeholder:text-gray-400 ${
          errors[id] && "border border-rose-500 rounded-md "
        }`}
        type={type}
        onChange={action}
        placeholder={placeholder}
        {...regis}
      />
      <p className="text-xs text-red-600">{errors[id]?.message as string}</p>
    </div>
  );
}

export default InputForm;
