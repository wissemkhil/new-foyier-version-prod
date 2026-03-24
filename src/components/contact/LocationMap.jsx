import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LocationMap = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const contactItems = [
    { icon: Phone, label: t('contact.phone'), color: theme.palette.secondary.main },
    { icon: Email, label: t('contact.email'), color: theme.palette.primary.main },
    { icon: LocationOn, label: t('contact.address'), color: '#4CAF50' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0,0,0,0.4)'
            : '0 8px 32px rgba(0,0,0,0.08)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          {t('contact.info_title')}
        </Typography>

        {contactItems.map(({ icon: Icon, label, color }, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
              mb: 3,
              p: 2,
              borderRadius: 2,
              bgcolor: `${color}08`,
              border: `1px solid ${color}20`,
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: `${color}12`,
                transform: 'translateX(4px)',
              },
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: `${color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Icon sx={{ color, fontSize: 22 }} />
            </Box>
            <Typography
              variant="body1"
              sx={{ color: 'text.primary', lineHeight: 1.6, pt: 0.8 }}
            >
              {label}
            </Typography>
          </Box>
        ))}

        {/* Map Embed */}
        <Box
          sx={{
            flex: 1,
            minHeight: 250,
            borderRadius: 2,
            overflow: 'hidden',
            mt: 1,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <iframe
            title="Foyer Babel Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.17%2C36.885%2C10.21%2C36.91&layer=mapnik&marker=36.8965%2C10.1875"
            width="100%"
            height="100%"
            style={{ border: 'none', minHeight: 250 }}
            loading="lazy"
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default LocationMap;
