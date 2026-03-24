import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import {
  Wifi, LocalCafe, Security, FitnessCenter,
  Laptop, LocalLaundryService, LocalParking, AcUnit,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const amenitiesData = [
  { key: 'wifi', icon: Wifi },
  { key: 'cafe', icon: LocalCafe },
  { key: 'security', icon: Security },
  { key: 'gym', icon: FitnessCenter },
  { key: 'coworking', icon: Laptop },
  { key: 'laundry', icon: LocalLaundryService },
  { key: 'parking', icon: LocalParking },
  { key: 'ac', icon: AcUnit },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const AmenitiesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 1.5,
              fontSize: { xs: '2rem', md: '2.8rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('amenities.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, fontWeight: 400 }}
          >
            {t('amenities.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Grid container spacing={3} justifyContent="center">
            {amenitiesData.map(({ key, icon: Icon }) => (
              <Grid item xs={6} sm={4} md={3} key={key}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: 3,
                      bgcolor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 8px 30px ${
                          theme.palette.mode === 'dark'
                            ? 'rgba(92, 107, 192, 0.15)'
                            : 'rgba(26, 35, 126, 0.1)'
                        }`,
                        transform: 'translateY(-4px)',
                        '& .amenity-icon': {
                          color: theme.palette.secondary.main,
                          transform: 'scale(1.15)',
                        },
                      },
                    }}
                  >
                    <Icon
                      className="amenity-icon"
                      sx={{
                        fontSize: 48,
                        color: theme.palette.primary.main,
                        mb: 1.5,
                        transition: 'all 0.3s ease',
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: theme.palette.text.primary }}
                    >
                      {t(`amenities.${key}`)}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AmenitiesSection;
