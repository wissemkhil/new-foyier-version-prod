import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  DarkMode,
  LightMode,
  Language,
  Home,
  Info,
  ContactMail,
  Close,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../../context/ThemeContext';
import { useLanguageContext } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleMode } = useThemeContext();
  const { currentLanguage, changeLanguage, languages } = useLanguageContext();

  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langAnchor, setLangAnchor] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('navbar.home'), icon: <Home /> },
    { path: '/about', label: t('navbar.about'), icon: <Info /> },
    { path: '/contact', label: t('navbar.contact'), icon: <ContactMail /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          background: scrolled
            ? theme.palette.mode === 'dark'
              ? 'rgba(20, 24, 41, 0.95)'
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          borderBottom: scrolled
            ? `1px solid ${theme.palette.divider}`
            : 'none',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: '100%',
            mx: 'auto',
            px: { xs: 2, md: 3 },
          }}
        >
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              flexGrow: isMobile ? 1 : 0,
              mr: isMobile ? 0 : 4,
            }}
          >
            Foyer Babel
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1, justifyContent: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: isActive(link.path)
                      ? theme.palette.secondary.main
                      : scrolled
                      ? theme.palette.text.primary
                      : location.pathname === '/' && !scrolled
                      ? '#fff'
                      : theme.palette.text.primary,
                    fontWeight: isActive(link.path) ? 700 : 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      transform: isActive(link.path) ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                      width: '60%',
                      height: 2,
                      bgcolor: theme.palette.secondary.main,
                      transition: 'transform 0.3s ease',
                      borderRadius: 1,
                    },
                    '&:hover::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    },
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            {/* Language Switcher */}
            <IconButton
              onClick={(e) => setLangAnchor(e.currentTarget)}
              sx={{
                color: scrolled
                  ? theme.palette.text.primary
                  : location.pathname === '/' && !scrolled
                  ? '#fff'
                  : theme.palette.text.primary,
              }}
            >
              <Language />
            </IconButton>
            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => setLangAnchor(null)}
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 160,
                },
              }}
            >
              {languages.map((lang) => (
                <MenuItem
                  key={lang.code}
                  selected={currentLanguage === lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setLangAnchor(null);
                  }}
                  sx={{
                    gap: 1.5,
                    fontWeight: currentLanguage === lang.code ? 700 : 400,
                  }}
                >
                  <span>{lang.flag}</span>
                  {lang.label}
                </MenuItem>
              ))}
            </Menu>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleMode}
              sx={{
                color: scrolled
                  ? theme.palette.text.primary
                  : location.pathname === '/' && !scrolled
                  ? '#fff'
                  : theme.palette.text.primary,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'rotate(180deg)' },
              }}
            >
              {mode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>

            {/* Mobile Hamburger */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: scrolled
                    ? theme.palette.text.primary
                    : location.pathname === '/' && !scrolled
                    ? '#fff'
                    : theme.palette.text.primary,
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor={currentLanguage === 'ar' ? 'left' : 'right'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: theme.palette.background.paper,
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Foyer Babel
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: isActive(link.path)
                  ? theme.palette.secondary.main
                  : theme.palette.text.primary,
                bgcolor: isActive(link.path)
                  ? theme.palette.action.selected
                  : 'transparent',
                borderRadius: 2,
                mx: 1,
                mb: 0.5,
                textDecoration: 'none',
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive(link.path)
                    ? theme.palette.secondary.main
                    : theme.palette.text.secondary,
                  minWidth: 40,
                }}
              >
                {link.icon}
              </ListItemIcon>
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  fontWeight: isActive(link.path) ? 700 : 500,
                }}
              />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            {t('navbar.language')}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {languages.map((lang) => (
              <Button
                key={lang.code}
                size="small"
                variant={currentLanguage === lang.code ? 'contained' : 'outlined'}
                onClick={() => changeLanguage(lang.code)}
                sx={{ minWidth: 'auto', px: 1.5, fontSize: '0.85rem' }}
              >
                {lang.flag} {lang.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
