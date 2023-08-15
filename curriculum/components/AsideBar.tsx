'use client'
import React from "react";
import Image from "next/image";
import ProfilePhoto from "@/public/images/ProfileFoto.png";
import Link from "next/link";
import {TbPointFilled} from 'react-icons/tb'
import useContextLanguage from "@/hooks/useContextLanguage";

const AsideBar = ({meta}:{meta:string}) => {

  const language = useContextLanguage()

  return (
    <div className="flex-col w-44 bg-yellow-500 dark:bg-blue-900  hidden sm:flex">
      <div>
        <Image
          src={ProfilePhoto}
          height={118}
          width={176}
          alt="Foto perfil"
          className="grayscale bg-[#c3c3c3]"
        />
        <div className="w-full text-center mt-1 font-bold text-xl dark:text-white ">Felipe Calais</div>
        <p className="tracking-tighter text-xs w-full text-center font-semibold opacity-40 dark:text-white text-gray-600">Web Developer / Front-End</p>
      </div>
      <div className="lg:h-full lg:mt-0 sm:mt-6 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
            <TbPointFilled size={15} />
            |
            <Link href='/' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Home' && 'text-white dark:text-blue-400'}`}>HOME</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/aboutme' className={`font-bold leading-none hover:text-white py-1 ${meta === 'About me' && 'text-white '}`}>{language.state === 'EN' ? 'ABOUT ME' : 'SOBRE MIM' }</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/formation' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Formation' && 'text-white'}`}>{language.state === 'EN' ? 'FORMATION' : 'FORMAÇÃO' }</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/portfolio' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Portfolio' && 'text-white '}`}>{language.state === 'EN' ? 'PORTFOLIO' : 'PORTFÓLIO' }</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/contact' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Contact' && 'text-white '}`}>{language.state === 'EN' ? 'CONTACT' : 'CONTATO' }</Link>
            |
            <TbPointFilled size={15} />
        </div>
      </div>
    </div>
  );
};

export default AsideBar;
