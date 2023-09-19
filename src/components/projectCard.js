import React from "react";
import "../App.css";

function ProjectCard({ project }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {project.imagePath && (
                <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
            )}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-black">
                    {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline"
                >
                    Link
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
