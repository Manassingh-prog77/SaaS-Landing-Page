"use client";

import { Box, Typography, Button, Stack, Container, useTheme, alpha, Chip, Grid } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { AutoGraph, Public, Group } from "@mui/icons-material";
import { gradients } from "../../../../theme/theme";

// --- Reusable Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Reusable StatBox ---
const StatBox = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Stack spacing={1} alignItems="center" sx={{ minWidth: 100 }}>
    <Box sx={{ color: 'primary.main' }}>{icon}</Box>
    <Typography variant="caption" color="text.secondary">{label}</Typography>
  </Stack>
);

// --- Background Animation ---
const AnimatedGradientBlobs = () => {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: -1 }}>
      <Box
        component={motion.div}
        animate={{ x: ['-20%', '10%', '-20%'], y: ['-20%', '20%', '-20%'] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        sx={{
          position: 'absolute', top: '10%', left: '10%', width: '60vw', height: '60vw',
          maxWidth: 600, maxHeight: 600,
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.2)} 0%, transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />
      <Box
        component={motion.div}
        animate={{ x: ['20%', '-10%', '20%'], y: ['20%', '-20%', '20%'] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 5 }}
        sx={{
          position: 'absolute', bottom: '10%', right: '10%', width: '50vw', height: '50vw',
          maxWidth: 500, maxHeight: 500,
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.2)} 0%, transparent 70%)`,
          filter: 'blur(100px)',
        }}
      />
    </Box>
  );
};

// --- Hero Text + CTA + Trust ---
const HeroContent = () => {
  return (
    <Stack
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      spacing={3}
      sx={{
        textAlign: { xs: 'center', md: 'left' },
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >

      {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
      <motion.div variants={itemVariants}>
        <Chip
          label="Announcing our AI-Powered Suite 2.0"
          variant="outlined"
          sx={{ borderColor: 'primary.light', color: 'primary.main', background: (theme) => alpha(theme.palette.primary.main, 0.1) }}
        />
      </motion.div>
      
      {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
      <motion.div variants={itemVariants}>
        <Typography variant="h1" sx={{ letterSpacing: '-0.04em' }}>
          Your Marketing, on
          <Box component="span" sx={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {' '}AI Autopilot
          </Box>
        </Typography>
      </motion.div>

      {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
      <motion.div variants={itemVariants}>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500 }}>
          ADmyBRAND is the all-in-one suite that leverages cutting-edge AI to automate campaigns, personalize content at scale, and deliver unparalleled marketing ROI.
        </Typography>
      </motion.div>

      {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
      <motion.div variants={itemVariants}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
            Get Started Free
          </Button>
          <Button variant="outlined" size="large" startIcon={<PlayCircleOutlineIcon />}>
            Watch Demo
          </Button>
        </Stack>
      </motion.div>

      {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
      <motion.div variants={itemVariants}>
        <Stack spacing={2} sx={{ pt: 4, alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Typography variant="overline" color="text.secondary">
            Trusted by 500+ marketers and teams worldwide
          </Typography>
          <Stack direction="row" spacing={4}>
            <StatBox icon={<Group />} label="500+ Active Marketers" />
            <StatBox icon={<Public />} label="12+ Countries" />
            <StatBox icon={<AutoGraph />} label="1M+ AI-Driven Campaigns" />
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
};


// --- Final Exported Hero Section ---
export default function HeroSection() {
  return (
    <Box component="section" sx={{ position: 'relative', minHeight: { xs: 'auto', md: '100vh' }, display: 'flex', alignItems: 'center' }}>
      <AnimatedGradientBlobs />
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 15 } }}>
        <Grid container spacing={{ xs: 8, md: 4 }} alignItems="center">
          {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
          <Grid item xs={12} md={6}>
            <HeroContent />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
