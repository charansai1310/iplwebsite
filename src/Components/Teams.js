import React from "react";
import TeamTile from "./TeamTile";
import { useNavigate } from "react-router-dom";
import "./Teams.css";
const Teams = () => {
  const navigate = useNavigate();
  const teams = [
    {
      teamName: "Chennai Super Kings",
      logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
      color1: "yellow",
      color2: "black",
    },
    {
      teamName: "Delhi Capitals",
      logo: "https://documents.iplt20.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
      color1: "darkred",
      color2: "darkblue",
    },
    {
      teamName: "Gujarat Titans",
      logo: "https://documents.iplt20.com/ipl/GT/Logos/Logooutline/GToutline.png",
      color1: "skyblue",
      color2: "black",
    },
    {
      teamName: "Kolkata Knight Riders",
      logo: "https://documents.iplt20.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
      color1: "gold",
      color2: "purple",
    },
    {
      teamName: "Lucknow Super Giants",
      logo: "https://documents.iplt20.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
      color1: "white",
      color2: "blue",
    },
    {
      teamName: "Mumbai Indians",
      logo: "https://documents.iplt20.com/ipl/MI/Logos/Logooutline/MIoutline.png",
      color1: "skyblue",
      color2: "indigo",
    },
    {
      teamName: "Punjab Kings",
      logo: "https://documents.iplt20.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
      color1: "red",
      color2: "blue",
    },
    {
      teamName: "Rajasthan Royals",
      logo: "https://documents.iplt20.com/ipl/RR/Logos/Logooutline/RRoutline.png",
      color1: "pink",
      color2: "blue",
    },
    {
      teamName: "Royal Challengers Bengaluru",
      logo: "https://documents.iplt20.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
      color1: "green",
      color2: "darkred",
    },
    {
      teamName: "Sunrisers Hyderabad",
      logo: "https://documents.iplt20.com/ipl/SRH/Logos/Logooutline/SRHoutline.png",
      color1: "orange",
      color2: "red",
    },
  ];
  return (
    <div className="teams">
      {teams.map((team, index) => (
        <div className="teams" key={index}>
          <TeamTile
            onClick={() =>
              navigate(
                `/team/players/${team.teamName}`
              )
            }
            imageLink={team.logo}
            teamName={team.teamName}
            color1={team.color1}
          />
        </div>
      ))}
    </div>
  );
};

export default Teams;
