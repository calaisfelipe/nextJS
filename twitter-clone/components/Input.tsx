import React from "react";

type InputProps = {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  value?: string;
  onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  type,
  disabled,
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      <input
        className="w-full p-4 text-lg border bg-black border-neutral-800 rounded-md transition text-white focus:border-sky-500 focus:border-3
        disabled:bg-neutral-500 disabled:opacity-70 disabled:cursor-not-allowed 
        "
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
