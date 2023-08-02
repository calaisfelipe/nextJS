import React from 'react'
import Tittle from '@/components/Tittle'
import ProjectsList from '@/components/ProjectsList'
import {projectsFirstRow, projectsSecondRow} from '@/data/projects'


const PortfolioPage = () => {

 
  return (
    <div className="md:h-screen flex justify-center  bg-gray-200 w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text="Portfólio" />

        <ProjectsList title='Landing Pages' projects={projectsFirstRow} />
        <ProjectsList title='Landing Pages' projects={projectsSecondRow} />
        
        </div>
    </div>
  )
}

export default PortfolioPage