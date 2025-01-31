import React from "react";
import "./FlatTeamLogo.css";
const FlatTeamLogo = ({ imageLink }) => {
  return (
    <div className="flatteamlogo">
      <img src={imageLink} alt="Team Logo"></img>
    </div>
  );
};

export default FlatTeamLogo;
