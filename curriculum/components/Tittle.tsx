import React from "react";
import { Montserrat } from "next/font/google";

const monstserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

const Tittle = ({ text }: { text: string }) => {
  return (
    <div className="w-full text-center relative h-20 dark:text-white md:mt-0 mt-2">
      <div
        className={` ${monstserrat.className} font-extrabold lg:text-5xl sm:text-3xl text-[26px] leading-[2rem] absolute top-0 left-[50%] translate-x-[-50%] `}
      >
        {text}
      </div>
      <div
        className={` ${monstserrat.className} w-full md:text-7xl font-extrabold opacity-10 absolute  sm:top-2 top-1 left-[50%] translate-x-[-50%] text-5xl `}
      >
        {text}
      </div>
      <div className="w-full h-16 sm:hidden"></div>
    </div>
  );
};

export default Tittle;
