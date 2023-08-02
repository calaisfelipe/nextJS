import React from "react";
import Tittle from "@/components/Tittle";
import {CiDesktop} from 'react-icons/ci'
import {BsTelephone, BsInstagram, BsGithub, BsTwitter, BsWhatsapp} from 'react-icons/bs'
import Link from "next/link";


const ContactPage = () => {
  return (
    <div className="sm:h-screen flex justify-center  bg-gray-200 w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full">
        <Tittle text="Contato" />
        <div className="flex flex-col w-full mt-3">
          <div className="text-lg">Sinta-se <span className="font-bold">livre</span> para entrar em contato</div>
          <p className="text-sm text-gray-500">Espero que possamos trabalhar juntos no seu próximo projeto.</p>
        </div>

          <div className="flex md:flex-row flex-col gap-16 mt-8 w-full justify-center">
            <div className="flex flex-row justify-center items-center ">
              <div>
                <CiDesktop size={128} />
              </div>
              <div>
                <p>felipe_calais@hotmail.com</p>
                <div className="flex flex-row gap-2 mt-2">
                  <Link href='https://github.com/calaisfelipe' className="hover:opacity-60" target="_blank"><BsGithub size={18} /></Link>
                  <Link href='https://www.instagram.com/calaisfelipe/' className="hover:opacity-60" target="_blank"><BsInstagram size={18} /></Link>
                  <Link href='https://twitter.com/CalaisFelipe_br' className="hover:opacity-60" target="_blank"><BsTwitter size={18} /></Link>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div>
                <BsTelephone size={108}/>
              </div>
              <div>
                
                <div className="flex flex-row gap-2 mt-2 justify-center items-center">
                <Link href='https://wa.me/5531995196573' target="_blank">+55 (31) 9 9519-6573</Link>
                  <Link href='https://wa.me/5531995196573' className="hover:opacity-60" target="_blank"><BsWhatsapp size={18} /></Link>
                  
                </div>
              </div>
            </div>



          </div>
          <div className="text-4xl font-bold w-full text-center mt-8">Obrigado pela visita</div>


      </div>

    </div>
  );
};

export default ContactPage;
