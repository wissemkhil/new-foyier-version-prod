import React from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent, useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const timelineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = (isLeft) => ({
  hidden: { opacity: 0, x: isLeft ? -60 : 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
});

const StorySection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const milestones = t('about.story.milestones', { returnObjects: true });

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="md">
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
              mb: 6,
              fontSize: { xs: '2rem', md: '2.8rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('about.story.title')}
          </Typography>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Vertical line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                transform: { md: 'translateX(-50%)' },
                top: 0,
                bottom: 0,
                width: 3,
                background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: 2,
              }}
            />

            {Array.isArray(milestones) && milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div key={index} variants={itemVariants(isLeft)}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'row', md: isLeft ? 'row' : 'row-reverse' },
                      alignItems: 'flex-start',
                      mb: 4,
                      position: 'relative',
                      pl: { xs: 6, md: 0 },
                    }}
                  >
                    {/* Year dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: 10, md: '50%' },
                        transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        bgcolor: theme.palette.secondary.main,
                        border: `3px solid ${theme.palette.background.paper}`,
                        boxShadow: `0 0 0 3px ${theme.palette.secondary.main}40`,
                        zIndex: 1,
                      }}
                    />

                    {/* Content */}
                    <Box
                      sx={{
                        width: { xs: '100%', md: '45%' },
                        ml: { xs: 0, md: isLeft ? 0 : 'auto' },
                        mr: { xs: 0, md: isLeft ? 'auto' : 0 },
                        textAlign: { xs: 'left', md: isLeft ? 'right' : 'left' },
                        pr: { md: isLeft ? 4 : 0 },
                        pl: { md: isLeft ? 0 : 4 },
                      }}
                    >
                      <Card
                        sx={{
                          background: theme.palette.mode === 'dark'
                            ? `linear-gradient(145deg, ${theme.palette.background.paper}, rgba(92, 107, 192, 0.08))`
                            : `linear-gradient(145deg, #fff, rgba(26, 35, 126, 0.03))`,
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: 'inline-block',
                              px: 2,
                              py: 0.5,
                              borderRadius: 2,
                              bgcolor: `${theme.palette.primary.main}15`,
                              color: theme.palette.primary.main,
                              fontWeight: 700,
                              fontSize: '0.9rem',
                              mb: 1.5,
                            }}
                          >
                            {milestone.year}
                          </Box>
                          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                            {milestone.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                          >
                            {milestone.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>
        </motion.div>

        {/* Mission / Values / Vision */}
        <Box sx={{ mt: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Grid container spacing={3}>
              {['mission', 'values', 'vision'].map((item, index) => {
                const colors = [
                  { bg: 'rgba(26, 35, 126, 0.06)', accent: theme.palette.primary.main },
                  { bg: 'rgba(255, 111, 0, 0.06)', accent: theme.palette.secondary.main },
                  { bg: 'rgba(92, 107, 192, 0.06)', accent: '#5C6BC0' },
                ];
                return (
                  <Grid item xs={12} md={4} key={item}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          bgcolor: theme.palette.mode === 'dark'
                            ? theme.palette.background.paper
                            : colors[index].bg,
                          boxShadow: 'none',
                          border: `1px solid ${theme.palette.divider}`,
                        }}
                      >
                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              mb: 2,
                              color: colors[index].accent,
                            }}
                          >
                            {t(`about.${item}.title`)}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ lineHeight: 1.8 }}
                          >
                            {t(`about.${item}.description`)}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                );
              })}
            </Grid>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default StorySection;
