import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        background: "linear-gradient(120deg, #4B0082, #800080)",
        padding: "10px 20px",
        position: "fixed", // Makes the navbar fixed at the top
        top: "0", // Aligns it at the top of the page
        width: "100%", // Makes it full-width
        zIndex: "1000", // Ensures it stays on top of other elements
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          MyPortfolio
        </Navbar.Brand>
        <Nav className="ms-auto" style={{ display: "flex", gap: "20px" }}>
          <Nav.Link href="#home" style={navLinkStyle}>
            Home
          </Nav.Link>
          <Nav.Link href="#education" style={navLinkStyle}>
            Education
          </Nav.Link>
          <Nav.Link href="#SkillsSection" style={navLinkStyle}>
            Skills
          </Nav.Link>
          <Nav.Link href="#Projects" style={navLinkStyle}>
            Projects
          </Nav.Link>
          <Nav.Link href="#Contact" style={navLinkStyle}>
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

// Common styling for navbar links
const navLinkStyle = {
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  transition: "color 0.3s ease-in-out",
};

export default CustomNavbar;
