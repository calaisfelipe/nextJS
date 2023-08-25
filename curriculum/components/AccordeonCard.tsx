"use client";
import React from "react";
import Image from "next/image";
import commingsoon from "@/public/images/commingSoon.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectCardtype = {
  language: string
  project: {
    title: string;
    thumbnailUrl?: any;
    isInBuild?: boolean;
    tecnologies?: any[];
    description?: string;
    link: string;
  }[];
};

const AccordeonCard = ({ project, language }:ProjectCardtype) => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center">
      {project.map((item) =>  (
      <div key={item.title} className="relative">
      <Image className={`
      cursor-pointer
        shadow-xl
        rounded-md
      
      ${item.isInBuild ? "opacity-50 hover:opacity-100" : ""}
      `}
          width={320}
          height={40}
          src={item.isInBuild ? commingsoon : item.thumbnailUrl}
          alt={`${item.title} thumbnail`}


        />

        <motion.div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-90 absolute top-0 rounded-md flex flex-col justify-center items-center" initial={{opacity:0}} whileHover={{opacity:1, transition:{delay:0.2,duration:0.5} } }>
        <div className="flex flex-row items-center gap-3">
            

            <p className={`text-white opacity-80 font-semibold hover:opacity-100 hover:scale-125 transition ${item.isInBuild && 'pointer-events-none'}`}><Link href={item.link} target="_blank" >{item.title}</Link></p>
          </div>

          {item.isInBuild ? (
            <p className="text-red-400 font-semibold mt-4 uppercase">{language === 'EN' ? 'Coming soon': 'Em breve'}</p>
          ) : (
            <p className="text-green-400 font-semibold mt-4">
              {language === 'EN' ? 'New' : 'Novo'} <span className="text-white"> 2023</span>
            </p>
          )}

          <div className="flex flex-row gap-2 items-center mt-1">
            {item.description}
          </div>

          <div className="flex flex-row gap-2 items-center mt-1">
            {item.tecnologies?.map((tecno, index) => (
              <Image
                key={index}
                src={tecno}
                height={18}
                width={18}
                className="hover:scale-125 cursor-pointer"
                alt={tecno.title}
              />
            ))}
          </div>
        </motion.div>


        </div>
        )
      
      
      




      )}

      <motion.div >
      

      </motion.div>
    </div>
  );
};

export default AccordeonCard;
