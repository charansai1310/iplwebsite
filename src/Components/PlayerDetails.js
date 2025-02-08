import React from "react";
import { useLocation } from "react-router-dom";
import StatsTable from "./StatsTable";
import { Card, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
}));

const PlayerDetails = () => {
  const location = useLocation();
  const { player } = location.state;

  return (
    <Box sx={{ p: 2 }}>
      <StyledCard>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img 
              src={player.imageUrl} 
              alt={player.name} 
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>{player.name}</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2">Matches</Typography>
                <Typography variant="h6">{player.matches}</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2">Runs</Typography>
                <Typography variant="h6">{player.runs}</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2">Wickets</Typography>
                <Typography variant="h6">{player.wickets}</Typography>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle2">Highest Score</Typography>
                <Typography variant="h6">{player.highestScore}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledCard>

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>BATTING</Typography>
      <StatsTable type="batting" data={player.battingStats} />

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>BOWLING</Typography>
      <StatsTable type="bowling" data={player.bowlingStats} />
    </Box>
  );
};

export default PlayerDetails;
