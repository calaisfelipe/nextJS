import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectListType = {
  projects: {
    title: string;
    thumbnailUrl?: any;
    isInBuild?: boolean;
    tecnologies?: any[];
    description?: string;
    link: string;
  }[];
};

const ProjectsList = ({ projects }: ProjectListType) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
