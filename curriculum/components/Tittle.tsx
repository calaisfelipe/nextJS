import React from "react";
import { Montserrat } from "next/font/google";
import {motion} from 'framer-motion'

const monstserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
});

const VariablesTitle = {
  hidden: {opacity:0, y:100},
  visible:{opacity:1, y:0, transition:{delay: .5}}
}



const Tittle = ({ text }: { text: string }) => {
  return (
    <motion.div className="w-full text-center relative h-20 dark:text-white md:mt-0 mt-2" variants={VariablesTitle} initial="hidden" animate="visible">
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
    </motion.div>
  );
};

export default Tittle;
