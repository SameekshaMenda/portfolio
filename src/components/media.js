import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Media = () => {
  return (
    <section
      id="connect"
      style={{
        position: "relative",
        background: "linear-gradient(120deg, #4B0082, #800080)",
        padding: "100px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Feel free to connect on social media.
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            fontSize: "2rem",
          }}
        >
          <a
            href="https://linkedin.com"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F3E8FF")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F3E8FF")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#F3E8FF")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            <FaInstagram />
          </a>
        </div>
        <button
          style={{
            backgroundColor: "#F3E8FF",
            border: "none",
            color: "#800080",
            padding: "80px 20px 0", // Adjusted padding to remove extra space
            margin: "0", // Ensures no extra gap
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#800080";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#F3E8FF";
            e.target.style.color = "#4B0082";
          }}
        >
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default Media;
