import React from "react";
import "../styles/TeamTile.css";
import FlatTeamLogo from "./FlatTeamLogo";

const TeamTile = ({ onClick, imageLink, teamName, color1 }) => {
  return (
    <div
      className="team-tile"
      onClick={onClick}
      style={{ backgroundColor: color1 }}
    >
      <FlatTeamLogo imageLink={imageLink} />
      <h3 style={{ textAlign: "center" }}>{teamName}</h3>
    </div>
  );
};

export default TeamTile;
