import React from "react";
import "./CirculatTeamLogo.css";
const CircularTeamLogo = ({ imageLink }) => {
  return (
    <div className="circularteamlogo">
      <img src={imageLink} alt="Team Logo"></img>
    </div>
  );
};

export default CircularTeamLogo;
