import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
});

export default theme; 