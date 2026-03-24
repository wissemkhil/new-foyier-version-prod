import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Box, Container, Typography, Grid, Button, Chip, IconButton,
  Paper, Dialog, useTheme,
} from '@mui/material';
import {
  ArrowBack, Close, ZoomIn,
  SingleBed, KingBed, Desk, Wifi, AcUnit, Checkroom,
  Shower, Bathtub, CleaningServices, Security, Kitchen,
  Weekend, Tv, Balcony, Landscape, People, SquareFoot,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import roomsData from '../data/roomsData';

// Map icon string names to MUI icon components
const iconMap = {
  SingleBed, KingBed, Desk, Wifi, AcUnit, Checkroom,
  Shower, Bathtub, CleaningServices, Security, Kitchen,
  Weekend, Tv, Balcony, Landscape,
};

const RoomDetailPage = () => {
  const { roomId } = useParams();
  const { t } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const room = roomsData[roomId];

  // If room not found redirect to 404
  if (!room) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '-64px',
          background: 'linear-gradient(135deg, #0a0e1a 0%, #1a237e 50%, #0a0e1a 100%)',
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ color: '#fff', mb: 2 }}>
            {t('room_detail.not_found')}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/')}
            sx={{
              background: 'linear-gradient(135deg, #1a237e, #3949ab)',
              color: '#fff',
              px: 4, py: 1.5, borderRadius: 3,
            }}
          >
            {t('room_detail.back_home')}
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <>
      {/* Hero Section with Main Image */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '45vh', sm: '50vh', md: '65vh' },
          overflow: 'hidden',
          mt: '-64px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${room.gallery[activeImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            transition: 'background-image 0.5s ease',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              180deg,
              rgba(10, 14, 26, 0.3) 0%,
              rgba(26, 35, 126, 0.4) 50%,
              rgba(10, 14, 26, 0.9) 100%
            )`,
          }}
        />

        {/* Back Button */}
        <Box sx={{ position: 'absolute', top: 80, left: { xs: 16, md: 40 }, zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate('/#rooms')}
              sx={{
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                px: 3, py: 1,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              }}
            >
              {t('room_detail.back')}
            </Button>
          </motion.div>
        </Box>

        {/* Hero Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            pb: { xs: 4, md: 6 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}
          >
            <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', md: 'flex-end' }, justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Chip
                  label={t(`rooms.${roomId}.price`)}
                  sx={{
                    background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    px: 1,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '1.6rem', sm: '2rem', md: '3.2rem' },
                    mb: 1,
                  }}
                >
                  {t(`rooms.${roomId}.name`)}
                </Typography>
                <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.7)' }}>
                    <People fontSize="small" />
                    <Typography variant="body2">
                      {room.capacity} {t('room_detail.person', { count: room.capacity })}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.7)' }}>
                    <SquareFoot fontSize="small" />
                    <Typography variant="body2">{room.surface} m²</Typography>
                  </Box>
                </Box>
              </Box>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                  color: '#fff',
                  px: 4, py: 1.5,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #3949ab, #1a237e)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                  width: { xs: '100%', md: 'auto' },
                }}
              >
                {t('room_detail.book_now')}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Gallery Thumbnails */}
      <Box sx={{ bgcolor: theme.palette.background.default, py: 3 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 1 }}>
            {room.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Box
                  onClick={() => setActiveImageIndex(index)}
                  sx={{
                    width: { xs: 100, md: 140 },
                    height: { xs: 70, md: 90 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeImageIndex === index
                      ? `3px solid ${theme.palette.primary.main}`
                      : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    opacity: activeImageIndex === index ? 1 : 0.6,
                    '&:hover': { opacity: 1 },
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Gallery ${index + 1}`}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Description + Equipment */}
      <Box sx={{ bgcolor: theme.palette.background.default, py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 3, md: 6 }}>
            {/* Left: Description */}
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {t('room_detail.description_title')}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 2, fontSize: '1.05rem', mb: 4 }}
                >
                  {t(`room_detail.${roomId}.long_description`)}
                </Typography>

                {/* Room Image Full Width */}
                <Box
                  onClick={() => setSelectedImage(room.image)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 220, md: 320 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .zoom-overlay': { opacity: 1 },
                    '&:hover img': { transform: 'scale(1.05)' },
                  }}
                >
                  <Box
                    component="img"
                    src={room.image}
                    alt={t(`rooms.${roomId}.name`)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    className="zoom-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(26, 35, 126, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <ZoomIn sx={{ color: '#fff', fontSize: 50 }} />
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* Right: Equipment */}
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    borderRadius: 4,
                    bgcolor: theme.palette.mode === 'dark'
                      ? 'rgba(20, 24, 41, 0.8)'
                      : 'rgba(26, 35, 126, 0.03)',
                    border: `1px solid ${theme.palette.mode === 'dark'
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(26, 35, 126, 0.08)'}`,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                    {t('room_detail.equipment_title')}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {room.equipment.map((item, index) => {
                      const IconComponent = iconMap[item.icon];
                      return (
                        <motion.div
                          key={item.key}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                              p: 1.5,
                              borderRadius: 2,
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                bgcolor: theme.palette.mode === 'dark'
                                  ? 'rgba(57, 73, 171, 0.15)'
                                  : 'rgba(26, 35, 126, 0.06)',
                                transform: 'translateX(4px)',
                              },
                            }}
                          >
                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.1), rgba(57, 73, 171, 0.15))',
                                flexShrink: 0,
                              }}
                            >
                              {IconComponent && (
                                <IconComponent
                                  sx={{ color: theme.palette.primary.main, fontSize: 22 }}
                                />
                              )}
                            </Box>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {t(`room_detail.equipment.${item.key}`)}
                            </Typography>
                          </Box>
                        </motion.div>
                      );
                    })}
                  </Box>

                  {/* CTA inside the card */}
                  <Button
                    variant="contained"
                    fullWidth
                    component={Link}
                    to="/contact"
                    sx={{
                      mt: 4,
                      background: 'linear-gradient(135deg, #1a237e, #3949ab)',
                      color: '#fff',
                      py: 1.5,
                      borderRadius: 3,
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #3949ab, #1a237e)',
                      },
                    }}
                  >
                    {t('room_detail.book_now')}
                  </Button>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        PaperProps={{
          sx: { bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible' },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: { xs: 8, md: -20 }, right: { xs: 8, md: -20 },
              bgcolor: 'rgba(0,0,0,0.7)',
              color: '#fff',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.9)' },
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Room fullscreen"
              sx={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: 3,
                objectFit: 'contain',
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default RoomDetailPage;
