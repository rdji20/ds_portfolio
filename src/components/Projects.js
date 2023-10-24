import React, { useContext } from "react";
import ProjectCard from "./projectCard";
import { ProjectsContext } from "../contexts/ProjectsContext";

function Projects() {
    const { projects } = useContext(ProjectsContext);

    return (
        <div className="App">
            <div className="grid grid-cols-3 gap-4 projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
