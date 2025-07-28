'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack,
  Button,
  TextField,
  Divider,
  useTheme,
  alpha,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Twitter,
  Instagram,
  YouTube,
  RocketLaunch as RocketLaunchIcon,
  Send as SendIcon,
  VerifiedUserOutlined,
  Security,
} from '@mui/icons-material';
import { gradients } from '../../../../theme/theme'; // Adjusted path

// Reorganized for clarity
const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Integrations', href: '#integrations' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'API Docs', href: '#api' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Startups', href: '#startups' },
      { label: 'For Enterprise', href: '#enterprise' },
      { label: 'Marketing Teams', href: '#marketing' },
      { label: 'Sales Teams', href: '#sales' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Case Studies', href: '#cases' },
      { label: 'Community', href: '#community' },
      { label: 'Webinars', href: '#webinars' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Security', href: '#security' },
    ],
  },
];

const socialLinks = [
  { icon: LinkedIn, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
  { icon: YouTube, href: 'https://youtube.com', label: 'YouTube', color: '#FF0000' },
  { icon: GitHub, href: 'https://github.com', label: 'GitHub', color: '#FFFFFF' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
];

// Reusable Logo for consistency
const FooterLogo = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
    <Box
      sx={{
        width: 44,
        height: 44,
        borderRadius: '10px',
        background: gradients.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mr: 2,
        boxShadow: (theme) => `0 4px 16px ${alpha(theme.palette.primary.main, 0.4)}`,
      }}
    >
      <RocketLaunchIcon sx={{ color: 'white', fontSize: 24 }} />
    </Box>
    <Typography variant="h5" sx={{ fontWeight: 800, color: 'white', letterSpacing: '-0.05em' }}>
      ADmy<Box component="span" sx={{ fontWeight: 400 }}>BRAND</Box>
    </Typography>
  </Box>
);

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        // --- UPDATED: Using built-in 'grey' palette ---
        background: `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`,
        color: theme.palette.grey[300],
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Decorative background orbs */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <Box
          sx={{
            position: 'absolute', top: '10%', right: '5%', width: 400, height: 400,
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.dark, 0.15)} 0%, transparent 70%)`,
          }}
        />
        <Box
          sx={{
            position: 'absolute', bottom: '5%', left: '10%', width: 300, height: 300,
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.dark, 0.15)} 0%, transparent 70%)`,
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        {/* Newsletter Section */}
        <Box
          sx={{
            textAlign: 'center', mb: 8, p: { xs: 3, md: 5 },
            background: `rgba(255, 255, 255, 0.05)`,
            // --- UPDATED: Using 'grey' ---
            border: `1px solid ${alpha(theme.palette.grey[700], 0.5)}`,
            backdropFilter: 'blur(12px)', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700, mb: 1, background: gradients.primary,
              backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}
          >
            Stay Ahead of the Curve
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.300', mb: 4, maxWidth: 600, mx: 'auto' }}>
            Get the latest AI marketing insights, product updates, and exclusive tips delivered to your inbox.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ maxWidth: 500, mx: 'auto' }}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  // --- UPDATED: Using 'grey' ---
                  bgcolor: alpha(theme.palette.grey[900], 0.5),
                  borderRadius: '10px',
                  color: 'white',
                  '& fieldset': { borderColor: theme.palette.grey[700] },
                  '&:hover fieldset': { borderColor: theme.palette.primary.main },
                },
              }}
            />
            <Button variant="contained" size="large" endIcon={<SendIcon />}>
              Subscribe
            </Button>
          </Stack>
        </Box>

        {/* Main Footer Links */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
           {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
          <Grid item xs={12} md={4}>
            <FooterLogo />
            <Typography variant="body1" sx={{ maxWidth: 320, mb: 3, color: "white"}}>
              Empowering businesses with AI-driven marketing solutions to scale growth.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                startIcon={<VerifiedUserOutlined />}
                variant="outlined"
                size="small"
                sx={{ borderColor: 'grey.700', color: 'grey.300', '&:hover': { bgcolor: 'primary.dark', borderColor: 'primary.dark' } }}
              >
                SOC 2
              </Button>
              <Button
                startIcon={<Security />}
                variant="outlined"
                size="small"
                sx={{ borderColor: 'grey.700', color: 'grey.300', '&:hover': { bgcolor: 'secondary.dark', borderColor: 'secondary.dark' } }}
              >
                ISO 27001
              </Button>
            </Stack>
          </Grid>

          {footerLinks.map((section) => (
          // @ts-expect-error: MUI Grid item type issue - safe to ignore for build
            <Grid item xs={6} sm={4} md key={section.title}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
                {section.title}
              </Typography>
              <Stack component="ul" spacing={1.5} sx={{ listStyle: 'none', p: 0, mt: 2 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.label}>
                    <Link
                      href={link.href}
                      sx={{
                        color: 'grey.400',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: 'primary.light',
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: alpha(theme.palette.grey[700], 0.5) }} />

        {/* Bottom Bar */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ py: 3 }}
        >
          <Typography variant="body2" sx={{ color: 'grey.500' }}>
            © {new Date().getFullYear()} ADmyBRAND. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                sx={{
                  color: 'grey.400',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: social.color,
                    bgcolor: alpha(social.color, 0.1),
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <social.icon />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}