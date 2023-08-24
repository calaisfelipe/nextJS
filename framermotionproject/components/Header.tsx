"use client";
import { Quicksand } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] });

const svgVariants = {
  hidden:{rotate: -180},
  visible:{rotate:0, transition:{duration: 0.8}},

}

const pathVariants = {
  hidden:{opacity:0, pathLength:0 },
  visible:{opacity: 1,  pathLength:1, transition:{duration: 2, ease: "easeInOut" } }
}

const Header = () => {
    const router = useRouter()

  return (
    <>
    <header className="w-full flex p-[40px] items-center">
      <div 
      >
        <Link href='/'><motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          
          className=" w-[80px] overflow-visible stroke-white stroke-[4]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path variants={pathVariants}
          initial='hidden' animate='visible'
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path variants={pathVariants}
          initial='hidden' animate='visible' 
          fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </motion.svg></Link>
      </div>
      <motion.div initial={{y:-250}} animate={{ y: -10 }} transition={{delay:0.2, duration:0.5, type:'', stiffness:120}} className="grow ml-[20px] text-[0.6em]">
        <motion.h1 drag dragConstraints={{left: 0, top:0, right:0 , bottom: 0}}
        dragElastic={0.5}
          className={`${quicksand.className} text-white text-xl pb-[10px] border-b-[1px] border-gray-400`}
        >Pizza Joint
          
        </motion.h1 >
      </motion.div>
    </header>
    </>
  );
};

export default Header;
