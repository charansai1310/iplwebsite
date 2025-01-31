import React from "react";
import "./OrangeCapTable.css";

const OrangeCapTable = () => {
  const data = [
    {
      pos: 1,
      player: "Virat Kohli",
      team: "RCB",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 2,
      player: "Ruturaj Gaikwad",
      team: "CSK",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 3,
      player: "Riyan Parag",
      team: "RR",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 4,
      player: "Travis Head",
      team: "SRH",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 5,
      player: "Sanju Samson",
      team: "RR",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 6,
      player: "Sai Sudharsan",
      team: "GT",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 7,
      player: "K L Rahul",
      team: "LSG",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 8,
      player: "Nicholas Pooran",
      team: "LSG",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 9,
      player: "Sunil Narine",
      team: "KKR",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
    {
      pos: 10,
      player: "Abhishek Sharma",
      team: "SRH",
      runs: 741,
      matches: 15,
      inns: 15,
      no: 8,
      hs: "113*",
      avg: 61.75,
      sr: 154.69,
      hund: 1,
      fif: 5,
    },
  ];
  return (
    <div className="orangeCap">
      <table className="orange-cap">
        <thead>
          <tr>
            <th>POS</th>
            <th>PLAYER</th>
            <th>RUNS</th>
            <th>MAT</th>
            <th>INNS</th>
            <th>NO</th>
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
              <td>{row.pos}</td>
              <td>{row.player}</td>
              {/* <td>{row.team}</td> */}
              <td>{row.runs}</td>
              <td>{row.matches}</td>
              <td>{row.inns}</td>
              <td>{row.no}</td>
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

export default OrangeCapTable;
