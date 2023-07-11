"use client"
import React from "react";


type inputType = {
  label: string;
  type: string;
  id: string,
  placeholder?: string;
  action?: () => {};
  regis?: React.ComponentProps<'input'>
};

function InputForm({ label, type, id, placeholder, action, regis }: inputType) {



  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-sm " htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="w-full p-2 focus:outline-none border drop-shadow-sm"
        type={type}
        onChange={action}
        placeholder={placeholder}
        {...regis}
      />
    </div>
  );
}

export default InputForm;
