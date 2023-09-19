"use client";
import React from "react";
import Image from "next/image";
import commingsoon from "@/public/images/commingSoon.jpg";
import { animate, delay, motion } from "framer-motion";
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
  }[];
};

const AccordeonCard = ({ project, language }: ProjectCardtype) => {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center ">
      {project.map((item) => (
        <div
          key={item.title}
          className="relative rounded-lg overflow-hidden flex items-center justify-center group"
        >
          <Image
            width={320}
            height={40}
            src={item.thumbnailUrl}
            alt={`${item.title} thumbnail`}
          />

          <div
            className="w-full h-full
           bg-gray-900 opacity-0 group-hover:opacity-80 transition-all duration-700
            
            absolute inset-0  flex flex-col justify-center items-center"
          >
            <div
              className="absolute bottom-0 translate-y-full group-hover:-translate-y-10
             transition-all duration-500 flex flex-col items-center justify-center"
            >
              <div className="flex flex-row items-center gap-3 justify-center">
                <p
                  className={`text-white font-extrabold hover:text-cyan-700 hover:dark:text-blue-400  hover:scale-150 transition `}
                >
                  <Link href={item.link} target="_blank">
                    {item.title}
                  </Link>
                </p>
              </div>

              <p className="text-green-400 font-semibold mt-4">
                {language === "EN" ? "New" : "Novo"}{" "}
                <span className="text-white"> 2023</span>
              </p>

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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordeonCard;
