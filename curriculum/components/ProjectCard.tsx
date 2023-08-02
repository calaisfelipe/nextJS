import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/image";
import commingsoon from '@/public/images/commingSoon.jpg'

type ProjectCardtype = {
  project: {
    title: string;
    thumbnailUrl?: any;
    isInBuild?: boolean
    tecnologies?: any[]
  };
};

const ProjectCard = ({ project }: ProjectCardtype) => {
  return (
    <div className="group bg-white col-span relative h-[12vw] ">
      <Image
        className="
      cursor-pointer
      object-cover
      transition
      duration 
      shadow-xl
      rounded-md
      group-hover:opacity-90
      sm:group-hover:opacity-0
      delay-300
      w-fit
      h-fit
      "
        width={188}
        height={288}
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
        width={288}
        height={188}
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

            {project.isInBuild ? '' : <div
              className="cursor-pointer
            w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
             <BsFillPlayFill />
            </div> }
            

            <p className="text-white font-semibold">{project.title}</p>
          </div>

          {project.isInBuild ? <p className="text-red-400 font-semibold mt-4">
            Em breve
          </p> : <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white"> 2023</span>
          </p>}
          

         
          <div className="flex flex-row gap-2 items-center mt-1">
            {project.tecnologies?.map((tecno, index) => <Image key={index} src={tecno} height={18} width={18} className="hover:scale-125 cursor-pointer" alt='tecnologie' />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
