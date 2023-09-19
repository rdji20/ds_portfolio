import React, { useContext } from "react";
import ProjectCard from "./projectCard";
import { ProjectsContext } from "../contexts/ProjectsContext";

function Projects() {
    const projectsData = useContext(ProjectsContext);

    return (
        <div className="grid grid-cols-3 gap-4 projects-grid">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;
