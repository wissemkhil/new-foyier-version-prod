import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: '-64px',
        background: 'linear-gradient(135deg, #0a0e1a 0%, #1a237e 50%, #0a0e1a 100%)',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #e8eaf6, #5c6bc0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              mb: 1,
            }}
          >
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            sx={{ color: '#fff', fontWeight: 600, mb: 2 }}
          >
            Page introuvable
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.6)', mb: 4, lineHeight: 1.7 }}
          >
            La page que vous cherchez n'existe pas ou a été déplacée.
          </Typography>
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
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
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Retour à l'accueil
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
