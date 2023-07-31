import React from "react";
import Tittle from "@/components/Tittle";
import Image from "next/image";
import css from "@/public/images/css-3.png";
import js from "@/public/images/js.png";
import ts from "@/public/images/typescript.png";
import html5 from "@/public/images/html-5.png";
import reactLogo from "@/public/images/science.png";
import tailwind from "@/public/images/Tailwind.png";
import nextlogo from "@/public/images/next-js-logo.png";
import webDesing from '@/public/images/webdesign.png'
import interfaceUser from '@/public/images/interfacedeusuario.png'
import responsiveDesign from '@/public/images/designResponsivo.png'

const aboutMePage = () => {
  const tecnologies = [css, js, ts, html5, reactLogo, tailwind, nextlogo];

  return (
    <div className="h-screen w-full bg-gray-200 flex justify-center  p-3">
      <div className="flex flex-col gap-2 justify-center items-center">
        <Tittle text="Sobre mim" />
        <div>
          <p className="text-lg">
            Eu sou o <span className=" font-bold text-lg">Felipe Calais</span> ,
            Desenvolvedor web / Front-end
          </p>
          <div className="w-96">
            <p className="text-sm text-gray-600">
              Trabalho desenvolvendo aplicações web, desde landing pages,
              interfaces de usuario, sites de vendas com total interação e
              responsividade para dispositivos desktop ou mobile. Utilizo as
              tecnologias mais modernas como nextJS , react , Javascript e
              Typescript.
            </p>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <div className="grid grid-cols-2 row-span-2 bg-black w-[400px] p-2 border gap-4 border-yellow-500">
              <div className="flex flex-col justify-center items-center p-2 border-r">
                <span className="text-6xl text-yellow-500">8+</span>
                <p className="uppercase text-white text-[9px] ">
                  Tecnologias que domino
                </p>
              </div>

              <div className="flex flex-col justify-center items-center p-2">
                <span className="text-6xl text-yellow-500">60+</span>
                <p className="uppercase text-white text-[9px] ">
                  Projetos realizados
                </p>
              </div>
              <div className="flex gap-2 flex-wrap border-t border-dashed mx-2 p-2 ">
                {tecnologies.map((tec, index) => (
                  <Image
                    src={tec}
                    height={24}
                    width={44}
                    alt="tecnologies logo"
                    key={index}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center items-center p-2 border-t border-dashed mx-2 ">
                <span className="text-6xl text-yellow-500">1.2</span>
                <p className="uppercase text-white text-[9px] ">
                  Anos de experiencia
                </p>
              </div>
            </div>
            
            <div className="flex flex-col justify-center ">
            <h3 className="font-bold text-lg">Oque eu faço?</h3>
              <div className="flex flex-col">
                <div className="flex gap-2 justify-center items-center">
                  <div>
                    <Image src={webDesing} alt='webdesign' width={60} height={60} />
                  </div>
                  <div className="w-80">
                    <h4 className="font-bold">Landing Pages</h4>
                    <p className="text-sm text-gray-600">Paginas web lindas, focadas em efetiva conversão de vendas</p>
                  </div>

                </div>
                <div className="flex gap-2 justify-center items-center">
                  <div>
                    <Image src={responsiveDesign} alt='webdesign' width={60} height={60} />
                  </div>
                  <div className="w-80">
                    <h4 className="font-bold">Design Responsivo</h4>
                    <p className="text-sm text-gray-600">Paginas web lindas, focadas em efetiva conversão de vendas</p>
                  </div>

                </div>
                <div className="flex gap-2 justify-center items-center">
                  <div>
                    <Image src={interfaceUser} alt='webdesign' width={60} height={60} />
                  </div>
                  <div className="w-80">
                    <h4 className="font-bold">Interfaces de usuario</h4>
                    <p className="text-sm text-gray-600">Paginas web lindas, focadas em efetiva conversão de vendas</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutMePage;
