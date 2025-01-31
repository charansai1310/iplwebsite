import React from "react";
import { useParams } from "react-router-dom";
import "./TeamPlayers.css";
import PlayersTile from "./PlayersTile";

const TeamPlayers = () => {
  const { teamName } = useParams();
  const players = [
    {
      name: "MS DHONI",
      role: "Wicket Keeper",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png",
      role_image:
        "https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
    {
      name: "Virat Kohli",
      role: "Batsman",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png",
      role_image: "https://www.iplt20.com/assets/images/teams-batsman-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
    {
      name: "Ravindra Jadeja",
      role: "All-rounder",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png",
      role_image:
        "https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
    {
      name: "Rohit Sharma",
      role: "Batsman",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png",
      role_image: "https://www.iplt20.com/assets/images/teams-batsman-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
  ];

  const teamDetails = {
    owner: "Chennai Super Kings Cricket Ltd.",
    coach: "Stephen Fleming",
    venue: "M. A. Chidambaram Stadium",
    officialSite: "https://www.chennaisuperkings.com",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    color: "yellow",
  };
  return (
    <div className="teamplayers">
      <div
        className="team-details"
        style={{ backgroundColor: teamDetails.color }}
      >
        <div className="group2">
          <img src={teamDetails.logo} alt={`${teamName} logo`} />
          <div className="group1">
            <h2>{teamName}</h2>
            <div
              style={{
                width: "200px",
                backgroundColor: "red",
                textAlign: "center",
                borderRadius: "10px",
              }}
              onClick={() =>
                window.open(
                  teamDetails.officialSite,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <h3>Official Team Site</h3>
            </div>
          </div>
        </div>
        <div className="group3">
          <div className="group5" style={{ width: "350px", textAlign: "left" }}>
            <h4>Owner - </h4>
            <p> {teamDetails.owner}</p>
          </div>
          <div className="group5" style={{ width: "350px", textAlign: "left" }}>
            <h4>Coach - </h4>
            <p>{teamDetails.coach}</p>
          </div>
          <div className="group5" style={{ width: "350px", textAlign: "left" }}>
            <h4>Venue - </h4>
            <p>{teamDetails.venue}</p>
          </div>
        </div>
      </div>
      <div className="squad">
        {players.map((player, index) => (
          <PlayersTile key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default TeamPlayers;
