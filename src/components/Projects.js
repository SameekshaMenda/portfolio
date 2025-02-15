import React from "react";

const projectsData = [
  {
    title: "KCET Seat Availability",
    types: ["Analytics", "Dashboards"],
    image: "/kcet1.png",
    repoLink: "https://github.com/SameekshaMenda/mindbms",
  },
  {
    title: "SmartCity ComplaintHub",
    types: ["UI Design", "Charts"],
    image: "/smartcity.png",
    repoLink: "https://github.com/SameekshaMenda/smart-complaint-system",
  },
  {
    title: "Honey-bee Anomaly Detection",
    types: ["Streamlit", "Machine Learning"],
    image: "/bee1.png",
    repoLink: "https://github.com/SameekshaMenda/bee_hive_miniproject",
  },
];

const Projects = () => {
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
            backgroundImage: "linear-gradient(120deg, #4B0082, #800080)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            animation: "glitter 1.5s infinite linear",
            // wordSpacing: '4px',
            letterSpacing: "1px",
            lineHeight: "1.4"
          }}
          data-aos="slide-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
        >
          My Projects
        </p>

        <p
          className="text-lg text-purple-600 italic mb-10"
          style={{
            fontFamily: "'Lobster', cursive",
            fontSize: "1.5rem",
          }}
        >
          Skills are the keys to unlocking your future!
        </p>

        <div className="row">
          {projectsData.map((project, index) => (
            <div key={index} className="col-md-12 mb-5">
              <article
                className="article-wrapper"
                onClick={() => window.open(project.repoLink, "_blank")}
                style={{
                  width: "100%",
                  height: "400px",
                  transition: "0.3s all ease-in-out",
                  borderRadius: "20px",
                  padding: "15px",
                  border: "6px solid transparent",
                  cursor: "pointer",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "30px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "20px 20px 0 #8A2BE2, 40px 40px 0 #4B0082";
                  e.currentTarget.style.borderColor = "#6A0DAD";
                  e.currentTarget.style.transform = "translate(-40px, -40px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translate(0, 0)";
                }}
              >
                <div
                  className="container-project"
                  style={{
                    width: "50%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                    backgroundImage: `url(${project.image})`,
                  }}
                ></div>

                <div
                  className="project-info"
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "50%",
                  }}
                >
                  <div
                    className="project-title"
                    style={{
                      fontSize: "2.5em",
                      margin: "0",
                      fontWeight: "bold",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      color: "#4B0082",
                    }}
                  >
                    {project.title}
                  </div>

                  <div className="types" style={{ display: "flex", gap: "15px" }}>
                    {project.types.map((type, idx) => (
                      <span
                        key={idx}
                        className="project-type"
                        style={{
                          background: "rgba(165, 96, 247, 0.3)",
                          color: "#4B0082",
                          fontWeight: "bold",
                          padding: "0.6em 1.2em",
                          borderRadius: "20px",
                          fontSize: "16px",
                        }}
                      >
                        • {type}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
