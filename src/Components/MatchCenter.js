import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MatchCenter.css";

const MatchCenter = ({year, matchId}) => {
  const navigate = useNavigate();

  // This should be replaced with your actual matches data structure
  const matchesData = {
    team1: {
      name: "Chennai Super Kings",
      shortName: "CSK",
      batting: [
        {
          name: "Ruturaj Gaikwad",
          status: "not out",
          runs: 92,
          balls: 50,
          fours: 8,
          sixes: 4,
          strikeRate: 184.0,
        },
        {
          name: "Rachin Ravindra",
          status: "out",
          runs: 37,
          balls: 15,
          fours: 3,
          sixes: 2,
          strikeRate: 246.67,
        },
        {
          name: "Ajinkya Rahane",
          status: "not out",
          runs: 25,
          balls: 12,
          fours: 2,
          sixes: 1,
          strikeRate: 208.33,
        },
      ],
      bowling: [
        {
          name: "Deepak Chahar",
          overs: 4,
          maidens: 0,
          runs: 35,
          wickets: 2,
          economy: 8.75,
        },
        {
          name: "Tushar Deshpande",
          overs: 4,
          maidens: 0,
          runs: 42,
          wickets: 1,
          economy: 10.5,
        },
        {
          name: "Ravindra Jadeja",
          overs: 4,
          maidens: 0,
          runs: 28,
          wickets: 2,
          economy: 7.0,
        },
      ],
    },
    team2: {
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      batting: [
        {
          name: "Virat Kohli",
          status: "out",
          runs: 45,
          balls: 25,
          fours: 4,
          sixes: 3,
          strikeRate: 180.0,
        },
        {
          name: "Faf du Plessis",
          status: "out",
          runs: 32,
          balls: 18,
          fours: 3,
          sixes: 2,
          strikeRate: 177.78,
        },
        {
          name: "Glenn Maxwell",
          status: "not out",
          runs: 55,
          balls: 35,
          fours: 5,
          sixes: 2,
          strikeRate: 157.14,
        },
      ],
      bowling: [
        {
          name: "Mohammed Siraj",
          overs: 4,
          maidens: 0,
          runs: 45,
          wickets: 1,
          economy: 11.25,
        },
        {
          name: "Alzarri Joseph",
          overs: 3,
          maidens: 0,
          runs: 35,
          wickets: 0,
          economy: 11.67,
        },
        {
          name: "Cameron Green",
          overs: 4,
          maidens: 0,
          runs: 28,
          wickets: 1,
          economy: 7.0,
        },
      ],
    },
  };
  
//   const currentMatch = matchesData[year]?.find((match) => match.id === matchId);

//   if (!currentMatch) {
//     return (
//       <div className="match-center">
//         <div className="match-header">
//           <button className="back-button" onClick={() => navigate(-1)}>
//             &#8592; Back
//           </button>
//           <h1>Match not found</h1>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="match-center">
      <div className="match-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &#8592; Back
        </button>
        <h1>CSK vs KKR</h1>
      </div>

      <div className="match-details">
        <div className="team-section">
          <h2>{matchesData.team1.name} Batting</h2>
          <div className="table-container">
            <table className="match-table">
              <thead>
                <tr>
                  <th>Batter</th>
                  <th></th>
                  <th>R</th>
                  <th>B</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>SR</th>
                </tr>
              </thead>
              <tbody>
                {matchesData.team1.batting.map((player, index) => (
                  <tr key={index}>
                    <td>{player.name}</td>
                    <td className="status">{player.status}</td>
                    <td>{player.runs}</td>
                    <td>{player.balls}</td>
                    <td>{player.fours}</td>
                    <td>{player.sixes}</td>
                    <td>{player.strikeRate.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="team-section">
          <h2>{matchesData.team2.name} Bowling</h2>
          <div className="table-container">
            <table className="match-table">
              <thead>
                <tr>
                  <th>Bowler</th>
                  <th>O</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>ECON</th>
                </tr>
              </thead>
              <tbody>
                {matchesData.team2.bowling.map((bowler, index) => (
                  <tr key={index}>
                    <td>{bowler.name}</td>
                    <td>{bowler.overs}</td>
                    <td>{bowler.maidens}</td>
                    <td>{bowler.runs}</td>
                    <td>{bowler.wickets}</td>
                    <td>{bowler.economy.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="team-section">
          <h2>{matchesData.team2.name} Batting</h2>
          <div className="table-container">
            <table className="match-table">
              <thead>
                <tr>
                  <th>Batter</th>
                  <th></th>
                  <th>R</th>
                  <th>B</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>SR</th>
                </tr>
              </thead>
              <tbody>
                {matchesData.team2.batting.map((player, index) => (
                  <tr key={index}>
                    <td>{player.name}</td>
                    <td className="status">{player.status}</td>
                    <td>{player.runs}</td>
                    <td>{player.balls}</td>
                    <td>{player.fours}</td>
                    <td>{player.sixes}</td>
                    <td>{player.strikeRate.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="team-section">
          <h2>{matchesData.team1.name} Bowling</h2>
          <div className="table-container">
            <table className="match-table">
              <thead>
                <tr>
                  <th>Bowler</th>
                  <th>O</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>ECON</th>
                </tr>
              </thead>
              <tbody>
                {matchesData.team1.bowling.map((bowler, index) => (
                  <tr key={index}>
                    <td>{bowler.name}</td>
                    <td>{bowler.overs}</td>
                    <td>{bowler.maidens}</td>
                    <td>{bowler.runs}</td>
                    <td>{bowler.wickets}</td>
                    <td>{bowler.economy.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCenter;
