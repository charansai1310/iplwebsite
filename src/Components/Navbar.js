import React from "react";
import { Link } from "react-router-dom";
import LinkComponent from "./LinkComponent";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <logo>IPL 360</logo>
        <p>Experience the Thrill of IPL in 360</p>
        <div className="navbar-links">
          <Link to="/matches">
            <LinkComponent linkName="Matches" />
          </Link>
          <Link to="/pointstable">
            <LinkComponent linkName="Points Table" />
          </Link>
          <Link to="/teams">
            <LinkComponent linkName="Teams" />
          </Link>
          {/* <Link to="/">
            <LinkComponent linkName="Players" />
          </Link> */}
          <Link to="/stats">
            <LinkComponent linkName="Stats" />
          </Link>
          <Link to="/news">
            <LinkComponent linkName="News" />
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
