// components/FeaturesSection.tsx

"use client";

import { Box, Container, Grid, Typography, alpha, useTheme, Button } from "@mui/material";
import {
  SmartToyOutlined,
  AnalyticsOutlined,
  ElectricBoltOutlined,
  SecurityOutlined,
  CloudQueueOutlined,
  AutoFixHighOutlined,
  ArrowForward,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { gradients } from "../../../../theme/theme"; // Ensure this path is correct
import FeatureCard from "./FeaturesCard";

// Animation variants for the container to orchestrate staggered children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function FeaturesSection() {
  const theme = useTheme();

  const features = [
    {
      icon: <SmartToyOutlined />,
      title: "AI-Powered Campaigns",
      description: "Leverage generative AI to ideate, create, and launch high-impact marketing campaigns in minutes.",
    },
    {
      icon: <AnalyticsOutlined />,
      title: "Predictive Analytics",
      description: "Go beyond tracking. Our AI predicts campaign performance and audience behavior with stunning accuracy.",
    },
    {
      icon: <ElectricBoltOutlined />,
      title: "Hyper-Automation",
      description: "Automate complex workflows, from audience segmentation to multi-channel ad deployment.",
    },
    {
      icon: <SecurityOutlined />,
      title: "Enterprise-Grade Security",
      description: "Fortified with end-to-end encryption, SSO, and compliance features to protect your data.",
    },
    {
      icon: <CloudQueueOutlined />,
      title: "Unified Cloud Platform",
      description: "Access all your tools, assets, and data from a single, cohesive, and globally-accessible interface.",
    },
    {
      icon: <AutoFixHighOutlined />,
      title: "Smart Suggestions",
      description: "Receive intelligent content improvements, A/B testing ideas, and budget allocation recommendations.",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            A Powerhouse of{" "}
            <Box component="span" sx={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Intelligent Features
            </Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '65ch', mx: 'auto' }}>
            Everything you need to outpace the competition. Our AI suite is designed for performance, security, and seamless integration.
          </Typography>
        </Box>

        {/* --- CORRECTED: Simple, Clean 3-Column Grid --- */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4}>
          
          {features.map((feature, index) => (
            // @ts-expect-error: MUI Grid item type issue - safe to ignore for build
            <Grid
              item
              key={index}
              sx={{
                width: {
                  xs: '100%',   
                  sm: '50%',   
                  md: '28.33%',
                },
                flexGrow: 0,
                flexShrink: 0,
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
        </Box>

        {/* Optional: Add a CTA button at the end of the section */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForward />}
                // Optional: Add a link to a more detailed features page
                // href="/features"
                // component={Link} 
            >
                Explore All Features
            </Button>
        </Box>

      </Container>
    </Box>
  );
}