import React from "react";
import "./BattingStats.css";

const BattingStats = () => {
  const data = [
    {
      year: "Career",
      matches: 66,
      no: 8,
      runs: 2380,
      hs: "108*",
      avg: 41.75,
      sr: 136.86,
      hund: 2,
      fif: 18,
    },
    {
      year: "2024",
      matches: 66,
      no: 8,
      runs: 2380,
      hs: "108*",
      avg: 41.75,
      sr: 136.86,
      hund: 2,
      fif: 18,
    },
    {
      year: "2023",
      matches: 66,
      no: 8,
      runs: 2380,
      hs: "108*",
      avg: 41.75,
      sr: 136.86,
      hund: 2,
      fif: 18,
    },
    {
      year: "2022",
      matches: 66,
      no: 8,
      runs: 2380,
      hs: "108*",
      avg: 41.75,
      sr: 136.86,
      hund: 2,
      fif: 18,
    },
    {
      year: "2021",
      matches: 66,
      no: 8,
      runs: 2380,
      hs: "108*",
      avg: 41.75,
      sr: 136.86,
      hund: 2,
      fif: 18,
    },
    {
      year: "2020",
      matches: 66,
      no: 8,
      runs: 2380,
      hs: "108*",
      avg: 41.75,
      sr: 136.86,
      hund: 2,
      fif: 18,
    },
  ];
  return (
    <div className="battingStats">
      <table className="batting-stats">
        <thead>
          <tr>
            <th>Year</th>
            <th>MAT</th>
            <th>NO</th>
            <th>RUNS</th>
            <th>HS</th>
            <th>AVG</th>
            <th>SR</th>
            <th>100</th>
            <th>50</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.Id}>
              <td>{row.year}</td>
              <td>{row.matches}</td>
              <td>{row.no}</td>
              <td>{row.runs}</td>
              <td>{row.hs}</td>
              <td>{row.avg}</td>
              <td>{row.sr}</td>
              <td>{row.hund}</td>
              <td>{row.fif}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BattingStats;
