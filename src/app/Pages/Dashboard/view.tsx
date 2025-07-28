import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/Pricing";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import { GlobalStyles } from "@mui/material"; // ✅ Import this

export default function Dashboard() {
  return (
    <>
      {/* GlobalStyles applies styles to the document */}
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: "smooth",
          },
        }}
      />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
      </main>
    </>
  );
}
