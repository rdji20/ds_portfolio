import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Check if projects are already in local storage
        const fetchProjects = async () => {
            // Check local storage first

            try {
                const response = await axios.get(
                    "https://dsportfoliobe-5e233b6122bf.herokuapp.com/projects"
                );
                setProjects(response.data);
                // Cache the fetched projects in local storage
                localStorage.setItem("projects", JSON.stringify(response.data));
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <ProjectsContext.Provider value={projects}>
            {children}
        </ProjectsContext.Provider>
    );
};
