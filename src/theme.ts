import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565D8',
    },
    secondary: {
      main: '#00DAF7',
    },
    success: {
      main: '#08AD36',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          fontWeight: 600,
          border: '1px solid',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Inter', sans-serif",
    },
  },
});

export default theme;
