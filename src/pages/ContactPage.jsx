import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import commonLounge from '../assets/images/common-lounge.png';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';
import SocialLinks from '../components/contact/SocialLinks';

const ContactPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      {/* Page Hero */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '45vh', md: '55vh' },
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
            backgroundImage: `url(${commonLounge})`,
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
              {t('contact.page_title')}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                fontWeight: 300,
                maxWidth: 500,
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              {t('contact.page_subtitle')}
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <LocationMap />
            </Grid>
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Social Links */}
      <Box
        sx={{
          bgcolor: theme.palette.mode === 'dark'
            ? 'rgba(20, 24, 41, 0.5)'
            : 'rgba(26, 35, 126, 0.02)',
        }}
      >
        <Container maxWidth="md">
          <SocialLinks />
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
