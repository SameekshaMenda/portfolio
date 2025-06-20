import React from "react";

const projectsData = [
  {
    title: "KCET Seat Availability System",
    types: ["Node.js", "mySQL"],
    image: "/kcet1.png",
    repoLink: "https://github.com/SameekshaMenda/mindbms",
    timeAgo: "2024",
  },
  {
    title: "Smart City ComplaintHub Management",
    types: ["Node.js", "MongoDB"],
    image: "/smartcity.png",
    repoLink: "https://github.com/SameekshaMenda/smart-complaint-system",
    timeAgo: "2025",
  },
  {
    title: "Zero-Trust Secure Web Application",
    types: ["Python", "2FA-authentication", "Cryptography"],
    image: "/scannerSC.png",
    repoLink: "https://github.com/SameekshaMenda/Zero_trust_security.git",
    timeAgo: "2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-purple-100 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Left-Aligned Title - Fully to the Left */}
        <div className="text-left mb-8 md:mb-10">
          <p
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            style={{
              backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              wordSpacing: '4px',
              letterSpacing: "1px",
              lineHeight: "1.2"
            }}
            data-aos="slide-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            My Projects
          </p>

          <p
            className="text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 lg:mb-10"
            style={{
              color: "#4B0082",
              
              fontWeight: "500"
            }}
          >
            A collection of projects that reflect my skills!!
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.repoLink, "_blank")}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm">{project.timeAgo}</p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                  {project.types.map((type, idx) => (
                    <span
                      key={idx}
                      className="project-type"
                      style={{
                        background: "rgba(165, 96, 247, 0.3)",
                        color: "#4B0082",
                        fontWeight: "bold",
                        padding: "0.4em 1em",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                      }}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;