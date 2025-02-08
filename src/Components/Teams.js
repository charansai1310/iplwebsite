import React from "react";
import { Link } from "react-router-dom";
import "../styles/Teams.css";

const Teams = () => {
  const teams = [
    {
      id: 1,
      name: "Chennai Super Kings",
      logo: "csk-logo.png",
      color: "#FFFF00", // Yellow
    },
    {
      id: 2,
      name: "Mumbai Indians",
      logo: "mi-logo.png",
      color: "#004BA0", // Blue
    },
    {
      id: 3,
      name: "Royal Challengers Bangalore",
      logo: "rcb-logo.png",
      color: "#FF0000", // Red
    },
    {
      id: 4,
      name: "Kolkata Knight Riders",
      logo: "kkr-logo.png",
      color: "#552583", // Purple
    },
    {
      id: 5,
      name: "Delhi Capitals",
      logo: "dc-logo.png",
      color: "#FF0000", // Red
    },
    {
      id: 6,
      name: "Punjab Kings",
      logo: "pbks-logo.png",
      color: "#FF69B4", // Pink
    },
    {
      id: 7,
      name: "Rajasthan Royals",
      logo: "rr-logo.png",
      color: "#0000FF", // Blue
    },
    {
      id: 8,
      name: "Sunrisers Hyderabad",
      logo: "srh-logo.png",
      color: "#FFA500", // Orange
    },
    {
      id: 9,
      name: "Gujarat Titans",
      logo: "gt-logo.png",
      color: "#8A2BE2", // Violet
    },
    {
      id: 10,
      name: "Lucknow Super Giants",
      logo: "lsg-logo.png",
      color: "#808080", // Grey
    },
  ];

  return (
    <div className="teams-container">
      <div className="teams-grid">
        {teams.map((team) => (
          <Link
            to={`/team/players/${team.name}`}
            key={team.id}
            className="team-card"
            style={{
              backgroundColor: team.color,
              color: ["#FFFF00", "#FFA500"].includes(team.color)
                ? "#000"
                : "#fff", // Dark text for light backgrounds
            }}
          >
            <img src={team.logo} alt={team.name} />
            <h2>{team.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Teams;
