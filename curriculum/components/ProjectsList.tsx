'use client'
import React from "react";
import ProjectCard from "./ProjectCard";


type ProjectListType = {
  language: string
  projects: {
    title: string;
    thumbnailUrl?: any;
    isInBuild?: boolean;
    tecnologies?: any[];
    description?: string;
    link: string;
    
  }[];
};

const ProjectsList = ({projects, language }: ProjectListType) => {

  

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 hidden">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} language={language}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
 