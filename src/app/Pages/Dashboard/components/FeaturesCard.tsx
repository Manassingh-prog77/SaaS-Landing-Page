// components/FeatureCard.tsx

import { Box, Stack, Typography, alpha, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { gradients } from "../../../../theme/theme"; // Ensure this path is correct

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// Animation variant for individual cards
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      variants={itemVariants}
      sx={{
        position: 'relative',
        p: '1px',
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.3)}, ${alpha(theme.palette.secondary.main, 0.3)})`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: `0 20px 40px -10px ${alpha(theme.palette.primary.main, 0.25)}`,
        },
        height: 'auto', // ✅ make sure height is not forced
      }}
    >
      <Stack
        spacing={2}
        sx={{
          p: 3,
          borderRadius: '15px',
          background: alpha(theme.palette.background.paper, 0.8),
          backdropFilter: 'blur(12px)',
          height: '100%', // ✅ Only allow this if parent sets height; you can also remove it
        }}
      >
        {/* Icon Container */}
        <Box
          sx={{
            width: 56,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            background: gradients.primary,
            color: 'white',
            boxShadow: `0 8px 16px -4px ${alpha(theme.palette.primary.main, 0.5)}`,
            '& .MuiSvgIcon-root': {
              fontSize: '2rem',
            },
          }}
        >
          {icon}
        </Box>

        {/* Text Content */}
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: 'text.primary' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}