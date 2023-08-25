'use client'
import React,{useEffect} from 'react'
import TittleTwo from '@/components/Tittle'
import ProjectsList from '@/components/ProjectsList'
import {projectsFirstRow} from '@/data/projects'
import {motion} from 'framer-motion'
import AccordeonPortfolio from '@/components/AccordeonPortfolio'
import useContextLanguage from "@/hooks/useContextLanguage";


const PortfolioPage = () => {
 
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
    <div className="sm:h-screen h-[95vh] flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-full">
      <motion.div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full " initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2, duration:2}}>
        <TittleTwo text="Portfolio" />

        <ProjectsList projects={projectsFirstRow} language={language.state}/>
        <AccordeonPortfolio language={language.state}/>
        
        
        </motion.div>
    </div>
  )
}

export default PortfolioPage