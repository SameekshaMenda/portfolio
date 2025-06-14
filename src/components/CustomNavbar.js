import React, { useState, useRef, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Close on Escape key press
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Floating Menu Button */}
      <div style={menuButtonStyle} onClick={() => setMenuOpen(true)}>
        <FaBars size="clamp(24px, 3vw, 28px)" color="white" />
      </div>
     
      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div style={overlayStyle} ref={menuRef}>
          <FaTimes 
            size="clamp(28px, 4vw, 32px)" 
            color="white" 
            style={closeButtonStyle} 
            onClick={() => setMenuOpen(false)} 
          />
          <Nav className="flex-column text-center">
            {["Home", "Education", "Skills", "Projects", "Contact Me"].map((item, index) => (
              <Nav.Link
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                style={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </div>
      )}
    </>
  );
};

// Styles
const menuButtonStyle = {
  position: "fixed",
  top: "clamp(10px, 2vw, 20px)",
  left: "clamp(10px, 2vw, 20px)",
  zIndex: 1050,
  cursor: "pointer",
  background: "rgba(75, 0, 130, 0.8)",
  padding: "clamp(10px, 1.5vw, 12px)",
  borderRadius: "50%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(75, 0, 130, 0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  transition: "opacity 0.3s ease-in-out",
};

const closeButtonStyle = {
  position: "absolute",
  top: "clamp(15px, 3vw, 20px)",
  right: "clamp(15px, 3vw, 20px)",
  cursor: "pointer",
};

const navLinkStyle = {
  color: "white",
  fontSize: "clamp(1.5rem, 5vw, 2rem)",
  fontWeight: "bold",
  textDecoration: "none",
  margin: "clamp(10px, 2vw, 15px) 0",
  transition: "color 0.3s",
  padding: "clamp(5px, 1vw, 10px)",
};

export default CustomNavbar;