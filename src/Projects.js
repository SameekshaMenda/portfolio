import React from "react";
import "./App.css";

const Projects = () => {
  return (
    <div className="projects-section" style={{ background: "#FFFFFF", padding: "80px 0" }}>
      <div className="container text-center">
        <h2 className="display-4 font-weight-bold mb-5" style={{ color: "#4B0082" }}>
          My Projects
        </h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="project-card bg-light shadow-lg p-3">
              <h3 className="font-weight-bold mb-3">Project One</h3>
              <p>
                This is a brief description of what this project is all about. It's interactive,
                engaging, and built using modern web technologies.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="project-card bg-light shadow-lg p-3">
              <h3 className="font-weight-bold mb-3">Project Two</h3>
              <p>
                This project is focused on creating a responsive web application using React.js and
                other essential frontend technologies.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="project-card bg-light shadow-lg p-3">
              <h3 className="font-weight-bold mb-3">Project Three</h3>
              <p>
                An innovative project showcasing my skills in frontend development and design.
                It's user-friendly and visually appealing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
