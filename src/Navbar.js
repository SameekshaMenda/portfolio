// Navbar.js
import React from "react";
import { Link } from "react-scroll";  // Import Link from react-scroll

const Navbar = () => {
  return (
    <nav className="navbar bg-gray-900 text-white">
      <ul className="flex justify-center space-x-8 py-4">
        <li>
          <Link to="home" smooth={true} duration={500} className="text-lg hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="text-lg hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="text-lg hover:text-gray-300">Projects</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="text-lg hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
