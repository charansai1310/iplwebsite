import React from "react";
import "./PointsTableDiv.css";
import CircularTeamLogo from "./CircularTeamLogo";
const PointsTableDiv = () => {
  const data = [
    {
      Id: "1",
      Team: "Chennai Super Kings",
      Played: "14",
      Won: "10",
      Lost: "4",
      NR: "0",
      NRR: "3.44",
      Points: "20",
      Logo: "https://scores.iplt20.com/ipl/teamlogos/CSK.png?v=2",
    },
    {
      Id: "2",
      Team: "Lucknow Super Giants",
      Played: "14",
      Won: "9",
      Lost: "5",
      NR: "0",
      NRR: "3.14",
      Points: "18",
      Logo: "https://scores.iplt20.com/ipl/teamlogos/LSG.png?v=2",
    },
    {
      Id: "3",
      Team: "Mumbai Indians",
      Played: "14",
      Won: "8",
      Lost: "6",
      NR: "0",
      NRR: "1.45",
      Points: "16",
      Logo: "https://scores.iplt20.com/ipl/teamlogos/MI.png?v=2",
    },
  ];
  return (
    <div className="pointstablediv">
      <table className="pointstable">
        <thead>
          <tr>
            <th>Pos</th>
            <th className="team-column">Team</th>
            <th>Played</th>
            <th>Won</th>
            <th>Lost</th>
            <th>NR</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.Id}>
              <td>{index + 1}</td>
              <td className="team-column">
                <div className="team-info">
                  <CircularTeamLogo imageLink={row.Logo} />
                  <span>{row.Team}</span>
                </div>
              </td>
              <td>{row.Played}</td>
              <td>{row.Won}</td>
              <td>{row.Lost}</td>
              <td>{row.NR}</td>
              <td>{row.NRR}</td>
              <td>{row.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PointsTableDiv;
