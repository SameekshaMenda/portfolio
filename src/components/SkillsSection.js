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
import { SiCplusplus, SiTailwindcss, SiMysql, SiMongodb, SiPostman, SiVisualstudiocode } from "react-icons/si";

const SkillsSection = () => {
    return (
        <section
            id="skills"
            style={{
                backgroundColor: "#F3E8FF",
                position: "relative",
                padding: "80px 0",
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            <div className="container px-4">
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
                    className="text-xl md:text-2xl mb-10"
                    style={{
                        color: "#4B0082",
                        fontWeight: "500"
                    }}
                >
                    Skills I Have Gained Over Time
                </h2>

                {/* Skill Categories */}
                <div className="space-y-12">
                    {/* Languages */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#4B0082" }}>
                            Languages
                        </h3>
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            <SkillIcon icon={<FaHtml5 />} color="text-orange-600" name="HTML5" />
                            <SkillIcon icon={<FaCss3Alt />} color="text-blue-600" name="CSS3" />
                            <SkillIcon icon={<FaJsSquare />} color="text-yellow-400" name="JavaScript" />
                            <SkillIcon icon={<FaJava />} color="text-blue-700" name="Java" />
                            <SkillIcon icon={<FaPython />} color="text-blue-500" name="Python" />
                            <SkillIcon icon={<SiCplusplus />} color="text-blue-800" name="C++" />
                        </div>
                    </div>

                    {/* Libraries & Frameworks */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#4B0082" }}>
                            Libraries & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            <SkillIcon icon={<FaReact />} color="text-cyan-400" name="React" />
                            <SkillIcon icon={<FaBootstrap />} color="text-purple-700" name="Bootstrap" />
                            <SkillIcon icon={<FaNodeJs />} color="text-green-600" name="Node.js" />
                            <SkillIcon icon={<SiTailwindcss />} color="text-blue-500" name="Tailwind CSS" />
                        </div>
                    </div>

                    {/* Databases */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#4B0082" }}>
                            Databases
                        </h3>
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            <SkillIcon icon={<SiMysql />} color="text-blue-600" name="MySQL" />
                            <SkillIcon icon={<SiMongodb />} color="text-green-600" name="MongoDB" />
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#4B0082" }}>
                            Tools
                        </h3>
                        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                            <SkillIcon icon={<FaGit />} color="text-red-600" name="Git" />
                            <SkillIcon icon={<SiVisualstudiocode />} color="text-blue-600" name="VS Code" />
                            <SkillIcon icon={<SiPostman />} color="text-orange-600" name="Postman" />
                            <SkillIcon icon={<FaFigma />} color="text-purple-500" name="Figma" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillIcon = ({ icon, color, name }) => {
    return (
        <div className="flex flex-col items-center w-20 md:w-24">
            <div className={`text-4xl md:text-5xl mb-2 ${color}`}>
                {icon}
            </div>
            <span className="text-sm md:text-base text-center text-purple-900 font-medium">
                {name}
            </span>
        </div>
    );
};

export default SkillsSection;