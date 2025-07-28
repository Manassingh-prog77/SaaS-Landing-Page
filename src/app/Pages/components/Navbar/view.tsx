'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Chip,
  Container,
  useTheme,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { gradients } from '../../../../theme/theme'; // Import gradients from our theme

const navLinks = [
  { name: 'Home', href: '#hero', active: true },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];


export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? `1px solid ${alpha(theme.palette.primary.main, 0.1)}` 
            : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: scrolled ? 'translateY(0)' : 'translateY(0)',
          boxShadow: scrolled 
            ? '0px 4px 20px rgba(124, 58, 237, 0.08)' 
            : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              justifyContent: 'space-between',
              py: 1,
              px: { xs: 0, sm: 2 },
            }}
          >
            {/* Premium Logo */}
            <Link href="/" passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '12px',
                    background: gradients.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    boxShadow: '0px 4px 16px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  <RocketLaunchIcon 
                    sx={{ 
                      color: 'white', 
                      fontSize: 20,
                    }} 
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    background: gradients.accent,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ADmy
                  <Box component="span" sx={{ fontWeight: 400 }}>
                    BRAND
                  </Box>
                </Typography>
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <Box 
              sx={{ 
                display: { xs: 'none', lg: 'flex' }, 
                alignItems: 'center',
                gap: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                p: 1,
              }}
            >
              {navLinks.map((link, index) => (
                <Link href={link.href} key={link.name} passHref legacyBehavior>
                  <Button
                    component="a"
                    variant={link.active ? "contained" : "text"}
                    sx={{
                      minWidth: 'auto',
                      px: 3,
                      py: 1,
                      borderRadius: '12px',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      color: link.active ? 'white' : theme.palette.text.primary,
                      background: link.active ? gradients.primary : 'transparent',
                      boxShadow: link.active ? '0px 2px 8px rgba(124, 58, 237, 0.3)' : 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        background: link.active 
                          ? gradients.primary 
                          : alpha(theme.palette.primary.main, 0.08),
                        transform: 'translateY(-1px)',
                        color: link.active ? 'white' : theme.palette.primary.main,
                      },
                    }}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Desktop CTA Section */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
              {/* Beta Badge */}
              <Chip
                label="Beta"
                size="small"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}20 0%, ${theme.palette.secondary.main}40 100%)`,
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  height: 28,
                  border: `1px solid ${theme.palette.secondary.main}30`,
                }}
              />

              <Button
                variant="outlined"
                sx={{
                  borderRadius: '12px',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  textTransform: 'none',
                  borderColor: alpha(theme.palette.primary.main, 0.3),
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    background: alpha(theme.palette.primary.main, 0.05),
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Sign In
              </Button>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  borderRadius: '12px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  background: gradients.primary,
                  boxShadow: '0px 4px 16px rgba(124, 58, 237, 0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: gradients.primary,
                    boxShadow: '0px 8px 24px rgba(124, 58, 237, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Start Free Trial
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton 
                onClick={() => setDrawerOpen(true)} 
                edge="end"
                sx={{
                  borderRadius: '12px',
                  width: 44,
                  height: 44,
                  background: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Premium Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 320,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            position: 'relative',
          }}
        >
          {/* Mobile Header */}
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 3,
              borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: gradients.accent,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ADmyBRAND
            </Typography>
            <IconButton 
              onClick={() => setDrawerOpen(false)}
              sx={{
                borderRadius: '12px',
                color: theme.palette.text.secondary,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <List sx={{ flexGrow: 1, px: 2, py: 3 }}>
            {navLinks.map((link, index) => (
              <Link href={link.href} key={link.name} passHref legacyBehavior>
                <ListItem 
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    borderRadius: '12px',
                    mb: 1,
                    background: link.active 
                      ? alpha(theme.palette.primary.main, 0.1) 
                      : 'transparent',
                    '&:hover': {
                      background: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                >
                  <ListItemText
                    primary={link.name}
                    primaryTypographyProps={{
                      fontWeight: link.active ? 600 : 500,
                      color: link.active 
                        ? theme.palette.primary.main 
                        : theme.palette.text.primary,
                      fontSize: '1.1rem',
                    }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>

          {/* Mobile CTA Section */}
          <Box sx={{ p: 3, borderTop: `1px solid ${alpha(theme.palette.primary.main, 0.1)}` }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
                borderRadius: '12px',
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
              }}
              onClick={() => setDrawerOpen(false)}
            >
              Sign In
            </Button>
            <Button
              variant="contained"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: '12px',
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                background: gradients.primary,
                boxShadow: '0px 4px 16px rgba(124, 58, 237, 0.3)',
              }}
              onClick={() => setDrawerOpen(false)}
            >
              Start Free Trial
            </Button>
          </Box>

          {/* Decorative gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '200%',
              height: '200%',
              background: `radial-gradient(circle at 100% 0%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%)`,
              pointerEvents: 'none',
              zIndex: -1,
            }}
          />
        </Box>
      </Drawer>
    </>
  );
}