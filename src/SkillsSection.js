import React from "react";
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
import { SiCplusplus } from "react-icons/si";

// Import the custom icons
import CIcon from "./icons/c icon.png";
import postman from "./icons/postman.png";
import vscode from "./icons/vscode.png";
import mysql from "./icons/mysql.png";

const SkillsSection = () => {
    return (
        <section id="skills" className="liquid-container">
            <div className="content-container">
                <p
                    className="text-xl font-semibold text-pink-700 mb-12"
                    data-aos="fade-in"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                    style={{ fontFamily: "Arial, sans-serif" }} // Changed to standard font
                >
                    A collection of technologies and tools I've mastered
                </p>

                {/* Section: Languages in One Line */}
                <div className="w-full mb-8">
                    <div className="language-icons">
                        <h2
                            className="text-xl font text-darkpurple-700 mb-12"
                            data-aos-easing="ease-out"
                            style={{ fontFamily: "Arial, sans-serif" }} // Changed to standard font
                        >
                            LANGUAGES
                        </h2>
                        <div className="flex gap-4 flex-wrap justify-start">
                            <FaHtml5 size={50} color="#E44D26" title="HTML5" />
                            <FaCss3Alt size={50} color="#1572B6" title="CSS3" />
                            <FaJsSquare size={50} color="#F7DF1E" title="JavaScript" />
                            <FaJava size={50} color="#5382A1" title="Java" />
                            <FaPython size={50} color="#3776AB" title="Python" />
                            <img
                                src={CIcon}
                                alt="C"
                                title="C"
                                className="w-12 h-12"
                            />
                            <SiCplusplus size={50} color="#00599C" title="C++" />
                        </div>
                    </div>
                </div>

                {/* Section: Libraries, Databases, Tools in One Line */}
                <div className="flex gap-3">
                    {/* Libraries & Frameworks Section */}
                    <div className="w-full sm:w-7/12">
                        <div className="libraries-icons mb-8">
                            <h2
                                className="text-xl font text-darkpurple-700 mb-12"
                                data-aos-easing="ease-out"
                                style={{ fontFamily: "Arial, sans-serif" }} // Changed to standard font
                            >
                                LIBRARIES & FRAMEWORKS
                            </h2>
                            <div className="flex gap-4 flex-wrap justify-start">
                                <FaReact size={50} color="#61DAFB" title="React" />
                                <FaBootstrap size={50} color="#7952B3" title="Bootstrap" />
                                <FaNodeJs size={50} color="#68A063" title="Node.js" />
                            </div>
                        </div>
                    </div>

                    {/* Databases Section */}
                    <div className="w-full sm:w-7/12">
                        <div className="database-icons mb-8">
                            <h2
                                className="text-xl font text-darkpurple-700 mb-12"
                                data-aos-easing="ease-out"
                                style={{ fontFamily: "Arial, sans-serif" }} // Changed to standard font
                            >
                                DATABASES
                            </h2>
                            <div className="flex gap-4 flex-wrap justify-start">
                                <img
                                    src={mysql}
                                    alt="MySQL"
                                    title="MySQL"
                                    className="w-12 h-12"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className="w-full sm:w-7/12">
                        <div className="tools-icons mb-8">
                            <h2
                                className="text-xl font text-darkpurple-700 mb-12"
                                data-aos-easing="ease-out"
                                style={{ fontFamily: "Arial, sans-serif" }} // Changed to standard font
                            >
                                TOOLS
                            </h2>
                            <div className="flex gap-4 flex-wrap justify-start">
                                <FaGit size={50} color="#F14E32" title="Git" />
                                <img
                                    src={vscode}
                                    alt="VS Code"
                                    title="VS Code"
                                    className="w-12 h-12"
                                />
                                <img
                                    src={postman}
                                    alt="Postman"
                                    title="Postman"
                                    className="w-12 h-12"
                                />
                                <FaFigma size={50} color="#A259FF" title="Figma" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
