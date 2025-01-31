import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Matches from "./Components/Matches.js";
import Navbar from "./Components/Navbar.js";
import PointsTable from "./Components/PointsTable.js";
import Teams from "./Components/Teams.js";
import TeamPlayers from "./Components/TeamPlayers.js";
import News from "./Components/News.js";
import Stats from "./Components/Stats.js";
import PlayerDetails from "./Components/PlayerDetails.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/matches" element={<Matches />} />
          <Route path="/pointstable" element={<PointsTable />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/team/players/:teamName" element={<TeamPlayers />} />
          <Route path="/player-details" element={<PlayerDetails />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
