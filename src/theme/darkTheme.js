import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
    primary: {
      main: '#5C6BC0',
      light: '#8E99E8',
      dark: '#3949AB',
    },
    secondary: {
      main: '#FFB300',
      light: '#FFD54F',
      dark: '#FF8F00',
    },
    background: {
      default: '#0A0E1A',
      paper: '#141829',
    },
    text: {
      primary: '#E8E8F0',
      secondary: '#A0A0C0',
    },
  },
  typography: {
    fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 500,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
        },
        containedPrimary: {
          boxShadow: '0 4px 14px rgba(92, 107, 192, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(92, 107, 192, 0.4)',
            transform: 'translateY(-1px)',
          },
        },
        containedSecondary: {
          boxShadow: '0 4px 14px rgba(255, 179, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(255, 179, 0, 0.4)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(92, 107, 192, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'background-color 0.3s ease, color 0.3s ease',
        },
      },
    },
  },
});

export default darkTheme;
