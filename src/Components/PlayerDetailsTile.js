import React from "react";
import "./PlayerDetailsTile.css";

const PlayerDetailsTile = ({ player }) => {
  return (
    <div className="container">
      <div className="playerstile" style={{ cursor: "pointer" }}>
        {player.foreign_player && (
          <div
            className="foreign-image"
            style={{ position: "absolute", top: "0", left: "0" }}
          >
            <img
              src={player.foreign_player_image}
              alt="flight_image"
              style={{ width: "25px", height: "25px", borderRadius: "50%" }}
            />
          </div>
        )}
        <div
          className="role-image"
          style={{ position: "absolute", top: "0", right: "0" }}
        >
          <img
            src={player.role_image}
            alt="role_image"
            style={{ width: "25px", height: "25px", borderRadius: "50%" }}
          />
        </div>
        <div className="player-image">
          <img src={player.player_image} alt="player_image" />
        </div>
        <div className="player-details">
          <h3>{player.name}</h3>
          <p>{player.role}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailsTile;
