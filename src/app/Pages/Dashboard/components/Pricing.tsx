// components/PricingSection.tsx

"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  CardActions,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  alpha,
  useTheme,
  Stack,
} from "@mui/material";
import { CheckCircleOutline, HighlightOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import { gradients } from "../../../../theme/theme"; // Ensure this path is correct

// --- Data Structure for Pricing Tiers ---
const tiers = [
  {
    title: "Starter",
    description: "For individuals and small teams getting started.",
    monthlyPrice: "0",
    yearlyPrice: "0",
    features: ["AI-Powered Campaigns (1/mo)", "Real-Time Analytics", "Basic Automations"],
    unavailableFeatures: ["Dedicated Success Manager", "Predictive Analytics API"],
    highlight: false,
    buttonText: "Start for Free",
  },
  {
    title: "Pro",
    description: "For growing businesses that need advanced features.",
    monthlyPrice: "49",
    yearlyPrice: "39",
    features: [
      "AI-Powered Campaigns (Unlimited)",
      "Real-Time Analytics",
      "Advanced Automations",
      "Predictive Analytics API",
    ],
    unavailableFeatures: ["Dedicated Success Manager"],
    highlight: true,
    buttonText: "Choose Pro Plan",
  },
  {
    title: "Enterprise",
    description: "For large organizations with custom needs.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: [
      "AI-Powered Campaigns (Unlimited)",
      "Real-Time Analytics",
      "Advanced Automations",
      "Predictive Analytics API",
      "Dedicated Success Manager",
    ],
    unavailableFeatures: [],
    highlight: false,
    buttonText: "Contact Sales",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- The Main Pricing Section Component ---
export default function PricingSection() {
  const theme = useTheme();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const handleBillingCycleChange = (
    event: React.MouseEvent<HTMLElement>,
    newBillingCycle: "monthly" | "yearly" | null
  ) => {
    if (newBillingCycle !== null) {
      setBillingCycle(newBillingCycle);
    }
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(
          theme.palette.secondary.main,
          0.03
        )} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "55ch", mx: "auto" }}>
            Choose a plan that scales with your business. No hidden fees, cancel anytime.
          </Typography>
        </Box>

        {/* Monthly/Yearly Toggle */}
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mb: 6 }}>
          <Typography variant="subtitle1" color={billingCycle === 'monthly' ? 'text.primary' : 'text.secondary'}>Monthly</Typography>
          <ToggleButtonGroup
            value={billingCycle}
            exclusive
            onChange={handleBillingCycleChange}
            aria-label="billing cycle"
          >
            <ToggleButton value="monthly" aria-label="monthly billing" sx={{px:1}} />
            <ToggleButton value="yearly" aria-label="yearly billing" sx={{px:1}} />
          </ToggleButtonGroup>
          <Typography variant="subtitle1" color={billingCycle === 'yearly' ? 'text.primary' : 'text.secondary'}>Yearly</Typography>
          <Chip label="Save 20%" color="primary" size="small" sx={{ background: gradients.primary, color: 'white' }} />
        </Stack>

        {/* Pricing Grid */}
        <Grid
          container
          spacing={4}
          alignItems="flex-end" // Aligns cards to the bottom if they have different heights
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tiers.map((tier) => (
            // @ts-expect-error: MUI Grid item type issue - safe to ignore for build
            <Grid item
              sx={{
                width: {
                  xs: '100%',   
                  sm: '50%',   
                  md: '28.33%',
                },
                flexGrow: 0,
                flexShrink: 0,
              }} key={tier.title}>

              {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
              <Box
                component={motion.div}
                variants={itemVariants}
                sx={{
                  position: 'relative',
                  p: tier.highlight ? '2px' : '1px',
                  borderRadius: '20px',
                  height: '100%',
                  background: tier.highlight ? gradients.primary : `linear-gradient(135deg, ${alpha(theme.palette.grey[400], 0.3)}, ${alpha(theme.palette.grey[600], 0.3)})`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 25px 50px -12px ${alpha(tier.highlight ? theme.palette.primary.main : theme.palette.grey[500], 0.3)}`,
                  },
                }}
              >
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '19px',
                  position: 'relative',
                  background: alpha(theme.palette.background.paper, 0.9),
                  backdropFilter: 'blur(10px)',
                }}>
                  {tier.highlight && (
                    <Chip label="Most Popular" color="primary" sx={{ position: 'absolute', top: 16, right: 16, background: gradients.primary, color: 'white' }} />
                  )}
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>{tier.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{tier.description}</Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                      {tier.monthlyPrice !== "Custom" ? (
                        <>
                          <Typography variant="h3" component="span" sx={{ fontWeight: 700 }}>
                            ${billingCycle === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="span">/mo</Typography>
                        </>
                      ) : (
                        <Typography variant="h4" component="span" sx={{ fontWeight: 700 }}>Custom</Typography>
                      )}
                    </Box>

                    <List>
                      {tier.features.map((feature) => (
                        <ListItem key={feature} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleOutline sx={{ color: 'success.main' }} /></ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                      {tier.unavailableFeatures?.map((feature) => (
                         <ListItem key={feature} disableGutters>
                          <ListItemIcon sx={{ minWidth: 36 }}><HighlightOff sx={{ color: 'grey.400' }} /></ListItemIcon>
                          <ListItemText primary={feature} primaryTypographyProps={{ sx: { color: 'grey.500', textDecoration: 'line-through' } }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>

                  <CardActions sx={{ p: 4, pt: 0 }}>
                    <Button
                      fullWidth
                      variant={tier.highlight ? "contained" : "outlined"}
                      size="large"
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}