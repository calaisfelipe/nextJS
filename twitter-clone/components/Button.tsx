'use client'
import React from "react";

type ButtonType = {
  label?: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  disabled?: boolean;
  onClick: () => void;
  outline?: boolean;
 
};

const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  onClick,
  outline,
 
}: ButtonType) => {
  return (
    <>
      <button
        className={`${
          fullWidth ? "w-full" : "w-fit"
        } disabled:opacity-20 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 border-2 
    ${secondary ? "bg-white" : "bg-sky-500"}
    ${secondary ? " text-black" : "text-white"}
    ${secondary ? " border-black" : "border-sky-500"}
    ${large ? "text-xl" : "text-md"}
    ${large ? "px-5" : "px-4"}
    ${large ? "py-3" : "py-2"}
    ${outline && "bg-transparent border-white text-white"}
    
    `}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
