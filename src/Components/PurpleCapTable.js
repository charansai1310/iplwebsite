import React from "react";
import "./OrangeCapTable.css";

const PurpleCapTable = () => {
  const data = [
    {
      pos: 1,
      player: "Harshal Patel",
      team: "PBKS",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 2,
      player: "Varun Chakravarthy",
      team: "KKR",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 3,
      player: "Jasprit Bumrah",
      team: "MI",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 4,
      player: "T Natarajan",
      team: "SRH",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 5,
      player: "Harshit Rana",
      team: "KKR",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 6,
      player: "Avesh Khan",
      team: "RR",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 7,
      player: "Arshdeep Singh",
      team: "PBKS",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 8,
      player: "Andre Russell",
      team: "KKR",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 9,
      player: "Pat Cummins",
      team: "SRH",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
    {
      pos: 10,
      player: "Yuzvendra Chahal",
      team: "RR",
      wkts: 24,
      matches: 14,
      inns: 14,
      ov: 49.0,
      runs: 477,
      avg: 19.87,
      eco: 9.73,
      fourw: 1,
      fivew: 5,
    },
  ];
  return (
    <div className="orangeCap">
      <table className="orange-cap">
        <thead>
          <tr>
            <th>POS</th>
            <th>PLAYER</th>
            <th>WKTS</th>
            <th>MAT</th>
            <th>INNS</th>
            <th>OV</th>
            <th>RUNS</th>
            <th>AVG</th>
            <th>ECO</th>
            <th>4W</th>
            <th>5W</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.Id}>
              <td>{row.pos}</td>
              <td>{row.player}</td>
              {/* <td>{row.team}</td> */}
              <td>{row.wkts}</td>
              <td>{row.matches}</td>
              <td>{row.inns}</td>
              <td>{row.ov}</td>
              <td>{row.runs}</td>
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

export default PurpleCapTable;
