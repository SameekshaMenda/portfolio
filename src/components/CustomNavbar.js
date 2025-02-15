import React from "react";
import { Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <div
      style={{
        background: "linear-gradient(120deg, #4B0082, #800080)",
        padding: "10px 20px",
      }}
    >
      <Container>
        <Nav variant="underline" defaultActiveKey="/home" className="ms-auto" style={navContainerStyle}>
          <Nav.Item>
            <Nav.Link href="#home" style={navLinkStyle}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#education" style={navLinkStyle}>
              Education
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#skills" style={navLinkStyle}>
              Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#projects" style={navLinkStyle}>
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" style={navLinkStyle}>
              Contact Me
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

// Common styling for navbar links
const navContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const navLinkStyle = {
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  textDecoration: "none",
  transition: "color 0.3s ease-in-out",
};

export default CustomNavbar;
