import React from "react";

type HomeButtonType = {
  text: string;
  action?: () => void;
};

const HomeButton = ({ text, action }: HomeButtonType) => {
  return (
    <>
      <button
        /*className="
    bg-yellow-500 
    dark:bg-blue-900 
    text-white 
    rounded-full 
    p-2 w-40 lg:text-xl lg:w-48  mt-3 hover:opacity-80 "*/

    className="relative inline-block text-yellow-500 bg-white font-medium text-[17px] m-[10px] z-10 rounded-[8px] px-[24px] py-[16px] duration-500 overflow-hidden w-[180px] dark:text-blue-400
    
    before:absolute before:bg-yellow-500 before:h-[250px] before:w-[400px] before:rounded-[20%] before:-z-10 before:content-[''] before:top-[100%] before:left-[100%] before:duration-700 dark:before:bg-blue-400
    
    hover:text-white dark:hover:text-white

    hover:before:top-[-30px] 
    hover:before:left-[-30px] 

    active:before:bg-purple-900 
    active:before:duration-0 
    border-2 border-yellow-500 dark:border-blue-400"

    
        onClick={action}
      >
        {text}
      </button>
    </>
  );
};

export default HomeButton;
