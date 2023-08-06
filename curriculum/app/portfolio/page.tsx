import React from 'react'
import Tittle from '@/components/Tittle'
import ProjectsList from '@/components/ProjectsList'
import {projectsFirstRow} from '@/data/projects'


const PortfolioPage = () => {

 
  return (
    <div className="sm:h-screen flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text="Portfolio" />

        <ProjectsList projects={projectsFirstRow} />
        
        
        </div>
    </div>
  )
}

export default PortfolioPage