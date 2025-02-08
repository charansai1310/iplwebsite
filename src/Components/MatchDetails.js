import React from "react";
import "../styles/MatchDetails.css";
import TeamLogo from "./TeamLogo";
import Button from "@mui/material/Button";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { useNavigate } from "react-router-dom";
const MatchDetails = ({ match }) => {
  const navigate = useNavigate();
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
          <TeamLogo imageLink={match.team1_logo} variant="circular" />
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
          <TeamLogo imageLink={match.team2_logo} variant="circular" />
          {match.team2}
          <br />
          {match.team2_score}
          <br />({match.team2_overs})
        </div>
      </div>

      {/* Match Center Button */}
      <div className="item match-center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<SportsCricketIcon />}
          sx={{
            backgroundColor: "#1a237e",
            "&:hover": {
              backgroundColor: "#0d47a1",
            },
            borderRadius: "20px",
            padding: "8px 24px",
            textTransform: "none",
            fontWeight: 500,
          }}
          onClick={() => navigate(`/match-center/${match.year}/${match.id}`)}
        >
          Match Center
        </Button>
      </div>
    </div>
  );
};

export default MatchDetails;
