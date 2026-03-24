import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'light',
    primary: {
      main: '#1A237E',
      light: '#3949AB',
      dark: '#0D1642',
    },
    secondary: {
      main: '#FF6F00',
      light: '#FFA040',
      dark: '#C43E00',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#4A4A6A',
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
          boxShadow: '0 4px 14px rgba(26, 35, 126, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(26, 35, 126, 0.4)',
            transform: 'translateY(-1px)',
          },
        },
        containedSecondary: {
          boxShadow: '0 4px 14px rgba(255, 111, 0, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(255, 111, 0, 0.4)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
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

export default lightTheme;
