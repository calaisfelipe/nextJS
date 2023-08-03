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
import webDesing from "@/public/images/webdesign.png";
import interfaceUser from "@/public/images/interfacedeusuario.png";
import responsiveDesign from "@/public/images/designResponsivo.png";
import git from "@/public/images/Git-Logo-White.png"


const aboutMePage = () => {
  const tecnologies = [css, js, ts, html5, reactLogo, tailwind, nextlogo, git];

  return (
    <div className="md:h-screen w-full bg-gray-200 dark:bg-gray-700 dark:text-white flex justify-center ">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full">
        <Tittle text="Sobre mim" />

        <div className="text-center">
          <p className="text-lg">
            Eu sou o <span className=" font-bold text-lg dark:text-blue-400">Felipe Calais</span>,
            Desenvolvedor web / Front-end
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Um entusiasta por tecnologia, apaixonado pela programação e seus desafios. Gosto de criar e resolver problemas. Estudo e me mantenho atualizado com as melhores tecnologias da atualidade. 
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-2 mt-2 w-full">
          <div className="grid lg:grid-cols-2 grid-cols-1  bg-gray-900 md:max-w-[60%] max-w-full p-2 border gap-4 border-yellow-500 dark:border-blue-900  ">
            <div className="flex flex-col justify-center items-center p-2 ">
              <span className="text-6xl text-yellow-500 dark:text-blue-400">8+</span>
              <p className="uppercase text-white text-[9px] ">
                Tecnologias que domino
              </p>
            </div>

            <div className="grid-cols-4 grid gap-2 p-2 ">
              {tecnologies.map((tec, index) => (
                <Image
                  src={tec}
                  height={24}
                  width={44}
                  alt="tecnologies logo"
                  key={index}
                  className="cursor-pointer transition hover:scale-125 m-1"
                />
              ))}
            </div>

            <div className="flex flex-col justify-center items-center p-2 ">
              <span className="text-6xl text-yellow-500 dark:text-blue-400">40+</span>
              <p className="uppercase text-white text-[9px] ">
                Projetos realizados
              </p>
            </div>
            
            <div className="flex flex-col justify-center items-center p-2  ">
              <span className="text-6xl text-yellow-500 dark:text-blue-400">1.2</span>
              <p className="uppercase text-white text-[9px] ">
                Anos de experiencia
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-lg dark:text-blue-400">Oque eu faço?</h3>
            <div className="flex flex-col">
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <Image
                    src={webDesing}
                    alt="webdesign"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="max-w-full">
                  <h4 className="font-bold dark:text-blue-400">Landing Pages</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Paginas web lindas, focadas em efetiva conversão em vendas.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <Image
                    src={responsiveDesign}
                    alt="webdesign"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="w-80">
                  <h4 className="font-bold dark:text-blue-400">Design Responsivo</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Aplicações e sites responsivos, seja desktop, mobile ou qualquer outro dispositivo.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <div>
                  <Image
                    src={interfaceUser}
                    alt="webdesign"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="w-80">
                  <h4 className="font-bold dark:text-blue-400">Interfaces de usuario</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Interfaces com belo design,  interativas e que melhoram a experiência do usuario.
                  </p>
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
