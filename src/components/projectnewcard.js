import React from "react";

const Projects = () => {
  return (
    <div style={styles.projectsSection}>
      <h2 style={styles.sectionTitle}>My Projects</h2>
      <div style={styles.projectsContainer}>
        {/* Project 1 */}
        <div style={styles.projectCard}>
          <div
            style={{ ...styles.projectImage, backgroundImage: "url('/icons/vscode.png')" }}
          ></div>
          <div style={styles.projectContent}>
            <h3>Project One</h3>
            <p>
              This is a brief description of what this project is all about. It's interactive,
              engaging, and built using modern web technologies.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div style={styles.projectCard}>
          <div
            style={{ ...styles.projectImage, backgroundImage: "url('/icons/vscode.png')" }}
          ></div>
          <div style={styles.projectContent}>
            <h3>Project Two</h3>
            <p>
              This project is focused on creating a responsive web application using React.js and
              other essential frontend technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  projectsSection: {
    textAlign: "center",
    padding: "50px 0",
    background: "#ffffff",
  },
  sectionTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#4B0082",
    marginBottom: "40px",
  },
  projectsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  projectCard: {
    width: "400px",
    height: "500px",
    background: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  projectImage: {
    width: "100%",
    height: "65%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  projectContent: {
    width: "100%",
    height: "35%",
    background: "#4B0082",
    color: "white",
    padding: "20px",
    position: "absolute",
    bottom: "0",
    left: "0",
    borderTopLeftRadius: "100px",
    borderTopRightRadius: "100px",
  },
};

export default Projects;
