import React from "react";
import PropTypes from "prop-types";
import "../styles/TeamLogo.css";

const TeamLogo = ({ imageLink, variant = "circular" }) => {
  return (
    <div className={`team-logo ${variant}`}>
      <img src={imageLink} alt="Team Logo" />
    </div>
  );
};

TeamLogo.propTypes = {
  imageLink: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["circular", "flat"])
};

export default TeamLogo; 