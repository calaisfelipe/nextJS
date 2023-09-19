"use client";
import React, { useEffect } from "react";
import { useMotionValue, useTransform, animate, motion, motionValue } from "framer-motion";
import Image from "next/image";
import css from "@/public/images/css-3.png";
import js from "@/public/images/js.png";
import ts from "@/public/images/typescript.png";
import html5 from "@/public/images/html-5.png";
import reactLogo from "@/public/images/science.png";
import tailwind from "@/public/images/Tailwind.png";
import nextlogo from "@/public/images/nextjs.png";
import git from "@/public/images/git_orange.png";

type MobileAboutmeType ={
    language: {
        state: string;
        dispatch: React.Dispatch<any>;
    },
    actions:{
        rounded: any,
        rounded2:any,
        rounded3:any
    }
}

const MobileAboutme = ({language, actions}: MobileAboutmeType) => {
  
  const tecnologies = [css, js, ts, html5, reactLogo, tailwind, nextlogo, git];

  return (
    <>
    <div className="w-full flex flex-row gap-2 p-2 divide-x-[1px] divide-gray-400 divide-opacity-80 ">

      
      <div className="flex flex-col justify-center items-center p-2 lg:p-4 w-[20%] md:w-auto">
        <div className="flex flex-row">
          <motion.div className="text-2xl text-cyan-700 dark:text-blue-400 lg:text-6xl">
            {actions.rounded}
          </motion.div>
          <span className="text-2xl text-cyan-700 dark:text-blue-400 lg:text-6xl ">
            +
          </span>
        </div>
        <p className="uppercase text-gray-900 dark:text-white text-[6px] w-10 font-semibold lg:text-[12px] lg:w-20">
        {language.state === "EN"
                  ? `Completed Projects`
                  : "Projetos realizados"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-2 lg:p-4 w-[20%] md:w-auto ">
        <div className="flex flex-row">
          <motion.div className="text-2xl text-cyan-700 dark:text-blue-400 lg:text-6xl">
            {actions.rounded3}
          </motion.div>
          <span className="text-2xl text-cyan-700 dark:text-blue-400 lg:text-6xl ">
            +
          </span>
        </div>
        <p className="uppercase text-gray-900 dark:text-white text-[6px] w-10 font-semibold lg:text-[12px] lg:w-20 ">
        {language.state === "EN"
                  ? `Years of experience`
                  : "Anos de experiencia"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-2 lg:p-4 w-[20%] md:w-auto">
        <div className="flex flex-row">
          <motion.div className="text-2xl lg:text-6xl text-cyan-700 dark:text-blue-400">
            {actions.rounded2}
          </motion.div>
          <span className="text-2xl lg:text-6xl text-cyan-700 dark:text-blue-400 ">
            +
          </span>
        </div>
        <p className="uppercase text-gray-900 dark:text-white text-[6px] lg:text-[12px] lg:w-20 w-10 font-semibold">
          {language.state === "EN"
            ? `Technologies I master`
            : "Tecnologias que domino"}
        </p>
      </div>
      <div className="flex flex-wrap md:hidden p-2 w-[40%] ">
      {tecnologies.map((tec, index) => (
                <Image
                  
                  src={tec}
                  height={8}
                  width={24}
                  alt="tecnologies logo"
                  key={index}
                  className="cursor-pointer transition hover:scale-125 m-1 grayscale hover:grayscale-0 "
                />
              ))}

      </div>
    </div>

    </>
    
  );
};

export default MobileAboutme;
