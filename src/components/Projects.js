import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "./projectCard";

function Projects() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            // Check local storage first
            const cachedProjects = JSON.parse(localStorage.getItem("projects"));

            if (cachedProjects) {
                setProjectsData(cachedProjects);
            } else {
                try {
                    const response = await axios.get(
                        "https://dsportfoliobe-5e233b6122bf.herokuapp.com/projects"
                    );
                    setProjectsData(response.data);
                    // Cache the fetched projects in local storage
                    localStorage.setItem(
                        "projects",
                        JSON.stringify(response.data)
                    );
                } catch (error) {
                    console.error("Error fetching projects:", error);
                }
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
}

export default Projects;
