import React from "react";
import "./MatchDetails.css";
import CircularTeamLogo from "./CircularTeamLogo";

const MatchDetails = ({ match }) => {
  return (
    <div className="match-details-container">
      {/* Match Type */}
      <div className="item match-type">
        <span>{match.matchno}</span>
      </div>

      {/* Venue and Date */}
      <div className="item venue-date">
        <span>
          {match.venue}
          <br />
          {match.date_time}
        </span>
      </div>

      {/* Empty section */}
      <div className="item empty"></div>

      {/* Winner */}
      <div className="item winner">
        <span>{match.winner}</span>
      </div>

      {/* Teams and Scores */}
      <div className="item teams-scores">
        <div className="team-info">
          <CircularTeamLogo imageLink={match.team1_logo} />
          {match.team1}
          <br />
          {match.team1_score}
          <br />({match.team1_overs})
        </div>

        <img
          src="https://scores.iplt20.com/ipl/mc/images/versus.png"
          alt="vs"
          className="vs-image"
        />

        <div className="team-info">
          <CircularTeamLogo imageLink={match.team2_logo} />
          {match.team2}
          <br />
          {match.team2_score}
          <br />({match.team2_overs})
        </div>
      </div>

      {/* Match Center Button */}
      <div className="item match-center">
        <button>Match Center</button>
      </div>
    </div>
  );
};

export default MatchDetails;
