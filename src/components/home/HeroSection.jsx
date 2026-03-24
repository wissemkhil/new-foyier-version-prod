import React from 'react';
import { Box, Container, Typography, Button, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBuilding from '../../assets/images/hero-building.png';

const HeroSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const titleWords = t('hero.title').split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        mt: '-64px',
      }}
    >
      {/* Parallax Background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBuilding})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: { xs: 'scroll', md: 'fixed' },
          filter: 'brightness(0.35)',
          transform: 'scale(1.1)',
        }}
      />

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            180deg,
            rgba(10, 14, 26, 0.3) 0%,
            rgba(26, 35, 126, 0.4) 50%,
            rgba(10, 14, 26, 0.8) 100%
          )`,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Animated Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography
            variant="h1"
            sx={{
              color: '#fff',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.3em',
            }}
          >
            {titleWords.map((word, index) => (
              <motion.span key={index} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.85)',
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 650,
              mx: 'auto',
              mb: 5,
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.15rem' },
            }}
          >
            {t('hero.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component="a"
              href="#rooms"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                fontWeight: 600,
              }}
            >
              {t('hero.cta_rooms')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              to="/contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.05rem',
                fontWeight: 600,
                borderColor: 'rgba(255,255,255,0.5)',
                color: '#fff',
                '&:hover': {
                  borderColor: '#fff',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              {t('hero.cta_contact')}
            </Button>
          </Box>
        </motion.div>
      </Container>

      {/* Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        <IconButton
          component="a"
          href="#rooms"
          sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#fff' } }}
          aria-label={t('hero.scroll_down')}
        >
          <KeyboardArrowDown sx={{ fontSize: 40 }} />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
