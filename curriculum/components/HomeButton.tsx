import React from "react";

type HomeButtonType = {
  text: string;
  action?: () => void;
  type: 'button' | 'submit'
  secondary?: boolean
};

const HomeButton = ({ text, action, type, secondary }: HomeButtonType) => {
  return (
    <>
      <button
        className={`relative inline-block  bg-white font-medium text-[17px] m-[10px] z-10 rounded-[8px]  duration-500 overflow-hidden w-[180px] dark:text-blue-400
    
    before:absolute  before:h-[250px] before:w-[400px] before:rounded-[20%] before:-z-10 before:content-[''] before:top-[100%] before:left-[100%] before:duration-700 dark:before:bg-blue-400
    
    hover:text-white dark:hover:text-white

    hover:before:top-[-30px] 
    hover:before:left-[-30px] 

    active:before:bg-purple-900 
    active:before:duration-0 
    border-2  dark:border-blue-400 
    
    ${secondary ? 'text-black before:bg-black border-white px-[18px] py-[12px]' : 'text-yellow-500 before:bg-yellow-500 border-yellow-500 px-[24px] py-[16px]'}
    `}
        onClick={action}
        type={type}
      >
        {text}
      </button>
    </>
  );
};

export default HomeButton;
