'use client'
import React from "react";
import Image from "next/image";
import commingsoon from "@/public/images/commingSoon.jpg";
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

const ProjectCard = ({ project , language }:ProjectCardtype) => {

  

  return (
    <div className="group bg-transparent col-span relative  sm:h-[12vw] h-full ">
      <Image
        className={
      `cursor-pointer
      object-cover
      transition
      duration 
      shadow-xl
      rounded-md
      group-hover:opacity-90
      sm:group-hover:opacity-0
      delay-300
      w-full
      h-full
      lg:w-fit
      lg:h-fit
      ${project.isInBuild ? 'opacity-50 hover:opacity-100' : '' }
      `
      }
        width={150}
        height={150}
       
        src={project.isInBuild ? commingsoon : project.thumbnailUrl}
        alt={`${project.title} thumbnail`}
      />
      <div
        className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110
      group-hover:-translate-y-[6vw]
      group-hover:translate-x-[2vw]
      group-hover:opacity-100  
      "
      >
        <Image
          className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-t-md
        w-fit
        h-fit
        "
        width={150}
        height={150}
          
          src={project.isInBuild ? commingsoon : project.thumbnailUrl}
          alt={`${project.title} thumbnail`}
        />
        <div
          className="
        z-10
        bg-gray-900
        p-2
        lg:p-4
        absolute
        w-full
        transition
        shadow-md
        rounded-b-md

        "
        >
          <div className="flex flex-row items-center gap-3">
            

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
      </div>
    </div>
  );
};

export default ProjectCard;
