"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSkills from "@/hooks/useSkills";
import FormationBox from "./FormationBox";
import {BiLogoJavascript,BiLogoTypescript, BiLogoReact,BiLogoHtml5,BiLogoTailwindCss,BiLogoCss3, BiLogoMongodb, BiLogoFigma} from 'react-icons/bi'
import {TbBrandNextjs,TbBrandPrisma} from 'react-icons/tb'

const contentAnimation = {
  hidden:{opacity:0},
  visible:{opacity:1,origin:0, transition:{duration:1}}
  
}


const Skills = ({language}:{language:string}) => {
  const select = useSkills();

  return (
   
    <AnimatePresence>
      <div className="w-full mx-10 md:hidden mt-2 p-2">
        <div className="flex flex-row gap-4">
          <div
            className={`  cursor-pointer
            ${
              select.selected === "school"
                ? "text-yellow-500 dark:text-blue-500"
                : "dark:text-white"
            }
            `}
            onClick={() => select.setSelected("school")}
          >
            {language === 'EN' ?'Schooling' : 'Escolaridade'}
            <motion.div
              exit={{ transition: { ease: "easeInOut" } }}
              className={`border-t-2 border-black dark:border-white ${
                select.selected === "school" ? "w-22" : "w-12"
              }`}
            ></motion.div>
          </div>

          <div
            className={` cursor-pointer
            ${
              select.selected === "experience"
                ? "text-yellow-500 dark:text-blue-500"
                : "dark:text-white"
            }
            `}
            onClick={() => select.setSelected("experience")}
          >
            
            {language === 'EN' ?'Experience' : 'Experiências'}
            <div
              className={`border-t-2 border-black dark:border-white ${
                select.selected === "experience" ? "w-22" : "w-12"
              }`}
            ></div>
          </div>

          <div
            className={` cursor-pointer
            ${
              select.selected === "skills"
                ? "text-yellow-500 dark:text-blue-500"
                : "dark:text-white"
            }
            `}
            onClick={() => select.setSelected("skills")}
          >
            
            {language === 'EN' ?'Skills' : 'Habilidades'}
            <div
              className={`border-t-2 border-black dark:border-white  ${
                select.selected === "skills" ? "w-22" : "w-12"
              }`}
            ></div>
          </div>
        </div>
        <div>
           {select.selected === 'school' && <motion.div className="flex flex-col gap-1 " variants={contentAnimation} initial='hidden' animate='visible' exit='hidden'>
          <FormationBox
                duration="2009-2011"
                title="Cotemig - Belo horizonte/MG"
                subtitle={language === 'EN' ? 'Computer Technician': "Técnico em informática"}
                description={language === 'EN' ? "High school together with a technical and vocational course in computer science. Here I had my first contact with programming." :"Ensino médio juntamente com o curso técnico e profissionalizante em informática. Aqui tive meu primeiro contato com programação."}
              />

              <FormationBox
                duration="2014-"
                title={language === "EN" ? "Languages " :"Idiomas"}
                subtitle={language === 'EN' ? "Fluent English" :"Inglês Fluente"}
                description={language === 'EN' ? "Advanced English and fluency in conversation." :"Inglês avançado e fluência em conversação."}
              />
          </motion.div>
           }     

        {select.selected === 'experience' && <motion.div className="flex flex-col gap-1" variants={contentAnimation} initial='hidden' animate='visible' exit='hidden'>
          <FormationBox
                duration="2011-2013"
                title="Realteq - Automação comercial"
                subtitle={language === 'EN' ? 'Computer Technician': "Técnico em informática"}
                description={language === 'EN' ? "Technician responsible for the maintenance, installation and support of electronic and computer equipment." :"Técnico responsável pela manutenção, instalação e suporte de equipamentos eletrônicos e de informática."}
              />
            <FormationBox
                duration="2013-2014"
                title="Provarejo - Automação LTDA"
                subtitle={language === 'EN' ?"Electronics Technician":"Técnico em Eletrônica"}
                description={language === 'EN' ?"Responsible for the laboratory of electronic scales. Maintenance, support and installation.":"Responsável pelo laboratório de balanças eletrônicas. Manutenção, suporte e instalação."}
              />
              <FormationBox
                duration="2014-2016"
                title="Provarejo - Automação LTDA"
                subtitle={language === 'EN' ? "Technical supervisor" :"Supervisor Técnico"}
                description={language === 'EN' ? "Responsible for supervising and coordinating a team of technicians to serve several customers in different states." :"Responsável por supervisionar e coordenar uma equipe de técnicos para atendimento a diversos clientes em diferentes estados."}
              />
              <FormationBox
                duration="2022-2023"
                title={language === 'EN' ? "Career transition": "Transição de carreira"}
                subtitle={language === 'EN' ? "Web Developer/ Front end": "Desenvolvedor web/ Front end"}
                description={language === 'EN' ? "Period dedicated to intense study in Front-End programming. Immersion in technologies such as HTML, CSS, JavaScript/TypeScript, react, NextJs and others.": "Periodo dedicado ao estudo intenso em programação Front-End. Imersão em tecnologias como HTML, CSS, JavaScript/TypeScript, react, NextJs e outras."}
              />
          </motion.div>}

          {select.selected === 'skills' && (
            <motion.div className="flex flex-col mt-3 p-2" variants={contentAnimation} initial='hidden' animate='visible' exit='hidden'>
              <div className="flex flex-row gap-3">
                <p>Web Developer - </p>
                <div className="flex flex-row justify-center items-center gap-1">
                  <span><BiLogoHtml5 size={18}/></span>
                  <span><BiLogoCss3 size={18}/></span>
                  <span><BiLogoJavascript size={18}/></span>
                  <span><BiLogoTypescript size={18}/></span>
                  <span><BiLogoTailwindCss size={18}/></span>
                  <span><BiLogoReact size={18}/></span>
                  <span><BiLogoMongodb size={18}/></span>
                  <span><TbBrandNextjs size={18}/></span>
                  <span><TbBrandPrisma size={18}/></span>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <p>UX/UI Design - </p>
                <div className="flex flex-row justify-center items-center gap-1">
                  <span><BiLogoFigma size={18}/></span>
                  
                </div>
              </div>

            </motion.div>
          )}


        </div>
      </div>
    </AnimatePresence>
   

  );
};

export default Skills;
