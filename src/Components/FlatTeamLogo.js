import React from "react";
import "../styles/FlatTeamLogo.css";
const FlatTeamLogo = ({ imageLink }) => {
  return (
    <div className="flatteamlogo">
      <img src={imageLink} alt="Team Logo"></img>
    </div>
  );
};

export default FlatTeamLogo;
