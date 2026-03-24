import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  List, ListItem, ListItemIcon, ListItemText, Button, Chip, useTheme,
} from '@mui/material';
import { Check, Star } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const plans = ['triple', 'double', 'individual'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const PricingSection = () => {
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
            {t('pricing.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, fontWeight: 400, maxWidth: 500, mx: 'auto' }}
          >
            {t('pricing.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan) => {
              const isPopular = plan === 'double';
              const features = t(`pricing.${plan}.features`, { returnObjects: true });
              
              return (
                <Grid item xs={12} sm={6} md={4} key={plan}>
                  <motion.div variants={cardVariants}>
                    <Card
                      sx={{
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        border: isPopular
                          ? `2px solid ${theme.palette.secondary.main}`
                          : '1px solid transparent',
                        transform: { xs: 'none', md: isPopular ? 'scale(1.05)' : 'none' },
                        zIndex: isPopular ? 1 : 0,
                        overflow: 'visible',
                      }}
                    >
                      {isPopular && (
                        <Chip
                          icon={<Star sx={{ fontSize: 16 }} />}
                          label={t('pricing.double.popular')}
                          color="secondary"
                          sx={{
                            position: 'absolute',
                            top: -16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            fontWeight: 700,
                            px: 1,
                          }}
                        />
                      )}
                      <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="h5"
                          align="center"
                          sx={{ fontWeight: 600, mb: 3 }}
                        >
                          {t(`pricing.${plan}.name`)}
                        </Typography>

                        <Box sx={{ textAlign: 'center', mb: 3 }}>
                          <Typography
                            component="span"
                            sx={{
                              fontSize: '3rem',
                              fontWeight: 700,
                              fontFamily: "'Playfair Display', serif",
                              color: theme.palette.primary.main,
                            }}
                          >
                            {t(`pricing.${plan}.price`)}
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              fontSize: '1rem',
                              color: 'text.secondary',
                              ml: 0.5,
                            }}
                          >
                            {t('pricing.currency')} {t(`pricing.${plan}.period`)}
                          </Typography>
                        </Box>

                        <List sx={{ flex: 1 }}>
                          {Array.isArray(features) && features.map((feature, index) => (
                            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                              <ListItemIcon sx={{ minWidth: 32 }}>
                                <Check
                                  sx={{
                                    fontSize: 20,
                                    color: isPopular
                                      ? theme.palette.secondary.main
                                      : theme.palette.primary.main,
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={feature}
                                primaryTypographyProps={{
                                  variant: 'body2',
                                  color: 'text.secondary',
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>

                        <Button
                          variant={isPopular ? 'contained' : 'outlined'}
                          color={isPopular ? 'secondary' : 'primary'}
                          fullWidth
                          size="large"
                          component={Link}
                          to={`/contact?plan=${plan}`}
                          sx={{ mt: 3 }}
                        >
                          {t('pricing.cta')}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;
