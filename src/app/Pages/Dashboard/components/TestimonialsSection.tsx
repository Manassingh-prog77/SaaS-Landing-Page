// components/TestimonialsSection.tsx

"use client";

import { Box, Container, Grid, Typography, alpha, useTheme, Card, CardContent, Stack, Avatar, Rating } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import { motion } from "framer-motion";
import { gradients } from "../../theme"; // Ensure this path is correct

// --- Data Structure for Testimonials ---
const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Head of Growth",
    company: "Growthify Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "ADmyBRAND has been a complete game-changer. The AI's ability to predict campaign fatigue before it happens saved us thousands. The performance uplift was immediate and significant. It's the most intelligent tool in our marketing stack, by far.",
  },
  {
    name: "Simran Kaur",
    title: "Marketing Manager",
    company: "MarketingMinds",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "The sheer amount of time our team saves is incredible. Repetitive tasks that took hours are now handled in minutes by the automation suite. The interface is so intuitive that our team was up and running on day one. A must-have for any serious marketing team.",
  },
  {
    name: "Rohit Verma",
    title: "CEO",
    company: "AdSpark Media",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    review:
      "As a CEO, I look for ROI, and this platform delivers. We've consolidated three other marketing tools into this one suite, saving on costs while getting more powerful features. The real-time analytics are crucial for our board meetings.",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- The Main Testimonials Section Component ---
export default function TestimonialsSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${alpha(
          theme.palette.secondary.main,
          0.03
        )} 0%, ${theme.palette.background.default} 100%)`,
        overflow: 'hidden',
      }}
    >
      {/* Background decoration: blurred avatars for a 'human' feel */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.05, filter: 'blur(100px)' }}>
          {testimonials.map((t, i) => (
              <Avatar key={i} src={t.image} sx={{
                  width: {xs: 150, md: 250}, height: {xs: 150, md: 250},
                  position: 'absolute',
                  top: `${10 + (i * 30)}%`,
                  left: i % 2 === 0 ? `${10 + (i * 10)}%` : 'auto',
                  right: i % 2 !== 0 ? `${10 + (i * 10)}%` : 'auto',
              }} />
          ))}
      </Box>

      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Loved by Teams Worldwide
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '60ch', mx: 'auto' }}>
            Hear from marketing leaders who are building the future with ADmyBRAND.
          </Typography>
        </Box>

        {/* Testimonials Grid */}
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Grid container spacing={4} alignItems="flex-start">
            {testimonials.map((testimonial) => (
              <Grid item xs={12} md={4} key={testimonial.name}>
                <Box component={motion.div} variants={itemVariants} sx={{ height: '100%' }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      background: alpha(theme.palette.background.paper, 0.7),
                      backdropFilter: 'blur(16px)',
                      border: `1px solid ${alpha(theme.palette.grey[400], 0.2)}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: `0 20px 40px -10px ${alpha(theme.palette.grey[500], 0.2)}`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, flexGrow: 1, position: 'relative' }}>
                      <FormatQuote sx={{ position: 'absolute', top: 16, right: 16, fontSize: 64, color: 'primary.light', opacity: 0.1 }} />
                      <Stack direction="row" spacing={2} sx={{ mb: 2, alignItems: 'center' }}>
                        <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 56, height: 56, border: `2px solid ${theme.palette.primary.main}` }} />
                        <Box>
                          <Typography variant="h6" component="p" sx={{ fontWeight: 600 }}>{testimonial.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{testimonial.title}, {testimonial.company}</Typography>
                        </Box>
                      </Stack>
                      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                      <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        “{testimonial.review}”
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}