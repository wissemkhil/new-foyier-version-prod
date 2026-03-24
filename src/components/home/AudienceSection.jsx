import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, useTheme } from '@mui/material';
import { School, Computer, RocketLaunch } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const audiences = [
  { key: 'students', icon: School, emoji: '🎓' },
  { key: 'techup', icon: Computer, emoji: '💻' },
  { key: 'startup', icon: RocketLaunch, emoji: '🚀' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const AudienceSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.mode === 'dark'
          ? 'rgba(20, 24, 41, 0.5)'
          : 'rgba(26, 35, 126, 0.03)',
      }}
    >
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
            {t('audience.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, fontWeight: 400 }}
          >
            {t('audience.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Grid container spacing={4} justifyContent="center">
            {audiences.map(({ key, icon: Icon, emoji }) => (
              <Grid item xs={12} sm={6} md={4} key={key}>
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 2,
                      background: theme.palette.mode === 'dark'
                        ? `linear-gradient(145deg, ${theme.palette.background.paper}, rgba(92, 107, 192, 0.08))`
                        : `linear-gradient(145deg, #fff, rgba(26, 35, 126, 0.04))`,
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography sx={{ fontSize: '3rem', mb: 2 }}>
                        {emoji}
                      </Typography>
                      <Icon
                        sx={{
                          fontSize: 40,
                          color: theme.palette.primary.main,
                          mb: 2,
                        }}
                      />
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                        {t(`audience.${key}.title`)}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.7 }}
                      >
                        {t(`audience.${key}.description`)}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      >
                        {t(`audience.${key}.cta`)}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AudienceSection;
