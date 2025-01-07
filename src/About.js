import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

const About = () => {
  return (
    <div className="about-section" style={{ background: "#F3E8FF", padding: "80px 0" }}>
      <div className="container text-center">
        <h2 className="display-4 font-weight-bold mb-4" style={{ color: "#4B0082" }}>
          About Me
        </h2>
        <p className="lead mb-5" style={{ color: "#4B0082" }}>
          I am a passionate Frontend Developer with expertise in building scalable and
          engaging web applications using modern web technologies.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            style={{ color: "#4B0082" }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            style={{ color: "#4B0082" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-3"
            style={{ color: "#4B0082" }}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
