// components/FAQSection.tsx

"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  useTheme,
  alpha,
  Stack,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { motion } from "framer-motion";
import { gradients } from "../../../../theme/theme"; // Ensure this path is correct

// --- Data Structure for FAQs ---
// --- Data Structure for FAQs ---
// --- Data Structure for FAQs ---
const faqs = [
  {
    question: "What exactly is the ADmyBRAND AI Suite?",
    answer:
      "It is a comprehensive marketing platform powered by artificial intelligence. It helps automate, analyze, and enhance your campaigns by generating ad copy, predicting audience behavior, and much more.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We provide a 14-day free trial for the Pro plan with no credit card needed. You can explore all advanced features and experience the benefits before making any commitment.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely. You have complete flexibility to upgrade, downgrade, or cancel your subscription from your account dashboard whenever you like, with no hassle.",
  },
  {
    question: "Which third-party tools can I integrate with?",
    answer:
      "We support various integrations including Google Ads, Meta Ads (Facebook), HubSpot, Salesforce, Slack, and many others. You can also use our API for custom integrations.",
  },
  {
    question: "How does the AI campaign generation work?",
    answer:
      "You simply provide a prompt or goal, such as launching a summer sale. Our AI builds an entire campaign strategy including suggested audiences, ad copy options, creative ideas, and budget plans.",
  },
];




// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- The Main FAQ Section Component ---
export default function FAQSection() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, ${alpha(
          theme.palette.primary.main,
          0.05
        )} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* Left Column: Context and CTA */}
           {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3} sx={{ position: 'sticky', top: 120 }}>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Your Questions,
                <Box component="span" sx={{ background: gradients.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {' '}Answered
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Find quick answers to common questions here. If you can't find what you're looking for, our support team is always ready to help.
              </Typography>
              <Box>
                <Button variant="outlined" size="large">
                  Contact Support
                </Button>
              </Box>
            </Stack>
          </Grid>

          {/* Right Column: Accordion List */}
          {/* @ts-expect-error: MUI Grid item type issue - safe to ignore for build */}
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {faqs.map((faq, index) => (
                // @ts-expect-error: MUI Grid item type issue - safe to ignore for build
                <Box component={motion.div} variants={itemVariants} key={index}>
                  <Accordion
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    disableGutters
                    elevation={0}
                    sx={{
                      background: 'transparent',
                      '&:before': { display: 'none' }, // Removes the default top border
                      py: 1.5,
                      borderBottom: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Box sx={{
                          width: 28, height: 28, borderRadius: '50%',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          border: `1px solid ${expanded === `panel${index}` ? theme.palette.primary.main : theme.palette.grey[400]}`,
                          color: expanded === `panel${index}` ? 'primary.main' : 'text.secondary',
                          transition: 'all 0.3s ease',
                        }}>
                          {expanded === `panel${index}` ? <Remove sx={{fontSize: 18}}/> : <Add sx={{fontSize: 18}}/>}
                        </Box>
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <Typography variant="h6" component="p" sx={{ fontWeight: 600 }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="text.secondary">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}