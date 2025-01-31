import React from "react";
import "./BowlingStats.css";

const BowlingStats = () => {
  const data = [
    {
      year: "Career",
      matches: 66,
      balls: 0,
      runs: 0,
      wkts: 0,
      avg: "-",
      eco: "-",
      fourw: 0,
      fivew: 0,
    },
    {
      year: 2024,
      matches: 66,
      balls: 0,
      runs: 0,
      wkts: 0,
      avg: "-",
      eco: "-",
      fourw: 0,
      fivew: 0,
    },
    {
      year: 2023,
      matches: 66,
      balls: 0,
      runs: 0,
      wkts: 0,
      avg: "-",
      eco: "-",
      fourw: 0,
      fivew: 0,
    },
    {
      year: 2022,
      matches: 66,
      balls: 0,
      runs: 0,
      wkts: 0,
      avg: "-",
      eco: "-",
      fourw: 0,
      fivew: 0,
    },
    {
      year: 2021,
      matches: 66,
      balls: 0,
      runs: 0,
      wkts: 0,
      avg: "-",
      eco: "-",
      fourw: 0,
      fivew: 0,
    },
    {
      year: 2020,
      matches: 66,
      balls: 0,
      runs: 0,
      wkts: 0,
      avg: "-",
      eco: "-",
      fourw: 0,
      fivew: 0,
    },
  ];
  return (
    <div className="bowlingStats">
      <table className="bowling-stats">
        <thead>
          <tr>
            <th>Year</th>
            <th>MAT</th>
            <th>BALLS</th>
            <th>RUNS</th>
            <th>WKTS</th>
            <th>AVG</th>
            <th>ECO</th>
            <th>4W</th>
            <th>5W</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.Id}>
              <td>{row.year}</td>
              <td>{row.matches}</td>
              <td>{row.balls}</td>
              <td>{row.runs}</td>
              <td>{row.wkts}</td>
              <td>{row.avg}</td>
              <td>{row.eco}</td>
              <td>{row.fourw}</td>
              <td>{row.fivew}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BowlingStats;
