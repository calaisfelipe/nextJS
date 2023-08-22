"use client"
import React, {useEffect} from "react";
import Tittle from "@/components/Tittle";
import FormationBox from "@/components/FormationBox";
import useContextLanguage from "@/hooks/useContextLanguage";
import {motion} from 'framer-motion'


const FormationPage = () => {
    const language = useContextLanguage()


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
    <div className="md:h-screen flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text={language.state === 'EN'? "Formation" : 'Formação'} />

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2, duration:2}} className="flex flex-col w-full sm:p:0 p-2">
          <div>
            <h4 className="uppercase font-bold text-md dark:text-blue-400">{language.state === 'EN'? "Education" : 'Escolaridade'}</h4>
            <div className="flex sm:flex-row flex-col gap-4">
              <FormationBox
                duration="2010-2012"
                title="Cotemig - Belo horizonte/MG"
                subtitle="Técnico em informática"
                description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
              />
              <FormationBox
              duration="2013-2014"
                title="Cotemig - Belo horizonte/MG"
                subtitle="Técnico em informática"
                description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
              />
              <FormationBox
                duration="2014-"
                title="Idiomas"
                subtitle="Inglês Fluente"
                description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
              />
            </div>
          </div>

          <div className="mt-4">
          <h4 className="uppercase font-bold text-md dark:text-blue-400">{language.state === 'EN'? "Experiences" : 'Experiências'}</h4>
          <div className="flex sm:flex-row flex-col  gap-4">
            <FormationBox
              duration="2013-2014"
              title="Realteq - Automação comercial"
              subtitle="Técnico em informática"
              description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
            />
            <FormationBox
              duration="2014-2015"
              title="Provarejo"
              subtitle="Supervisor Técnico"
              description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
            />
            <FormationBox
              duration="2022-"
              title="Transição de carreira"
              subtitle="Desenvolvedor web/ Front end"
              description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
            />
          </div>
        </div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default FormationPage;
