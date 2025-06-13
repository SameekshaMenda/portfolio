import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Media = () => {
  const styles = {
    section: {
      position: "relative",
      background: "linear-gradient(120deg, #4B0082, #800080)",
      padding: "120px 30px", // Increased padding for a bigger look
      textAlign: "center",
      color: "white",
    },
    container: {
      position: "relative",
      zIndex: 2,
      maxWidth: "900px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "30px", // Increased spacing between icons
      fontSize: "3rem", // Increased icon size slightly
      marginTop: "30px",
    },
    iconLink: {
      color: "white",
      transition: "color 0.3s ease, transform 0.3s ease",
      textDecoration: "none",
    },
    button: {
      backgroundColor: "#F3E8FF",
      border: "none",
      color: "#800080",
      padding: "14px 35px", // Increased button size
      marginTop: "40px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1.3rem",
      transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s",
    },
  };

  return (
    <section id="connect" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Feel free to connect on social media.</h2>
        <div style={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/sameeksha-menda-9a863426a/"
            style={styles.iconLink}
            onMouseEnter={(e) => {
              e.target.style.color = "#F3E8FF";
              e.target.style.transform = "scale(1.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/SameekshaMenda"
            style={styles.iconLink}
            onMouseEnter={(e) => {
              e.target.style.color = "#F3E8FF";
              e.target.style.transform = "scale(1.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/sameekshamenda/"
            style={styles.iconLink}
            onMouseEnter={(e) => {
              e.target.style.color = "#F3E8FF";
              e.target.style.transform = "scale(1.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
            }}
          >
            <FaInstagram />
          </a>
        </div>
        {/* <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#800080";
            e.target.style.color = "white";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#F3E8FF";
            e.target.style.color = "#800080";
            e.target.style.transform = "scale(1)";
          }}
        >
          Let's Talk
        </button> */}
      </div>
    </section>
  );
};

export default Media;
