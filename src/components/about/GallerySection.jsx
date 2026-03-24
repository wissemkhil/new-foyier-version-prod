import React, { useState } from 'react';
import {
  Box, Container, Typography, Dialog, IconButton, useTheme,
} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import heroBuilding from '../../assets/images/hero-building.png';
import roomSingle from '../../assets/images/room-single.png';
import roomDouble from '../../assets/images/room-double.png';
import roomTriple from '../../assets/images/room-triple.png';
import roomSuite from '../../assets/images/room-suite.png';
import commonLounge from '../../assets/images/common-lounge.png';

const galleryImages = [
  { src: heroBuilding, span: 2 },
  { src: roomSingle, span: 1 },
  { src: roomDouble, span: 1 },
  { src: commonLounge, span: 2 },
  { src: roomTriple, span: 1 },
  { src: roomSuite, span: 1 },
  { src: heroBuilding, span: 1 },
  { src: commonLounge, span: 1 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const GallerySection = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.mode === 'dark'
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
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {t('about.gallery.title')}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, fontWeight: 400 }}
          >
            {t('about.gallery.subtitle')}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: { xs: 1.5, md: 2 },
              gridAutoRows: { xs: 160, sm: 180, md: 220 },
            }}
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  gridColumn: img.span === 2 ? 'span 2' : 'span 1',
                }}
              >
                <Box
                  onClick={() => setSelectedImage(img.src)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .gallery-overlay': {
                      opacity: 1,
                    },
                    '&:hover img': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={`Gallery ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    className="gallery-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      bgcolor: 'rgba(26, 35, 126, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }}
                  >
                    <ZoomIn sx={{ color: '#fff', fontSize: 40 }} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        PaperProps={{
          sx: {
            bgcolor: 'transparent',
            boxShadow: 'none',
            overflow: 'visible',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
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
              alt="Gallery fullscreen"
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
    </Box>
  );
};

export default GallerySection;
