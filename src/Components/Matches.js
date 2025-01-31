import React, { useState } from "react";
import Dropdown from "./Dropdown";
import MatchDetails from "./MatchDetails";
const Matches = () => {
  const [selectedYear, setSelectedYear] = useState(2010);
  const options = ["Season 2010", "Season 2009", "Season 2008"];
  const handleSeasonSelection = (options) => {
    const year = options.split(" ")[1];
    setSelectedYear(year);
  };
  const matches = [
    {
      date_time: "May, Sun 26, 7:30PM IST",
      venue: "MA Chidambaram Stadium, Chennai",
      matchno: "FINAL",
      team1: "Kolkata Knight Riders",
      team1_score: "114/2",
      team1_overs: "10.3",
      team2: "Sunrisers Hyderabad",
      team1_logo: "https://scores.iplt20.com/ipl/teamlogos/KKR.png?v=2",
      team2_logo: "https://scores.iplt20.com/ipl/teamlogos/SRH.png?v=2",
      team2_score: "113",
      team2_overs: "18.3",
      winner: "Kolkata Knight Riders Won By 8 Wickets",
    },
    {
      date_time: "May, Sun 26, 7:30PM IST",
      venue: "MA Chidambaram Stadium, Chennai",
      matchno: "FINAL",
      team1: "Kolkata Knight Riders",
      team1_score: "114/2",
      team1_overs: "10.3",
      team2: "Sunrisers Hyderabad",
      team1_logo: "https://scores.iplt20.com/ipl/teamlogos/KKR.png?v=2",
      team2_logo: "https://scores.iplt20.com/ipl/teamlogos/SRH.png?v=2",
      team2_score: "113",
      team2_overs: "18.3",
      winner: "Kolkata Knight Riders Won By 8 Wickets",
    },
    {
      date_time: "May, Sun 26, 7:30PM IST",
      venue: "MA Chidambaram Stadium, Chennai",
      matchno: "FINAL",
      team1: "Kolkata Knight Riders",
      team1_score: "114/2",
      team1_overs: "10.3",
      team2: "Sunrisers Hyderabad",
      team1_logo: "https://scores.iplt20.com/ipl/teamlogos/KKR.png?v=2",
      team2_logo: "https://scores.iplt20.com/ipl/teamlogos/SRH.png?v=2",
      team2_score: "113",
      team2_overs: "18.3",
      winner: "Kolkata Knight Riders Won By 8 Wickets",
    },
  ];
  return (
    <div>
      <div className="dropdown-pointstable-div">
        <Dropdown
          options={options}
          onSelect={handleSeasonSelection}
          initialState={"Season 2024"}
        />
      </div>
      {matches.map((match, index) => (
        <MatchDetails key={index} match={match} /> 
      ))}
    </div>
  );
};

export default Matches;
