"use client";
import { Quicksand } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import useModal from "@/hook/useModal";
import Link from "next/link";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400"] });

const Header = () => {

  const modal = useModal()

  return (
    <>
    <Modal title='Info' message='Welcome to Pizza Joint' />
    <header className="w-full flex p-[40px] items-center">
      <motion.div 
      whileHover={{rotateZ:360}} 
      transition={{type:'tween', duration:1}}
      >
        <Link href='/'><svg
          className=" w-[80px] overflow-visible stroke-white stroke-[4]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg></Link>
      </motion.div>
      <motion.div initial={{y:-250}} animate={{ y: -10 }} transition={{delay:0.2, duration:0.5, type:'', stiffness:120}} className="grow ml-[20px] text-[0.6em]">
        <h1
          className={`${quicksand.className} text-white text-xl pb-[10px] border-b-[1px] border-gray-400`}
        ><button onClick={() => modal.onShow()}>Pizza Joint</button>
          
        </h1>
      </motion.div>
    </header>
    </>
  );
};

export default Header;
