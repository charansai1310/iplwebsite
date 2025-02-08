import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const StyledCard = styled(Card)(({ theme, teamcolor }) => ({
  position: 'relative',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  maxWidth: '200px',
  margin: '0 auto',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: teamcolor ? `${teamcolor}20` : 'white',
  '&:hover': {
    transform: 'translateY(-4px)',
    backgroundColor: teamcolor ? `${teamcolor}40` : 'white',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
}));

const PlayerImage = styled('img')({
  width: '100%',
  height: '180px',
  objectFit: 'contain',
  marginBottom: '0.5rem',
});

const IconImage = styled('img')({
  width: '22px',
  height: '22px',
  borderRadius: '50%',
  position: 'absolute',
});

const PlayersTile = ({ player, teamColor }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/player-details", { state: { player } });
  };

  return (
    <StyledCard onClick={handleClick} teamcolor={teamColor}>
      {player.foreign_player && (
        <IconImage
          src={player.foreign_player_image}
          alt="foreign player"
          sx={{ top: 8, left: 8 }}
        />
      )}
      <IconImage
        src={player.role_image}
        alt="role"
        sx={{ top: 8, right: 8 }}
      />
      <PlayerImage src={player.player_image} alt={player.name} />
      <Box sx={{ mt: 'auto' }}>
        <Typography 
          variant="subtitle1"
          gutterBottom 
          sx={{ 
            color: '#000',
            fontSize: '0.9rem',
            fontWeight: 600 
          }}
        >
          {player.name}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.secondary',
            fontSize: '0.8rem'
          }}
        >
          {player.role}
        </Typography>
      </Box>
    </StyledCard>
  );
};

PlayersTile.propTypes = {
  player: PropTypes.object.isRequired,
  teamColor: PropTypes.string,
};

export default PlayersTile;
