import React from "react";
import {BsDownload} from 'react-icons/bs'

type HomeButtonType = {
  text?: string;
  action?: () => void;
  type: "button" | "submit";
  secondary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  resume?: boolean;
};

const HomeButton = ({
  text,
  action,
  type,
  secondary,
  disabled,
  children,
  resume,
}: HomeButtonType) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`relative inline-block  bg-white font-medium text-[17px] mt-2 z-10 rounded-[8px]  duration-500 overflow-hidden w-[180px] 
    
    before:absolute  before:h-[250px] before:w-[400px] before:rounded-[20%] before:-z-10 before:content-[''] before:top-[100%] before:left-[100%] before:duration-700 
    
    hover:text-white 

    hover:before:top-[-30px] 
    hover:before:left-[-30px] 

   
    border-2  
    
    ${resume && "text-gray-400 before:bg-gray-600 border-gray-400 md:px-[24px] md:py-[16px] px-[12px] py-[10px] before:bg-opacity-90 "}

    ${secondary && "text-black before:bg-black  border-white px-[18px] py-[12px] dark:border-blue-400 dark:text-blue-400 dark:before:bg-blue-400 dark:hover:text-white"}

    ${!secondary && !resume && "text-cyan-700 before:bg-cyan-700 border-cyan-700 md:px-[24px] md:py-[16px] px-[12px] py-[10px] dark:border-blue-400 dark:text-blue-400 dark:before:bg-blue-400 dark:hover:text-white"}

    disabled:bg-slate-500 disabled:bg-opacity-30 disabled:pointer-events-none

    flex justify-center items-center gap-2

    `}
        onClick={action}
        type={type}
      >
        {text}{resume && <BsDownload size={18} className='font-bold' /> }
        {children}
      </button>
    </>
  );
};

export default HomeButton;
