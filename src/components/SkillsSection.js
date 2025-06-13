import React from "react";
import "../css/App.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaNodeJs,
    FaReact,
    FaBootstrap,
    FaPython,
    FaGit,
    FaJava,
    FaFigma,
} from "react-icons/fa";
import { SiCplusplus, SiTailwindcss } from "react-icons/si"; // Add SiTailwindcss

//import { SiCplusplus } from "react-icons/si";

// Import the custom icons
import CIcon from "../icons/c icon.png";
import postman from "../icons/postman.png";
import vscode from "../icons/vscode.png";
import mysql from "../icons/mysql.png";
import mongodb from "../icons/mongodb.png";
import tailwind from "../icons/tailwind.png";
const SkillsSection = () => {
    return (
        <section
            id="skills"
            style={{
                backgroundColor: "#F3E8FF",
                position: "relative",
                paddingTop: "80px",
                paddingBottom: "80px",
            }}
        >
            <div className="container">
                <p
                    className="text-6xl font-bold text-transparent mb-4"
                    style={{
                        backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        animation: 'glitter 1.5s infinite linear',
                        fontFamily: "'Poppins', sans-serif",
                        // display: "inline-block", //gives gradient effect
                        wordSpacing: '4px',
                        letterSpacing: "1px",
                        lineHeight: "1.2" // Increase spacing between lines to solve y problem
                    
                    }}
                >
                    My Skills
                </p>


                <p
                    className="text-lg text-purple-600 italic mb-10"
                    style={{
                        fontFamily: "'Lobster', cursive",
                        fontSize: "1.5rem",
                    }}
                >
                    Skills I Have Gained Over Time!!
                </p>

                {/* Skill Icons */}
                <div className="skills-section py-12 px-6">
                   {/* Section: Languages */}
<div className="mb-12">
    <h2 className="text-3xl font-bold text-purple-900 mb-8" style={{ fontFamily: "'Lobster', cursive" }}>
        LANGUAGES
    </h2>
    <div className="flex flex-wrap items-center gap-6">
        {[
            { icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
            { icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
            { icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
            { icon: <FaJava className="text-blue-700 text-5xl" /> },
            { icon: <FaPython className="text-blue-500 text-5xl" /> },
            { icon: <img src={CIcon} alt="C" className="w-12 h-12" /> },
            { icon: <SiCplusplus className="text-blue-800 text-5xl" /> },
        ].map((item, index) => (
            <div key={index} className="flex items-center">
                {item.icon}
            </div>
        ))}
    </div>
</div>

{/* Libraries & Frameworks */}
<div className="mb-12">
    <h2 className="text-3xl font-bold text-purple-900 mb-6" style={{ fontFamily: "'Lobster', cursive" }}>
        LIBRARIES & FRAMEWORKS
    </h2>
    <div className="flex flex-wrap items-center gap-6">
        {[
            { icon: <FaReact className="text-cyan-400 text-5xl" /> },
            { icon: <FaBootstrap className="text-purple-700 text-5xl" /> },
            { icon: <FaNodeJs className="text-green-600 text-5xl" /> },
            { icon: <SiTailwindcss className="text-blue-500 text-5xl" /> },
        ].map((item, index) => (
            <div key={index} className="flex items-center">
                {item.icon}
            </div>
        ))}
    </div>
</div>

{/* Databases */}
<div className="mb-12">
    <h2 className="text-3xl font-bold text-purple-900 mb-6" style={{ fontFamily: "'Lobster', cursive" }}>
        DATABASES
    </h2>
    <div className="flex flex-wrap items-center gap-6">
        {[
            { icon: <img src={mysql} alt="MySQL" className="w-12 h-12" /> },
            { icon: <img src={mongodb} alt="MongoDB" className="w-12 h-12" /> },
        ].map((item, index) => (
            <div key={index} className="flex items-center">
                {item.icon}
            </div>
        ))}
    </div>
</div>

{/* Tools */}
<div>
    <h2 className="text-3xl font-bold text-purple-900 mb-6" style={{ fontFamily: "'Lobster', cursive" }}>
        TOOLS
    </h2>
    <div className="flex flex-wrap items-center gap-6">
        {[
            { icon: <FaGit className="text-red-600 text-5xl" /> },
            { icon: <img src={vscode} alt="VS Code" className="w-12 h-12" /> },
            { icon: <img src={postman} alt="Postman" className="w-12 h-12" /> },
            { icon: <FaFigma className="text-purple-500 text-5xl" /> },
        ].map((item, index) => (
            <div key={index} className="flex items-center">
                {item.icon}
            </div>
        ))}
    </div>
</div>

                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
