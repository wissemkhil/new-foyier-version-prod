import React from 'react';
import {
  Box, Container, Typography, Grid, Button, Chip, useTheme,
} from '@mui/material';
import { People, ArrowForward } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import roomSingle from '../../assets/images/room-single.png';
import roomDouble from '../../assets/images/room-double.png';
import roomTriple from '../../assets/images/room-triple.png';

const rooms = [
  { key: 'individual', image: roomSingle, capacity: 1, surface: 12 },
  { key: 'double', image: roomDouble, capacity: 2, surface: 18 },
  { key: 'triple', image: roomTriple, capacity: 3, surface: 24 },
];

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

const RoomsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="rooms"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: isDark
          ? 'rgba(20, 24, 41, 0.5)'
          : 'rgba(26, 35, 126, 0.02)',
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
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('rooms.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: { xs: 5, md: 8 }, fontWeight: 400, maxWidth: 600, mx: 'auto' }}
          >
            {t('rooms.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {rooms.map((room, index) => (
              <Grid item xs={12} sm={6} md={4} key={room.key}>
                <motion.div variants={cardVariants}>
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 4,
                      overflow: 'hidden',
                      bgcolor: isDark ? 'rgba(20, 24, 41, 0.8)' : '#fff',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(26, 35, 126, 0.08)'}`,
                      boxShadow: isDark
                        ? '0 8px 32px rgba(0,0,0,0.3)'
                        : '0 8px 32px rgba(26, 35, 126, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: isDark
                          ? '0 20px 60px rgba(92, 107, 192, 0.2)'
                          : '0 20px 60px rgba(26, 35, 126, 0.15)',
                        border: `1px solid ${isDark ? 'rgba(92, 107, 192, 0.3)' : 'rgba(26, 35, 126, 0.2)'}`,
                        '& .room-image': {
                          transform: 'scale(1.08)',
                        },
                        '& .room-overlay': {
                          opacity: 1,
                        },
                        '& .room-cta': {
                          background: 'linear-gradient(135deg, #3949ab, #1a237e)',
                        },
                      },
                    }}
                    component={Link}
                    to={`/rooms/${room.key}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    {/* Image Container */}
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: { xs: 200, md: 240 } }}>
                      <Box
                        component="img"
                        src={room.image}
                        alt={t(`rooms.${room.key}.name`)}
                        className="room-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                      />

                      {/* Gradient Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '60%',
                          background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)',
                          pointerEvents: 'none',
                        }}
                      />

                      {/* Hover Overlay */}
                      <Box
                        className="room-overlay"
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.7), rgba(57, 73, 171, 0.5))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                        }}
                      >
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            color: '#fff',
                            borderRadius: 3,
                            px: 3,
                            py: 1,
                            fontWeight: 600,
                            textTransform: 'none',
                            border: '1px solid rgba(255,255,255,0.3)',
                            '&:hover': {
                              bgcolor: 'rgba(255,255,255,0.3)',
                            },
                          }}
                        >
                          {t('rooms.view_details')}
                        </Button>
                      </Box>

                      {/* Price Badge */}
                      <Chip
                        label={t(`rooms.${room.key}.price`)}
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                          color: '#fff',
                          backdropFilter: 'blur(10px)',
                          px: 0.5,
                          height: 32,
                          '& .MuiChip-label': { px: 1.5 },
                        }}
                      />

                      {/* Capacity Badge */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 12,
                          left: 16,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          color: '#fff',
                          fontSize: '0.85rem',
                        }}
                      >
                        <People sx={{ fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: '#fff', fontWeight: 500 }}>
                          {room.capacity} {room.capacity === 1 ? 'pers.' : 'pers.'}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            ml: 1,
                            fontSize: '0.8rem',
                          }}
                        >
                          {room.surface} m²
                        </Typography>
                      </Box>
                    </Box>

                    {/* Card Content */}
                    <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          fontSize: { xs: '1.15rem', md: '1.3rem' },
                          color: theme.palette.text.primary,
                        }}
                      >
                        {t(`rooms.${room.key}.name`)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.7,
                          mb: 2.5,
                          minHeight: { md: 48 },
                        }}
                      >
                        {t(`rooms.${room.key}.description`)}
                      </Typography>

                      {/* CTA Button */}
                      <Box
                        className="room-cta"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 1,
                          py: 1.2,
                          borderRadius: 2.5,
                          background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {t('rooms.view_details')}
                        <ArrowForward sx={{ fontSize: 18 }} />
                      </Box>
                    </Box>
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

export default RoomsSection;
