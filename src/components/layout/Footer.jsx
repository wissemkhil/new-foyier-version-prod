import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  WhatsApp,
  Phone,
  Email,
  LocationOn,
  Send,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSnackOpen(true);
      setEmail('');
    }
  };

  const quickLinks = [
    { label: t('navbar.home'), path: '/' },
    { label: t('navbar.about'), path: '/about' },
    { label: t('navbar.contact'), path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.300',
        pt: 8,
        pb: 3,
        borderTop: '3px solid',
        borderImage: 'linear-gradient(90deg, #1A237E, #FF6F00, #5C6BC0) 1',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: Logo + Tagline + Social */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                background: 'linear-gradient(135deg, #5C6BC0, #FFB300)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Foyer Babel
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 3, lineHeight: 1.7 }}>
              {t('footer.tagline')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  bgcolor: '#1877F2',
                  '&:hover': { bgcolor: '#166FE5', transform: 'scale(1.1)' },
                  transition: 'all 0.3s ease',
                  width: 40,
                  height: 40,
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  '&:hover': { transform: 'scale(1.1)' },
                  transition: 'all 0.3s ease',
                  width: 40,
                  height: 40,
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                href="https://wa.me/21671234567"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  bgcolor: '#25D366',
                  '&:hover': { bgcolor: '#20BD5A', transform: 'scale(1.1)' },
                  transition: 'all 0.3s ease',
                  width: 40,
                  height: 40,
                }}
              >
                <WhatsApp fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: '1.05rem' }}
            >
              {t('footer.quick_links')}
            </Typography>
            {quickLinks.map((link) => (
              <Typography
                key={link.path}
                component={Link}
                to={link.path}
                sx={{
                  display: 'block',
                  color: 'grey.400',
                  textDecoration: 'none',
                  mb: 1.5,
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#FFB300',
                    paddingInlineStart: '8px',
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Grid>

          {/* Column 3: Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: '1.05rem' }}
            >
              {t('footer.contact_info')}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Phone sx={{ color: '#5C6BC0', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                {t('contact.phone')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Email sx={{ color: '#5C6BC0', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: 'grey.400' }}>
                {t('contact.email')}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
              <LocationOn sx={{ color: '#5C6BC0', fontSize: 20, mt: 0.3 }} />
              <Typography variant="body2" sx={{ color: 'grey.400', lineHeight: 1.6 }}>
                {t('contact.address')}
              </Typography>
            </Box>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ color: '#fff', fontWeight: 600, mb: 2, fontSize: '1.05rem' }}
            >
              {t('footer.newsletter')}
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.400', mb: 2, lineHeight: 1.6 }}>
              {t('footer.newsletter_text')}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}
            >
              <TextField
                size="small"
                placeholder={t('footer.email_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    borderRadius: 2,
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
                    '&.Mui-focused fieldset': { borderColor: '#5C6BC0' },
                  },
                  '& input::placeholder': { color: 'grey.500' },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{
                  minWidth: 'auto',
                  px: 2,
                  borderRadius: 2,
                }}
              >
                <Send fontSize="small" />
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mt: 6, mb: 3 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            {t('footer.copyright')}
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            {t('footer.made_with')}
          </Typography>
        </Box>
      </Container>

      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSnackOpen(false)} sx={{ borderRadius: 2 }}>
          {t('footer.subscribe')} ✓
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
