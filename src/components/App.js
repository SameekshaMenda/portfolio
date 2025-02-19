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
import Media from "./media";
import CustomNavbar from "./CustomNavbar";
import Projects from "./Project2";
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
      <Home />
      <Education />   
      <SkillSection />
      <Projects />
      <Contact />
      <Media/>
      
    </div>
  );
};

export default App;
