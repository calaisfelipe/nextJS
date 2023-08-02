import React from 'react'
import ProjectCard from './ProjectCard'


const ProjectsList = ({title, projects}: {title:string, projects:{title:string , thumbnailUrl:string}[]}) => {
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
        {/*<p className='text-gray-500 text-md md:text-xl lg:text-2xl font-semibold' >{title}</p>*/}
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-3'>
       { projects.map((project) => <ProjectCard key={project.title} project={project}/>)}
      </div>
    </div>
  )
}

export default ProjectsList