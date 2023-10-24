import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";
import { ChatProvider } from "./contexts/ChatContext";
import { ProjectsProvider } from "./contexts/ProjectsContext";
import Notes from "./components/Notes";

function App() {
    return (
        <ChatProvider>
            <ProjectsProvider>
                <Router>
                    {/* Navigation */}
                    <nav className="overflow-y-auto">
                        <div className="sticky top-0 z-50 colordef text-white p-4 shadow-md">
                            <div className="container mx-auto flex justify-between">
                                <Link to="/" className="hover:text-gray-300">
                                    Home
                                </Link>
                                <Link
                                    to="/projects"
                                    className="hover:text-gray-300"
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="/notes"
                                    className="hover:text-gray-300"
                                >
                                    Notes
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* Routes */}
                    {/* Routes */}
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/*" element={<Home />} />
                    </Routes>
                </Router>
            </ProjectsProvider>
        </ChatProvider>
    );
}

export default App;
