import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const production_link = "https://dsportfoliobe-5e233b6122bf.herokuapp.com/";
// const dev_link = "http://127.0.0.1:5000/";

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        // Check if projects are already in local storage
        const fetchProjects = async () => {
            // Check local storage first

            try {
                const response = await axios.get(production_link + "projects");
                setProjects(response.data.projects);
                console.log(projects);
                setNotes(response.data.notes);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, [projects]);

    return (
        <ProjectsContext.Provider value={{ projects, notes, setNotes }}>
            {children}
        </ProjectsContext.Provider>
    );
};
