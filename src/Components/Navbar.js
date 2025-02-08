import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">IPL</Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/matches" onClick={() => setIsOpen(false)}>
          Matches
        </Link>
        <Link to="/pointstable" onClick={() => setIsOpen(false)}>
          Points Table
        </Link>
        <Link to="/teams" onClick={() => setIsOpen(false)}>
          Teams
        </Link>
        {/* <Link to="/">
          <LinkComponent linkName="Players" />
        </Link> */}
        <Link to="/stats" onClick={() => setIsOpen(false)}>
          Stats
        </Link>
        <Link to="/news" onClick={() => setIsOpen(false)}>
          News
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
