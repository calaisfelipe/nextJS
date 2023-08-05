"use client";
import React, { useEffect, useContext } from "react";
import HomeButton from "@/components/HomeButton";
import SideBar from "@/components/SideBar";
import ProfilePhoto from "@/public/images/ProfileFoto.png";
import { Monoton } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LanguageContext } from '@/context/language'


const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const language = useContext(LanguageContext)
  const router = useRouter();
  

  useEffect(() => {

   const getLanguage =  localStorage.getItem('language')

    if(getLanguage === 'EN'){
     language.dispatch({type: 'CHANGE_LANG'})
     
    }

    if(!getLanguage){
      language.dispatch({type: 'RESET'})
     
    }

  }, [language])



  return (
    <main className="sm:grid  sm:grid-cols-2 flex flex-col h-full w-full relative">
      <SideBar meta="Home" />
      <div className="flex flex-col sm:justify-center sm:pt-0 pt-16 items-center h-screen bg-gray-100 dark:bg-gray-700 dark:text-white">
        <div className="sm:hidden w-full flex justify-end items-center mr-5">
          <Image
            src={ProfilePhoto}
            alt="Felipe Calais"
            height={188}
            width={188}
            className="grayscale bg-[#c3c3c3] mb-2 "
          />
        </div>
        <div className="flex flex-col w-80 sm:w-96 lg:w-auto">
          <p className="text-4xl font-bold xl:text-4xl ">{language.state === 'EN' ? 'HI THERE!' : 'Olá!'}</p>
          <p className="text-2xl xl:text-5xl font-bold mb-1 ">
            {language.state === 'EN' ? `I'M` : 'Eu sou o'}
            <span className={`${monoton.className} text-yellow-500 dark:text-blue-400 ml-2 `}>
              Felipe Calais 
            </span>
          </p>
          <div className="bg-yellow-500 dark:bg-blue-900 dark:text-white p-1 font-bold w-fit text-sm uppercase xl:text-lg mt-1 lg:mt-2">
            Web Developer / Front-end
          </div>

          <p className="text-sm mt-1 text-bold text-gray-600 dark:text-gray-300 lg:text-lg w-[22rem] sm:w-96">
          {language.state === 'EN' ? 'Welcome, below you will be able to know a little more about me and my work, knowing some of my main projects.' : 'Seja muito bem vindo, a seguir você poderá conhecer um pouco mais sobre mim e sobre meu trabalho conhecendo alguns dos meus principais projetos.'}
            
          </p>
          <HomeButton
            text={language.state === 'EN' ? "More about me":"Mais sobre mim"}
            action={() => router.push("/aboutme")}
          />
        </div>
      </div>
      <div
        className={`bg-[url("../public/images/ProfileFoto.png")] bg-cover grayscale bg-[#c3c3c3] h-screen bg-center hidden sm:block xl:bg-top`}
      ></div>
    </main>
  );
}
