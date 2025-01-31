import React from "react";
import { useLocation } from "react-router-dom";
import BattingStats from "./BattingStats";
import BowlingStats from "./BowlingStats";
import PlayerDetailsTile from "./PlayerDetailsTile";
const PlayerDetails = () => {
  const location = useLocation();
  const { player } = location.state;
  return (
    <div className="stats">
      <PlayerDetailsTile player={player} />
      <h2 style={{ margin: "50px 220px auto" }}>BATTING</h2>
      <BattingStats />
      <h2 style={{ margin: "50px 220px auto" }}>BOWLING</h2>
      <BowlingStats />
    </div>
  );
};

export default PlayerDetails;
