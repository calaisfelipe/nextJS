import React from "react";

type inputProps = {
  type: string;
  label: string;
  action?: any;
  idName: string;
  value?: string;
};

function Input({ type, label, action, idName, value }: inputProps) {
  return (
    <div className="relative">
      <input
        className="
    block
    text-white
    bg-neutral-700 
    px-6
    pt-6
    pb-1
    w-full 
    rounded-md
    text-md
    appearance-none
    focus:outline-none
    focus: ring-0
    peer
    
    "
        id={idName}
        type={type}
        placeholder={""}
        onChange={action}
        value={value}
      />
      <label
        htmlFor={idName}
        className="
      absolute
      text-md
      text-zinc-400
      duration-150
      transform
      -translate-y-3
      scale-75
      top-4
      z-10
      origin-[0]
      left-6
      
      "
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
