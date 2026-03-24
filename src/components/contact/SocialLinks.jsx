import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const socials = [
  {
    key: 'facebook',
    icon: Facebook,
    href: 'https://facebook.com',
    color: '#1877F2',
    hoverColor: '#166FE5',
  },
  {
    key: 'instagram',
    icon: Instagram,
    href: 'https://instagram.com',
    gradient: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
  },
  {
    key: 'whatsapp',
    icon: WhatsApp,
    href: 'https://wa.me/21671234567',
    color: '#25D366',
    hoverColor: '#20BD5A',
  },
];

const SocialLinks = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center', py: { xs: 6, md: 8 } }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: 1,
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {t('contact.social_title')}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 5, fontWeight: 400 }}>
          {t('contact.social_subtitle')}
        </Typography>
      </motion.div>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
        {socials.map(({ key, icon: Icon, href, color, hoverColor, gradient }, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <IconButton
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 72,
                  height: 72,
                  color: '#fff',
                  background: gradient || color,
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: gradient || hoverColor,
                    transform: 'scale(1.15)',
                    boxShadow: `0 8px 25px ${color || theme.palette.primary.main}40`,
                  },
                }}
              >
                <Icon sx={{ fontSize: 32 }} />
              </IconButton>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                {t(`contact.${key}`)}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default SocialLinks;
