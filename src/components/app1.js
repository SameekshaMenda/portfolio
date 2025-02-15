import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaBootstrap, FaPython, FaGit, FaJava, FaFigma, FaTwitter, FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../developer.json"; // Lottie animation file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillSection from "./SkillsSection"; // Adjust the path if necessary
import Contact from "./Contact";
import Education from "./education"; // Import education.js file
import Home from "./Home";
import CustomNavbar from "./CustomNavbar";
import Projects from "./Projects";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// <!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for scroll animations
  }, []);

  return (
    <div>
       <CustomNavbar />

      {/* Home Section */}
      <Home />


        {/* Education Section */}
        <section id="education">
        <Education />
      </section>

      {/* Skills Section */}
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
              backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              animation: 'glitter 1.5s infinite linear',
            }}
            data-aos="slide-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            My Skills
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

          {/* Skill Icons */}
          <SkillSection />
        </div>
      </section>

     {/* Skills Section */}
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
              backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              animation: 'glitter 1.5s infinite linear',
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

          {/* Skill Icons */}
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-purple-100 relative py-20 mb-24">
        <div className="container mx-auto px-6">
          <div className="text-left mb-10">
            <p
              className="text-7xl font-bold text-transparent bg-clip-text mb-4"
              style={{
                backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
                animation: 'glitter 1.5s infinite linear',
              }}
              data-aos="slide-in"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-out"
            >
              Contact
            </p>

            <p
              className="text-lg text-purple-600 italic mb-10"
              style={{ fontFamily: "Lobster, cursive", fontSize: "1.5rem" }}
            >
              Let's chat and make things happen!
            </p>
          </div>

          <div className="flex justify-center">
            <Contact />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
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
              padding: "10px 20px",
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
    </div>
  );
};

export default App;
