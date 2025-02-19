import React, { useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie Player
import animationData from "../developer.json";  // Replace with your animation file path
import '../css/App.css';
import AOS from 'aos';
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css'; // Import AOS styles
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Education = () => {
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
          paddingTop: "160px",
          fontFamily: "'Poppins', sans-serif", // Increased space to ensure title visibility
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
            className="text-6xl font-bold text-transparent bg-clip-text mb-40"
            style={{
              backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
              animation: 'glitter 1.5s infinite linear',
              marginBottom: "70px", // Added spacing below the heading
            }}
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            Education
          </p>


          {/* Tagline */}
          {/* <p
            className="text-lg mb-10"
            style={{
              fontFamily: "'Pacifico', cursive", // A more elegant and playful font
              fontSize: "2rem", // Slightly larger for emphasis
              color: "#800080", // A deeper purple for contrast
              textAlign: "center", // Center-aligned for better balance
              marginTop: "20px", // Added space above the tagline
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            }}
          >
            "Empowering the future through continuous learning and innovation."
          </p> */}

          {/* Divider */}
          {/* <div
            style={{
              width: "100px",
              height: "4px",
              background: "linear-gradient(90deg, #4B0082, #800080)",
              margin: "40px auto",
              borderRadius: "2px",
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          ></div> */}

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
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <i className="fas fa-graduation-cap" style={{ fontSize: "2rem", color: "#800080", marginRight: "10px" }}></i>
                  <h5 className="edu-institute" style={{ color: "#4B0082", fontSize: "1.75rem", fontWeight: "bold" }}>
                    Sahyadri College of Engineering and Management
                  </h5>
                </div>
                <p className="edu-duration" style={{ color: "#800080", fontSize: "1.25rem", fontWeight: "500" }}>
                  2022 - Present
                </p>
                <p className="edu-description" style={{ color: "#4B0082", fontSize: "1.1rem" }}>
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
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <i className="fas fa-book" style={{ fontSize: "2rem", color: "#800080", marginRight: "10px" }}></i>
                  <h5 className="edu-institute" style={{ color: "#4B0082", fontSize: "1.75rem", fontWeight: "bold" }}>
                    St. Agnes P.U College, Mangaluru
                  </h5>
                </div>
                <p className="edu-duration" style={{ color: "#800080", fontSize: "1.25rem", fontWeight: "500" }}>
                  2020 - 2022
                </p>
                <p className="edu-description" style={{ color: "#4B0082", fontSize: "1.1rem" }}>
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
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <i className="fas fa-school" style={{ fontSize: "2rem", color: "#800080", marginRight: "10px" }}></i>
                  <h5 className="edu-institute" style={{ color: "#4B0082", fontSize: "1.75rem", fontWeight: "bold" }}>
                    Sri Ramakrishna School, Mangaluru
                  </h5>
                </div>
                <p className="edu-duration" style={{ color: "#800080", fontSize: "1.25rem", fontWeight: "500" }}>
                  2011 - 2020
                </p>
                <p className="edu-description" style={{ color: "#4B0082", fontSize: "1.1rem" }}>
                  Studied here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;