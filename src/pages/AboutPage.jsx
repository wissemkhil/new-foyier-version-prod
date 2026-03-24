import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroBuilding from '../assets/images/hero-building.png';
import StorySection from '../components/about/StorySection';
import GallerySection from '../components/about/GallerySection';

const AboutPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      {/* Page Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          mt: '-64px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroBuilding})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: { xs: 'scroll', md: 'fixed' },
            filter: 'brightness(0.3)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              180deg,
              rgba(10, 14, 26, 0.2) 0%,
              rgba(26, 35, 126, 0.5) 50%,
              rgba(10, 14, 26, 0.9) 100%
            )`,
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              {t('about.page_title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 300,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              {t('about.page_subtitle')}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <StorySection />
      <GallerySection />
    </>
  );
};

export default AboutPage;
