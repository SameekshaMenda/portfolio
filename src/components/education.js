import React, { useEffect } from 'react';
import AOS from 'aos';
import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
      offset: 200,
    });
    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="App" style={{ 
      backgroundColor: "#F3E8FF", 
      color: "#4B0082",
      fontFamily: "'Poppins', sans-serif"
    }}>
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
          backgroundColor: "#F3E8FF",
          position: "relative",
          paddingTop: "160px",
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

        <div className="container px-3">
          <div className="row">
            <div className="col-12">
              <h1
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{
                  backgroundImage: 'linear-gradient(120deg, #4B0082, #800080)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  wordSpacing: '4px',
                  letterSpacing: "1px",
                  lineHeight: "1.2",
                }}
              >
                My Education
              </h1>
              <h2
                className="text-lg mb-10"
                style={{
                  fontSize: "1.5rem",
                  color: "#4B0082",
                  fontWeight: "500"
                }}
              >
                Academic Journey
              </h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="row">
            <div className="col-12">
              <div style={{
                position: "relative",
                paddingLeft: "30px"
              }}>
                {/* Timeline line */}
                <div style={{
                  position: "absolute",
                  left: "15px",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: "linear-gradient(to bottom, #4B0082, #800080)"
                }}></div>
                
                {/* Timeline Item 1 */}
                <div
                  className="mb-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{
                    position: "relative",
                    paddingLeft: "20px"
                  }}
                >
                  <div style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "1.5rem",
                    position: "relative"
                  }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: "absolute",
                      left: "-28px",
                      top: "24px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#4B0082",
                      border: "2px solid #800080"
                    }}></div>
                    
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                      <i className="fas fa-graduation-cap" style={{
                        fontSize: "1.5rem",
                        color: "#800080",
                        marginRight: "10px"
                      }}></i>
                      <h3 style={{
                        color: "#4B0082",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        margin: 0
                      }}>
                        Sahyadri College of Engineering and Management
                      </h3>
                    </div>
                    <p style={{
                      color: "#800080",
                      fontSize: "1rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem"
                    }}>
                      2022 - Present
                    </p>
                    <p style={{
                      color: "#4B0082",
                      fontSize: "0.9rem",
                      margin: 0
                    }}>
                      Currently pursuing 3rd Year of My Undergraduate degree in CSE - Data Science.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Item 2 */}
                <div
                  className="mb-5"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  style={{
                    position: "relative",
                    paddingLeft: "20px"
                  }}
                >
                  <div style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "1.5rem",
                    position: "relative"
                  }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: "absolute",
                      left: "-28px",
                      top: "24px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#4B0082",
                      border: "2px solid #800080"
                    }}></div>
                    
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                      <i className="fas fa-book" style={{
                        fontSize: "1.5rem",
                        color: "#800080",
                        marginRight: "10px"
                      }}></i>
                      <h3 style={{
                        color: "#4B0082",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        margin: 0
                      }}>
                        St. Agnes P.U College, Mangaluru
                      </h3>
                    </div>
                    <p style={{
                      color: "#800080",
                      fontSize: "1rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem"
                    }}>
                      2020 - 2022
                    </p>
                    <p style={{
                      color: "#4B0082",
                      fontSize: "0.9rem",
                      margin: 0
                    }}>
                      Completed Pre-University education with a focus on Science (PCMB).
                    </p>
                  </div>
                </div>
                
                {/* Timeline Item 3 */}
                <div
                  className="mb-5"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  style={{
                    position: "relative",
                    paddingLeft: "20px"
                  }}
                >
                  <div style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "1.5rem",
                    position: "relative"
                  }}>
                    {/* Timeline dot */}
                    <div style={{
                      position: "absolute",
                      left: "-28px",
                      top: "24px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#4B0082",
                      border: "2px solid #800080"
                    }}></div>
                    
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                      <i className="fas fa-school" style={{
                        fontSize: "1.5rem",
                        color: "#800080",
                        marginRight: "10px"
                      }}></i>
                      <h3 style={{
                        color: "#4B0082",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        margin: 0
                      }}>
                        Sri Ramakrishna School, Mangaluru
                      </h3>
                    </div>
                    <p style={{
                      color: "#800080",
                      fontSize: "1rem",
                      fontWeight: "500",
                      marginBottom: "0.5rem"
                    }}>
                      2011 - 2020
                    </p>
                    <p style={{
                      color: "#4B0082",
                      fontSize: "0.9rem",
                      margin: 0
                    }}>
                      Completed my schooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;