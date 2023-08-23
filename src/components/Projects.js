import React from "react";
import ProjectCard from "./projectCard";

const projectsData = [
    {
        title: "Project 1",
        description: "A brief description of Project 1.",
        imagePath: "/path/to/image1.jpg",
        link: "/path/to/details1.html",
    },
    {
        title: "Project 2",
        description: "A brief description of Project 2.",
        imagePath: "/path/to/image2.jpg",
        link: "/path/to/details2.pdf",
    },
    // ... more projects
];

function Projects() {
    return (
        <div class="grid grid-cols-3 gap-4">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;
