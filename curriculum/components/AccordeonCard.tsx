"use client";
import React from "react";
import Image from "next/image";
import commingsoon from "@/public/images/comingsoonredimensionada.png";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectCardtype = {
  language: string;
  project: {
    title: string;
    thumbnailUrl?: any;
    isInBuild?: boolean;
    tecnologies?: any[];
    description?: string;
    link: string;
    title2: string;
    thumbnailUrl2?: any;
    isInBuild2?: boolean;
    tecnologies2?: any[];
    description2?: string;
    link2: string;
  };
};

const AccordeonCard = ({ project, language }: ProjectCardtype) => {
  return (
    <div className="flex flex-col gap-2">
      <Image
        className={`
        cursor-pointer
        shadow-xl
        rounded-md
      
      ${project.isInBuild ? "opacity-50 hover:opacity-100" : ""}
      `}
        width={320}
        height={40}
        src={project.isInBuild ? commingsoon : project.thumbnailUrl}
        alt={`${project.title} thumbnail`}
      />
      <Image
        className={`
        cursor-pointer
        shadow-xl
        rounded-md
      
      ${project.isInBuild ? "opacity-50 hover:opacity-100" : ""}
      `}
        width={320}
        height={40}
        src={project.isInBuild ? commingsoon : project.thumbnailUrl2}
        alt={`${project.title2} thumbnail`}
      />
    </div>
  );
};

export default AccordeonCard;
