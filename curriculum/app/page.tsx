"use client";
import React, { useEffect, useContext } from "react";
import HomeButton from "@/components/HomeButton";
import SideBar from "@/components/SideBar";
import ProfilePhoto from "@/public/images/ProfileFoto.png";
import { Monoton } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LanguageContext } from "@/context/language";
import {motion} from 'framer-motion'
import ParticleContainer from "@/components/ParticleContainer";
import Link from "next/link";

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
});
 
export default function Home() {
  const language = useContext(LanguageContext);
  const router = useRouter();

  useEffect(() => {
    const getLanguage = localStorage.getItem("language");

    if (getLanguage === "EN") {
      language.dispatch({ type: "CHANGE_LANG" });
    }

    if (!getLanguage) {
      language.dispatch({ type: "RESET" });
    }
  }, [language]);

  return (
    <>
    <main className="sm:grid  sm:grid-cols-2 flex flex-col sm:h-full h-[95vh] w-full relative md:overflow-hidden ">
      
      <SideBar meta="Home" />
      <div className="flex flex-col sm:justify-center sm:pt-0 pt-14 items-center h-screen bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="sm:hidden w-full flex justify-end items-center mr-0 relative">

        <Image
            src={ProfilePhoto}
            alt="Felipe Calais"
            height={188}
            width={228}
            className="grayscale mb-2 z-50 absolute top-0 left-50 rounded-[100%]"
          />

        <div className="clippyMobile bg-cyan-700 dark:bg-white h-[220px] w-full ">
        
        </div>
        

        </div>
        <motion.div 
        initial={{y:'-250vw'}}
        animate={{y: -10}}
        transition={{delay:0.2, type:'spring', stiffness: 120 }}
        className="flex flex-col w-80 sm:w-96 lg:w-auto">
          <p className="text-4xl font-bold xl:text-4xl ">
            {language.state === "EN" ? "HI THERE!" : "Olá!"}
          </p>
          <p className="text-2xl xl:text-5xl font-bold mb-1 ">
            {language.state === "EN" ? `I'M` : "Eu sou o"}
            <span
              className={`${monoton.className} text-cyan-700  dark:text-blue-400 ml-2 `}
            >
              Felipe Calais
            </span>
          </p>
          <div className="bg-cyan-700 dark:bg-blue-900 text-white p-1 font-bold w-fit text-sm uppercase xl:text-lg mt-1 lg:mt-2">
            Web Developer / Front-end
          </div>

          <p className="text-sm mt-1 text-bold text-gray-600 dark:text-gray-300 lg:text-lg w-[22rem] sm:w-96">
            {language.state === "EN"
              ? "Welcome, below you will be able to know a little more about me and my work, knowing some of my main projects."
              : "Seja muito bem vindo, a seguir você poderá conhecer um pouco mais sobre mim e sobre meu trabalho conhecendo alguns dos meus principais projetos."}
          </p>
          <div className="flex flex-row gap-1">
          <Link href='https://drive.google.com/file/d/16JS_WsGrXdYHwksT965pNDqJKztp4p8H/view?usp=drive_link' target="_blank"><HomeButton type="button" text={language.state === "EN" ? "Resume" : "Resumo"} resume /></Link>
          <HomeButton
            type="button"
            text={language.state === "EN" ? "More about me" : "Mais sobre mim"}
            action={() => router.push("/aboutme")}
          />
          </div>
          
        </motion.div>
      </div>
      <div className="bg-white dark:bg-gray-700 h-screen relative hidden xl:block">
      <Image src={ProfilePhoto} height={400} width={400} className="z-50 grayscale absolute top-10 left-24 rounded-[100%]" alt='profile photo'/>
        <motion.div  animate={{rotateZ:360}} transition={{duration:1.5, ease:'easeInOut' }} className="bg-cyan-700 dark:bg-white clippy h-screen">
        
            
        </motion.div>

      </div>
      
      <div
        className={`bg-[url("../public/images/ProfileFoto.png")] bg-cover grayscale bg-[#c3c3c3] h-screen bg-center hidden sm:block xl:bg-top xl:hidden`}
  ></div>
  <ParticleContainer />
    </main>
    
    </>
    
  );
}
