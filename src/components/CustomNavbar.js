import React, { useState,useRef,useEffect } from "react";
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
        <FaBars size={28} color="white" />
      </div>
     
      {/* Full-Screen Overlay Menu */}
      {menuOpen && (
        <div style={overlayStyle}>
          <FaTimes size={32} color="white" style={closeButtonStyle} onClick={() => setMenuOpen(false)} />
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
  top: "10px",
  left: "10px",
  zIndex: 1050,
  cursor: "pointer",
  background: "rgba(75, 0, 130, 0.8)", // Purple-themed button
  padding: "12px",
  borderRadius: "50%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
};

const overlayStyle = {
  position: "fixed",
  inset: 0, // Covers the full screen properly
  background: "rgba(75, 0, 130, 0.5)", // Dark semi-transparent background
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  transition: "opacity 0.3s ease-in-out",
};

const closeButtonStyle = {
  position: "absolute",
  top: "20px",
  right: "20px",
  cursor: "pointer",
};

const navLinkStyle = {
  color: "white",
  fontSize: "2rem",
  fontWeight: "bold",
  textDecoration: "none",
  margin: "15px 0",
  transition: "color 0.3s",
};

export default CustomNavbar;
