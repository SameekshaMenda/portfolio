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
import { SiCplusplus, SiTailwindcss } from "react-icons/si";

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
                padding: "4rem 0",
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            <div className="container px-4 mx-auto">
                <h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{
                        backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        wordSpacing: '4px',
                        letterSpacing: "1px",
                        lineHeight: "1.2"
                    }}
                >
                    My Skills
                </h1>

                <h2
                    className="text-xl md:text-2xl mb-8 md:mb-12"
                    style={{
                  fontSize: "1.5rem",
                  color: "#4B0082",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: "500"
                }}
                >
                    Skills I Have Gained Over Time!
                </h2>

                {/* Skill Icons */}
                <div className="space-y-12">
                    {/* Section: Languages */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl  mb-6" style={{ 
                            color: "#4B0082",
                            fontFamily: "'Roboto', sans-serif"
                        }}>
                            LANGUAGES
                        </h2>
                        <div className="flex flex-wrap gap-4 md:gap-6" style={{ marginLeft: "0" }}>
                            <SkillItem icon={<FaHtml5 className="text-orange-600" />} name="HTML5" />
                            <SkillItem icon={<FaCss3Alt className="text-blue-600" />} name="CSS3" />
                            <SkillItem icon={<FaJsSquare className="text-yellow-400" />} name="JavaScript" />
                            <SkillItem icon={<FaJava className="text-blue-700" />} name="Java" />
                            <SkillItem icon={<FaPython className="text-blue-500" />} name="Python" />
                            <SkillItem icon={<img src={CIcon} alt="C" className="w-full h-full" />} name="C" />
                            <SkillItem icon={<SiCplusplus className="text-blue-800" />} name="C++" />
                        </div>
                    </div>

                    {/* Libraries & Frameworks */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl  mb-6" style={{ 
                            color: "#4B0082",
                            fontFamily: "'Roboto', sans-serif"
                        }}>
                            LIBRARIES & FRAMEWORKS
                        </h2>
                        <div className="flex flex-wrap gap-4 md:gap-6" style={{ marginLeft: "0" }}>
                            <SkillItem icon={<FaReact className="text-cyan-400" />} name="React" />
                            <SkillItem icon={<FaBootstrap className="text-purple-700" />} name="Bootstrap" />
                            <SkillItem icon={<FaNodeJs className="text-green-600" />} name="Node.js" />
                            <SkillItem icon={<SiTailwindcss className="text-blue-500" />} name="Tailwind CSS" />
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-2xl md:text-3xl  mb-6" style={{ 
                            color: "#4B0082",
                            fontFamily: "'Roboto', sans-serif"
                        }}>
                            DATABASES
                        </h2>
                        <div className="flex flex-wrap gap-4 md:gap-6" style={{ marginLeft: "0" }}>
                            <SkillItem icon={<img src={mysql} alt="MySQL" className="w-full h-full" />} name="MySQL" />
                            <SkillItem icon={<img src={mongodb} alt="MongoDB" className="w-full h-full" />} name="MongoDB" />
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h2 className="text-2xl md:text-3xl  mb-6" style={{ 
                            color: "#4B0082",
                            fontFamily: "'Roboto', sans-serif"
                        }}>
                            TOOLS
                        </h2>
                        <div className="flex flex-wrap gap-4 md:gap-6" style={{ marginLeft: "0" }}>
                            <SkillItem icon={<FaGit className="text-red-600" />} name="Git" />
                            <SkillItem icon={<img src={vscode} alt="VS Code" className="w-full h-full" />} name="VS Code" />
                            <SkillItem icon={<img src={postman} alt="Postman" className="w-full h-full" />} name="Postman" />
                            <SkillItem icon={<FaFigma className="text-purple-500" />} name="Figma" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillItem = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center w-16 md:w-20">
            <div className="text-4xl md:text-5xl mb-2 flex items-center justify-center h-12 md:h-16 w-full">
                {icon}
            </div>
            <span className="text-xs md:text-sm text-center text-purple-900 font-medium">
                {name}
            </span>
        </div>
    );
};

export default SkillsSection;