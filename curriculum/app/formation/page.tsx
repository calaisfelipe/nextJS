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
    <div className="sm:h-screen h-[95vh]  flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-full overflow-x-hidden">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text={language.state === "EN" ? "Formation" : "Formação"} />

          <Skills language={language.state}/>
        

      </div>
    </div>
  );
};

export default FormationPage;
