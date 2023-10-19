import React from "react";
import { licensesType } from "@/data/certified";
import { format } from "date-fns";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import {motion} from 'framer-motion'


const CertifiedCard = ({ data, language }: { data: licensesType, language:string }) => {
    const contentAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, origin: 0, transition: { duration: 1 } },
      };

  const date = new Date(data.date);
  const emitted = format(date, "'Verification issued on' d MMMM");

  return (
    <motion.div className="py-4 rounded-md justify-center md:max-w-[250px] bg-[#111827] dark:bg-opacity-80 shadow-xl gap-1 " variants={contentAnimation}
    initial="hidden"
    animate="visible">
        <div className="flex gap-2 px-2 pb-2 ml-2 md:ml-0  items-center">
        {<data.icon size={40} color="#fff" />}
        <h2 className="font-semibold text-sm text-blue-400 uppercase tracking-wider">{data.name}</h2>
        </div>
        
        <div className="w-auto">
        <Image
        width={250}
        height={150}
        className=" w-full"
        src={data.image}
        alt={`${data.name} Certification`}
      />
        </div>
      

      <div className="p-2 flex flex-col gap-1">
          
          <div className="w-full"> 
              <p className="text-md md:text-xs text-slate-400 font-light">{emitted}</p>
              <p className="text-md md:text-xs text-slate-400 font-light">{language === 'EN' ? 'Credential Code' : 'Código da credencial' }: {data.code}</p>
          </div>
          <Link
            href={data.link}
            target="_blank"
            className=" mt-4 text-white rounded-full w-fit flex justify-center items-center px-2 py-2 border-white border-2 self-center hover:text-blue-400 hover:border-blue-400 hover:scale-105 transition-all"
          >
           {language === 'EN' ? 'Show Credential' : 'Exibir Credencial' }  {<FiExternalLink className="ml-2" size={20} />}
          </Link>
      </div>
    </motion.div>
  );
};

export default CertifiedCard;
