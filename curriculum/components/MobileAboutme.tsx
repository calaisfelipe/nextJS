"use client";
import React, { useEffect } from "react";
import { useMotionValue, useTransform, animate, motion, motionValue } from "framer-motion";

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
  

  return (
    <div className="sm:hidden w-full flex flex-row gap-2 p-2 divide-x-[1px] divide-gray-400 divide-opacity-80 ">

      <div className="flex flex-col justify-center items-center p-2 ">
        <div className="flex flex-row">
          <motion.div className="text-2xl text-yellow-500 dark:text-blue-400">
            {actions.rounded2}
          </motion.div>
          <span className="text-2xl text-yellow-500 dark:text-blue-400 ">
            +
          </span>
        </div>
        <p className="uppercase text-gray-900 dark:text-white text-[6px] w-10 font-semibold">
          {language.state === "EN"
            ? `Technologies I master`
            : "Tecnologias que domino"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-2 ">
        <div className="flex flex-row">
          <motion.div className="text-2xl text-yellow-500 dark:text-blue-400">
            {actions.rounded}
          </motion.div>
          <span className="text-2xl text-yellow-500 dark:text-blue-400 ">
            +
          </span>
        </div>
        <p className="uppercase text-gray-900 dark:text-white text-[6px] w-10 font-semibold">
        {language.state === "EN"
                  ? `Completed Projects`
                  : "Projetos realizados"}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-2 ">
        <div className="flex flex-row">
          <motion.div className="text-2xl text-yellow-500 dark:text-blue-400">
            {actions.rounded3}
          </motion.div>
          <span className="text-2xl text-yellow-500 dark:text-blue-400 ">
            +
          </span>
        </div>
        <p className="uppercase text-gray-900 dark:text-white text-[6px] w-10 font-semibold">
        {language.state === "EN"
                  ? `Years of experience`
                  : "Anos de experiencia"}
        </p>
      </div>
    </div>
  );
};

export default MobileAboutme;
