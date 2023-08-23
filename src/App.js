import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import "./App.css";

function Blog() {
    return <div>Blog Page</div>;
}

function App() {
    return (
        <Router>
            {/* Navigation */}
            <nav className="overflow-y-auto">
                <div className="sticky top-0 z-50 colordef text-white p-4 shadow-md">
                    <div className="container mx-auto flex justify-between">
                        <Link to="/" className="hover:text-gray-300">
                            Home
                        </Link>
                        <Link to="/projects" className="hover:text-gray-300">
                            Projects
                        </Link>
                        <Link
                            to="/blog"
                            className="hover:text-gray-300 opacity-50 cursor-not-allowed pointer-events-none"
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
