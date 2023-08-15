import React from "react";
import { Montserrat } from "next/font/google";

const monstserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

const Tittle = ({ text }: { text: string }) => {
  return (
    <div className="w-full text-center relative h-20 dark:text-white">
      <div
        className={` ${monstserrat.className} font-extrabold text-4xl absolute top-0 left-[50%] translate-x-[-50%] `}
      >
        {text}
      </div>
      <div
        className={` ${monstserrat.className} w-full text-7xl font-extrabold opacity-10 absolute top-2 left-[50%] translate-x-[-50%] `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tittle;
