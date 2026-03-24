import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log to an error reporting service here
    // e.g., Sentry, LogRocket, etc.
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0a0e1a 0%, #1a237e 50%, #0a0e1a 100%)',
          }}
        >
          <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
            <ErrorOutlineIcon
              sx={{ fontSize: 80, color: 'rgba(255,255,255,0.3)', mb: 3 }}
            />
            <Typography
              variant="h4"
              sx={{ color: '#fff', fontWeight: 700, mb: 2 }}
            >
              Oops ! Une erreur est survenue
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, lineHeight: 1.7 }}
            >
              Nous sommes désolés, quelque chose s'est mal passé.
              Veuillez réessayer ou retourner à la page d'accueil.
            </Typography>
            <Button
              variant="contained"
              onClick={this.handleReset}
              sx={{
                background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                color: '#fff',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3949ab, #1a237e)',
                },
              }}
            >
              Retour à l'accueil
            </Button>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
