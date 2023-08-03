import React from "react";
import Image from "next/image";
import ProfilePhoto from "@/public/images/ProfileFoto.png";
import Link from "next/link";
import {TbPointFilled} from 'react-icons/tb'

const AsideBar = ({meta}:{meta:string}) => {
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
      </div>
      <div className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
            <TbPointFilled size={15} />
            |
            <Link href='/' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Home' && 'text-white dark:text-blue-400'}`}>HOME</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/aboutme' className={`font-bold leading-none hover:text-white py-1 ${meta === 'About me' && 'text-white '}`}>SOBRE MIM</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/formation' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Formation' && 'text-white'}`}>FORMAÇÃO</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/portfolio' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Portfolio' && 'text-white '}`}>PORTFOLIO</Link>
        </div>
        <div className="flex flex-col items-center justify-center">
            |
            <Link href='/contact' className={`font-bold leading-none hover:text-white py-1 ${meta === 'Contact' && 'text-white '}`}>CONTATO</Link>
            |
            <TbPointFilled size={15} />
        </div>
      </div>
    </div>
  );
};

export default AsideBar;
