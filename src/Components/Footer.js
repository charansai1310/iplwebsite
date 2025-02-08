import React from "react";
import { Box, Container, Typography, Stack, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  YouTube 
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const StyledFooter = styled(Box)(({ theme, variant }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: variant === "small" ? theme.spacing(2, 0) : theme.spacing(4, 0),
  marginTop: "auto", // Push footer to bottom
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "white",
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <StyledFooter variant={isHomePage ? "large" : "small"}>
      <Container maxWidth="lg">
        <Stack spacing={isHomePage ? 3 : 1}>
          {isHomePage ? (
            // Full footer for home page
            <>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="h6">
                  IPL 2024
                </Typography>
                <Stack direction="row" spacing={1}>
                  <SocialButton aria-label="facebook">
                    <Facebook />
                  </SocialButton>
                  <SocialButton aria-label="twitter">
                    <Twitter />
                  </SocialButton>
                  <SocialButton aria-label="instagram">
                    <Instagram />
                  </SocialButton>
                  <SocialButton aria-label="youtube">
                    <YouTube />
                  </SocialButton>
                </Stack>
              </Stack>
              
              <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            </>
          ) : null}
          
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              opacity: 0.7,
              fontSize: isHomePage ? undefined : '0.8rem'
            }}
          >
            © {new Date().getFullYear()} Indian Premier League. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 