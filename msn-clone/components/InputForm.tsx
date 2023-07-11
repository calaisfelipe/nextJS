import React from "react";

type inputType = {
  label: string;
  type: string;
  placeholder?: string;
  action?: () => {};
  regis?: React.ComponentProps<'input'>
};

function InputForm({ label, type, placeholder, action, regis }: inputType) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-sm " htmlFor={label}>
        {label}
      </label>
      <input
        name={label}
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
