import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectsWrapper } from "./ProjectsElements";

function Projects() {
  return (
    <div>
      <ProjectsWrapper id="projects">
          <div className="container">
            <div className="section-title">Projects</div>
            <ProjectCard />
          </div>
      </ProjectsWrapper>
    </div>
  );
}

export default Projects;
