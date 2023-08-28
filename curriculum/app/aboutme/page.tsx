"use client";
import React, { useEffect } from "react";
import Tittle from "@/components/Tittle";
import Image from "next/image";
import css from "@/public/images/css-3.png";
import js from "@/public/images/js.png";
import ts from "@/public/images/typescript.png";
import html5 from "@/public/images/html-5.png";
import reactLogo from "@/public/images/science.png";
import tailwind from "@/public/images/Tailwind.png";
import nextlogo from "@/public/images/next-js-logo.png";
import git from "@/public/images/Git-Logo-White.png";
import useContextLanguage from "@/hooks/useContextLanguage";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import MobileAboutme from "@/components/MobileAboutme";
import SliderServices from "@/components/SliderServices";


const AboutMePage = () => {
  const tecnologies = [css, js, ts, html5, reactLogo, tailwind, nextlogo, git];
  const language = useContextLanguage();

  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest2) => Math.round(latest2));
  const rounded3 = useTransform(count3, (latest3) => Math.round(latest3));

  useEffect(() => {
    const controls = animate(count, 50, { duration: 5 });
    const controls2 = animate(count2, 8, { duration: 3 });
    const controls3 = animate(count3, 1.2, { duration: 3 });

    return controls.stop, controls2.stop, controls3.stop;
  }, [count, count2, count3]);

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
    <motion.div
      className="sm:h-screen h-[95.8vh] w-full 
      bg-gray-200 dark:bg-gray-700 dark:text-white flex justify-center overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text={language.state === "EN" ? `About me` : "Sobre mim"} />

        <div className="w-full mt-2 sm:px-0 px-4">
          <p className="text-2xl">
            {language.state === "EN" ? `I'm ` : "Eu sou o "}
            <span className="text-2xl 
            dark:text-blue-400 text-yellow-500 font-extrabold">
              Felipe Calais, <br/>
            </span>
            {language.state === "EN" ? ` Web-Developer / Front-end` : ", Desenvolvedor web / Front-end"}
            
          </p>
        </div>
        <div className="w-full sm:px-0 px-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {language.state === "EN"
              ? "A technology enthusiast, passionate about programming and its challenges. I like to create and solve problems. I study and keep myself updated with the best technologies of today."
              : "Um entusiasta por tecnologia, apaixonado pela programação e seus desafios. Gosto de criar e resolver problemas. Estudo e me mantenho atualizado com as melhores tecnologias da atualidade. Programação e desenvolvimento é o meu foco mas tenho buscado me especializ em UX/UI e design. Meu objetivo é me tornar o profissional web mais completo possivel."}
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-2 mt-2 w-full sm:px-0 px-2  items-center ">

          <MobileAboutme language={language} actions={{rounded,rounded2,rounded3}}/>
          <div className="sm:grid sm:grid-cols-2  bg-transparent md:max-w-[60%] max-w-full gap-[1px] hidden">
            <div className="flex flex-col justify-center items-center p-2 bg-black sm:w-full w-80">
              <div className="flex flex-row">
                <motion.div className="text-6xl text-yellow-500 dark:text-blue-400">
                  {rounded2}
                </motion.div>
                <span className="text-6xl text-yellow-500 dark:text-blue-400 ">
                  +
                </span>
              </div>
              <p className="uppercase text-white text-[9px] ">
                {language.state === "EN"
                  ? `Technologies I master`
                  : "Tecnologias que domino"}
              </p>
            </div>

            <div className="grid-cols-4 grid gap-2 p-2 bg-black sm:w-full w-80">
              {tecnologies.map((tec, index) => (
                <Image
                  src={tec}
                  height={20}
                  width={40}
                  alt="tecnologies logo"
                  key={index}
                  className="cursor-pointer transition hover:scale-125 m-1"
                />
              ))}
            </div>

            <div className="flex flex-col justify-center items-center p-2 bg-black sm:w-full w-80">
              <div className="flex flex-row">
                <motion.div className="text-6xl text-yellow-500 dark:text-blue-400">
                  {rounded}
                </motion.div>
                <span className="text-6xl text-yellow-500 dark:text-blue-400 ">
                  +
                </span>
              </div>
              <p className="uppercase text-white text-[9px] ">
                {language.state === "EN"
                  ? `Completed Projects`
                  : "Projetos realizados"}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center p-2 bg-black sm:w-full w-80 ">
              <div className="flex flex-row">
                <motion.div className="text-6xl text-yellow-500 dark:text-blue-400">
                  {rounded3}
                </motion.div>
                <span className="text-6xl text-yellow-500 dark:text-blue-400 ">
                  +
                </span>
              </div>
              <p className="uppercase text-white text-[9px] ">
                {language.state === "EN"
                  ? `Years of experience`
                  : "Anos de experiencia"}
              </p>
            </div>
              </div>
              

          <div className="sm:pl-0 pl-5">
            <h3 className="font-bold text-2xl dark:text-blue-400 mb-1">
              {language.state === "EN" ? `What I Do?` : "Oque eu faço?"}
            </h3>
            <SliderServices />
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMePage;
