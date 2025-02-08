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
import { Container, Box } from "@mui/material";
import { styled, ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer";
import MatchCenter from "./Components/MatchCenter.js";
// Styled components using Material UI
const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: 1200,
  margin: "0 auto",
  padding: theme.spacing(0, 2),
  overflowX: "hidden",
  "& .teams-grid": {
    // Target the teams grid specifically
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    margin: "0 auto",
    maxWidth: "100%",
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 1),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 0.5),
    "& .teams-grid": {
      gridTemplateColumns: "1fr",
    },
  },
}));

const AppWrapper = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper>
          <Navbar />
          <StyledContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/match-center/:year/:matchId" element={<MatchCenter />} />
              <Route path="/pointstable" element={<PointsTable />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/team/players/:teamName" element={<TeamPlayers />} />
              <Route path="/player-details" element={<PlayerDetails />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/news" element={<News />} />
              <Route
                path="/match-center/:year/:matchId"
                element={<MatchCenter />}
              />
            </Routes>
          </StyledContainer>
          <Footer />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
