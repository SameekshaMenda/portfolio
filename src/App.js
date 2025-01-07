import React, { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaReact, FaBootstrap, FaPython, FaGit, FaJava, FaFigma, FaTwitter,FaInstagram,FaEnvelope,FaLinkedin,FaGithub } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./developer.json"; // Lottie animation file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillSection from "./SkillsSection"; // Adjust the path if necessary
import Contact from "./Contact";
const App = () => {
  useEffect(() => {
    // Initialize AOS on page load
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Smooth easing
      once: false, // Keeps the animation triggered every time the section is viewed
      offset: 200, // Trigger animation earlier
    });

    // Reset AOS animations on route change (for repeated effects)
    AOS.refresh();

    return () => {
      // Clean up AOS on unmount
      AOS.refresh();
    };
  }, []);

  return (
    <div className="App" style={{ backgroundColor: "#F3E8FF", color: "#4B0082" }}>
      {/* Hero Section */}
      <header
        className="d-flex align-items-center justify-content-between px-5"
        id="home"
        style={{
          height: "100vh",
          background: "linear-gradient(120deg, #4B0082, #800080)",
          color: "white",
          position: "relative",
        }}
      >
        <div className="text-container">
          <h1 className="display-4 font-weight-bold mb-3 animate-float">
            Hi, I'm <span style={{ color: "#fff09b"}}>Sameeksha Menda</span>
          </h1>
          <p className="lead mb-4 animate-bounce">
            Frontend Developer | Creative Thinker | Tech Enthusiast
          </p>
          <div>
            <a
              href="https://github.com/SameekshaMenda"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mx-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mx-2"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="animation-container">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </header>

      {/* Curvy Bottom for Home Section */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "150px",
          position: "relative",
          top: "-1px",
        }}
      >
        <path
          fill="#4B0082"
          d="M0,0 C600,150 800,50 1440,120 L1440,0 Z"
        />
      </svg>

      {/* Education Section */}
      <section
        id="education"
        className="py-16 text-left"
        style={{
          backgroundColor: "#F3E8FF", // Pink background
          position: "relative",
          paddingTop: "160px", // Increased space to ensure title visibility
        }}
      >
        {/* Curvy Top for Education Section */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "150px",
            position: "absolute",
            top: "-1px",
            left: 0,
          }}
        >
          <path
            fill="#F3E8FF"
            d="M0,150 C600,100 900,200 1440,50 L1440,0 Z"
          />
        </svg>

        <div className="container">
          {/* Title with animation */}
          <p
                    className="text-3xl font-bold mb-5 skills-title"
                    data-aos="slide-in"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-out"
                    style={{ fontSize: "5rem",
                       //fontFamily: "'Lobster', cursive" 
                     }} // Adjust size as needed
                >
                    Education
                </p>
                <br></br>


          {/* Timeline with Simple Line and Content */}
          <div className="timeline">
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1500"
              data-aos-offset="200"
            >
              <div className="timeline-content">
                <h5 className="edu-institute">Sahyadri College of Engineering and Management</h5>
                <p className="edu-duration">2022 - Present</p>
                <p className="edu-description">
                  Currently pursuing 3rd Year of My Undergraduate degree in CSE - Data Science.
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1500"
              data-aos-offset="200"
            >
              <div className="timeline-content">
                <h5 className="edu-institute">St. Agnes P.U College, Mangaluru</h5>
                <p className="edu-duration">2020 - 2022</p>
                <p className="edu-description">
                  Majored in Science related to Biology.
                </p>
              </div>
            </div>
            <div
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1500"
              data-aos-offset="200"
            >
              <div className="timeline-content">
                <h5 className="edu-institute">Sri Ramakrishna School, Mangaluru</h5>
                <p className="edu-duration">2011 - 2020</p>
                <p className="edu-description">
                  Studied here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        style={{
          backgroundColor: "#F3E8FF", // Match the background color with the Education section
          position: "relative",
          paddingTop: "80px", // Added more padding to make it visually longer
          paddingBottom: "80px", // Added bottom padding to create space below
        }}
      >
        <div className="container">
          {/* Title with animation */}
          <p
            className="text-3xl font-bold mb-5 skills-title"
            data-aos="slide-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            style={{ fontSize: "5rem" }}
          >
            My Skills
          </p>

          {/* Skill Icons */}
          <SkillSection />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          backgroundColor: "#F3E8FF", // Match the background color with the Education section
          position: "relative",
          paddingTop: "80px", // Added more padding to make it visually longer
          paddingBottom: "80px", // Added bottom padding to create space below
          marginBottom: "100px", // Margin for extra space below
        }}
      >
        <div className="container">
          <p
            className="text-3xl font-bold mb-5 skills-title"
            data-aos="slide-in"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            style={{ fontSize: "5rem" }}
          >
            Contact
          </p>

          {/* Contact Form */}
          <Contact />
        </div>
      </section>
      {/* New Section */}
      <section
  id="connect"
  style={{
    position: "relative",
    backgroundColor: "#F3E8FF", // Matches the SVG blank part
    padding: "100px 20px", // Padding for content
    textAlign: "center",
    overflow: "hidden",
  }}
>
  {/* Content Above the Curve */}
  <div
    style={{
      position: "relative",
      zIndex: 2, // Content stays above SVG
      color: "#6a11cb", // Text color for contrast
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
        style={{ color: "#6a11cb", textDecoration: "none" }}
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com"
        style={{ color: "#6a11cb", textDecoration: "none" }}
      >
        <FaGithub />
      </a>
      <a
        href="https://instagram.com"
        style={{ color: "#6a11cb", textDecoration: "none" }}
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com"
        style={{ color: "#6a11cb", textDecoration: "none" }}
      >
        <FaTwitter />
      </a>
    </div>
    <button
      style={{
        backgroundColor: "#6a11cb",
        border: "none",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        marginTop: "20px",
        cursor: "pointer",
      }}
    >
      Let's Talk
    </button>
  </div>

  {/* Reversed SVG Curve */}
  <img
    src="https://hrithikshetty.vercel.app/footer-curve.svg"
    alt="Curvy Footer"
    style={{
      position: "absolute",
      bottom: 0, // Places curve at the bottom
      left: 0,
      width: "100%",
      height: "auto",
      zIndex: 1,
      transform: "rotate(0deg)", // No rotation required since the curve naturally opens upward
    }}
  />
</section>


    </div>
  );
};

export default App;
