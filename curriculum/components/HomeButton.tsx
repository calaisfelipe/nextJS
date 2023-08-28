import React from "react";

type HomeButtonType = {
  text?: string;
  action?: () => void;
  type: "button" | "submit";
  secondary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
};

const HomeButton = ({
  text,
  action,
  type,
  secondary,
  disabled,
  children,
}: HomeButtonType) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`relative inline-block  bg-white font-medium text-[17px] m-[10px] z-10 rounded-[8px]  duration-500 overflow-hidden w-[180px] dark:text-blue-400
    
    before:absolute  before:h-[250px] before:w-[400px] before:rounded-[20%] before:-z-10 before:content-[''] before:top-[100%] before:left-[100%] before:duration-700 dark:before:bg-blue-400
    
    hover:text-white dark:hover:text-white

    hover:before:top-[-30px] 
    hover:before:left-[-30px] 

   
    border-2  dark:border-blue-400 
    
    ${
      secondary
        ? "text-black before:bg-black  border-white px-[18px] py-[12px] "
        : "text-yellow-500 before:bg-yellow-500 border-yellow-500 px-[24px] py-[16px]"
    }

    disabled:bg-slate-500 disabled:bg-opacity-30 disabled:pointer-events-none

    flex justify-center items-center gap-2

    `}
        onClick={action}
        type={type}
      >
        {text}
        {children}
      </button>
    </>
  );
};

export default HomeButton;
