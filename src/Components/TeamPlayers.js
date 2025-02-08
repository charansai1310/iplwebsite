import React from "react";
import { useParams } from "react-router-dom";
import "../styles/TeamPlayers.css";
import PlayersTile from "./PlayersTile";
import { Box, Typography, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const TeamHeader = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || theme.palette.primary.main,
  padding: theme.spacing(4),
  color: "#000",
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(3),
}));

const TeamLogo = styled('img')({
  width: '150px',
  height: 'auto',
  marginRight: '20px',
});

const TeamInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
});

const TeamDetails = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const DetailItem = styled(Box)(({ theme }) => ({
  '& h4': {
    color: 'rgba(0, 0, 0, 0.8)',
    marginBottom: theme.spacing(1),
  },
  '& p': {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#000',
  },
}));

const PlayersGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: theme.spacing(6),
  padding: theme.spacing(3),
  '& > *': {
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

const teamColors = {
  "Chennai Super Kings": "#FFFF00", // Yellow
  "Mumbai Indians": "#004BA0", // Blue
  "Royal Challengers Bangalore": "#FF0000", // Red
  "Kolkata Knight Riders": "#552583", // Purple
  "Delhi Capitals": "#0078BC", // Blue
  "Punjab Kings": "#ED1B24", // Red
  "Rajasthan Royals": "#FF69B4", // Pink
  "Sunrisers Hyderabad": "#FF822A", // Orange
  "Gujarat Titans": "#1B2133", // Navy Blue
  "Lucknow Super Giants": "#A7D5EF", // Light Blue
};

const TeamPlayers = () => {
  const { teamName } = useParams();
  const players = [
    {
      name: "MS DHONI",
      role: "Wicket Keeper",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png",
      role_image:
        "https://www.iplt20.com/assets/images/teams-wicket-keeper-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
    {
      name: "Virat Kohli",
      role: "Batsman",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png",
      role_image: "https://www.iplt20.com/assets/images/teams-batsman-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
    {
      name: "Ravindra Jadeja",
      role: "All-rounder",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/46.png",
      role_image:
        "https://www.iplt20.com/assets/images/teams-all-rounder-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
    {
      name: "Rohit Sharma",
      role: "Batsman",
      foreign_player: false,
      player_image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/6.png",
      role_image: "https://www.iplt20.com/assets/images/teams-batsman-icon.svg",
      foreign_player_image:
        "https://www.iplt20.com/assets/images/teams-foreign-player-icon.svg",
    },
  ];

  const teamDetails = {
    owner: "Chennai Super Kings Cricket Ltd.",
    coach: "Stephen Fleming",
    venue: "M. A. Chidambaram Stadium",
    officialSite: "https://www.chennaisuperkings.com",
    logo: "https://documents.iplt20.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    color: teamColors[teamName] || "#1A237E", // Use mapped color or default to dark blue
  };
  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
      <TeamHeader bgcolor={teamDetails.color}>
        <TeamInfo>
          <TeamLogo src={teamDetails.logo} alt={`${teamName} logo`} />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {teamName}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => window.open(teamDetails.officialSite, "_blank", "noopener,noreferrer")}
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Official Team Site
            </Button>
          </Box>
        </TeamInfo>

        <TeamDetails>
          <DetailItem>
            <Typography variant="h6" component="h4">Owner</Typography>
            <Typography>{teamDetails.owner}</Typography>
          </DetailItem>
          <DetailItem>
            <Typography variant="h6" component="h4">Coach</Typography>
            <Typography>{teamDetails.coach}</Typography>
          </DetailItem>
          <DetailItem>
            <Typography variant="h6" component="h4">Venue</Typography>
            <Typography>{teamDetails.venue}</Typography>
          </DetailItem>
        </TeamDetails>
      </TeamHeader>

      <Typography variant="h5" gutterBottom sx={{ ml: 2, color: '#000' }}>
        Squad
      </Typography>
      
      <PlayersGrid>
        {players.map((player, index) => (
          <PlayersTile 
            key={index} 
            player={player} 
            teamColor={teamColors[teamName]}
          />
        ))}
      </PlayersGrid>
    </Box>
  );
};

export default TeamPlayers;
