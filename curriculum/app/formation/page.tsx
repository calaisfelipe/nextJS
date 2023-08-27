"use client";
import React, { useEffect } from "react";
import Tittle from "@/components/Tittle";
import FormationBox from "@/components/FormationBox";
import useContextLanguage from "@/hooks/useContextLanguage";
import { motion } from "framer-motion";
import Skills from "@/components/Skills";

const FormationPage = () => {
  const language = useContextLanguage();

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
    <div className="sm:h-screen h-[95vh]  flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-full overflow-hidden">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text={language.state === "EN" ? "Formation" : "Formação"} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="md:flex flex-col w-full sm:p:0 p-2 hidden"
        >
          <div>
            <h4 className="uppercase font-bold text-md dark:text-blue-400">
              {language.state === "EN" ? "Education" : "Escolaridade"}
            </h4>
            <div className="flex sm:flex-row flex-col gap-4">
              <FormationBox
                duration="2009-2011"
                title="Cotemig - Belo horizonte/MG"
                subtitle={language.state === 'EN' ? 'Computer Technician': "Técnico em informática"}
                description={language.state === 'EN' ? "High school together with a technical and vocational course in computer science. Here I had my first contact with programming." :"Ensino médio juntamente com o curso técnico e profissionalizante em informática. Aqui tive meu primeiro contato com programação."}
              />

              <FormationBox
                duration="2014-"
                title={language.state === "EN" ? "Languages " :"Idiomas"}
                subtitle={language.state === 'EN' ? "Fluent English" :"Inglês Fluente"}
                description={language.state === 'EN' ? "Advanced English and fluency in conversation." :"Inglês avançado e fluência em conversação."}
              />

              <FormationBox
                duration="2011-2013"
                title="Realteq - Automação comercial"
                subtitle={language.state === 'EN' ? 'Computer Technician': "Técnico em informática"}
                description={language.state === 'EN' ? "Technician responsible for the maintenance, installation and support of electronic and computer equipment." :"Técnico responsável pela manutenção, instalação e suporte de equipamentos eletrônicos e de informática."}
              />
            </div>
          </div>

          <div className="mt-4">
            <h4 className="uppercase font-bold text-md dark:text-blue-400">
              {language.state === "EN" ? "Experiences" : "Experiências"}
            </h4>
            <div className="flex sm:flex-row flex-col  gap-4">
              <FormationBox
                duration="2013-2014"
                title="Provarejo - Automação LTDA"
                subtitle={language.state === 'EN' ?"Electronics Technician":"Técnico em Eletrônica"}
                description={language.state === 'EN' ?"Responsible for the laboratory of electronic scales. Maintenance, support and installation.":"Responsável pelo laboratório de balanças eletrônicas. Manutenção, suporte e instalação."}
              />
              <FormationBox
                duration="2014-2016"
                title="Provarejo - Automação LTDA"
                subtitle={language.state === 'EN' ? "Technical supervisor" :"Supervisor Técnico"}
                description={language.state === 'EN' ? "Responsible for supervising and coordinating a team of technicians to serve several customers in different states." :"Responsável por supervisionar e coordenar uma equipe de técnicos para atendimento a diversos clientes em diferentes estados."}
              />
              <FormationBox
                duration="2022-2023"
                title={language.state === 'EN' ? "Career transition": "Transição de carreira"}
                subtitle={language.state === 'EN' ? "Web Developer/ Front end": "Desenvolvedor web/ Front end"}
                description={language.state === 'EN' ? "Period dedicated to intense study in Front-End programming. Immersion in technologies such as HTML, CSS, JavaScript/TypeScript, react, NextJs and others.": "Periodo dedicado ao estudo intenso em programação Front-End. Imersão em tecnologias como HTML, CSS, JavaScript/TypeScript, react, NextJs e outras."}
              />
            </div>
          </div>
        </motion.div>

        
          <Skills language={language.state}/>
        

      </div>
    </div>
  );
};

export default FormationPage;
