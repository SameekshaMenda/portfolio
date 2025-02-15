import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie Player
import animationData from "../developer.json";  // Replace with your animation file path
import '../css/App.css';
import AOS from 'aos';
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'; // Import AOS styles
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
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
    <div
      className="App"
      style={{
        backgroundColor: "#4B0082", // Match the gradient's starting color
        color: "#4B0082",
        margin: 0, // Reset margin
        padding: 0, // Reset padding
        minHeight: "100vh", // Ensure the App div covers the full viewport
      }}
    >
      {/* Hero Section */}
      <header
        className="d-flex align-items-center justify-content-between px-5"
        id="home"
        style={{
          height: "100vh", // Full viewport height
          background: "linear-gradient(120deg, #4B0082, #800080)",
          color: "white",
          paddingTop: "80px", // Add padding to account for the fixed navbar
          margin: 0, // Reset margin
        }}
      >
        <div className="text-container" data-aos="fade-right">
          <h1 className="display-4 font-weight-bold mb-3" style={{ margin: 0 }}>
            Hi, I'm <span style={{ color: "#fff09b" }}>Sameeksha Menda</span>
          </h1>
          <p className="lead mb-4" style={{ margin: 0 }}>
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
        <div className="animation-container" data-aos="fade-left">
          <Player
            autoplay
            loop
            src={animationData}
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </header>
    </div>
  );
};

export default Home;