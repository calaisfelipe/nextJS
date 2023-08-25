'use client'
import React from "react";
import Image from "next/image";
import commingsoon from "@/public/images/comingsoonredimensionada.png";
import {motion} from 'framer-motion'
import Link from "next/link";



type ProjectCardtype = {
  language:string
  project: {
    title: string;
    thumbnailUrl?: any;
    isInBuild?: boolean;
    tecnologies?: any[];
    description?: string;
    link:string
  };
};

const AccordeonCard = ({ project , language }:ProjectCardtype) => {

  
  return (
    <div className="group  dark:bg-transparent col-span relative
    w-full h-[140px]">
      <Image
        className={
      `cursor-pointer
      bg-cover
      transition
      duration 
      shadow-xl
      rounded-md
      group-hover:opacity-90
      sm:group-hover:opacity-0
      delay-300
      
      
    
      
      ${project.isInBuild ? 'opacity-50 hover:opacity-100' : '' }
      `
      }
        width={320}
        height={40}
        
       
        src={project.isInBuild ? commingsoon : project.thumbnailUrl}
        alt={`${project.title} thumbnail`}
      />

      <motion.div className="absolute top-0 bg-gray-900 bg-opacity-80 w-full h-full rounded-md"
      initial={{opacity:0}}
      whileHover={{opacity:1, transition:{delay:0.2, duration:0.5}}}
      >
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center gap-3 mt-5">
            

            <p className={`text-white opacity-80 font-semibold hover:opacity-100 hover:scale-110 ${project.isInBuild && 'pointer-events-none'}`}><Link href={project.link} target="_blank" >{project.title}</Link></p>
          </div>

          {project.isInBuild ? (
            <p className="text-red-400 font-semibold mt-4 uppercase">{language === 'EN' ? 'Coming soon': 'Em breve'}</p>
          ) : (
            <p className="text-green-400 font-semibold mt-4">
              {language === 'EN' ? 'New' : 'Novo'} <span className="text-white"> 2023</span>
            </p>
          )}

          <div className="flex flex-row gap-2 items-center mt-1">
            {project.description}
          </div>

          <div className="flex flex-row gap-2 items-center mt-1">
            {project.tecnologies?.map((tecno, index) => (
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


        </div>
      </motion.div>
      
    </div>
  );
};

export default AccordeonCard;
