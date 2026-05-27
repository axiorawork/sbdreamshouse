"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/app/lib/constants";

export default function TestimonialsSection() {
  // Duplicate for seamless infinite scroll
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      aria-label="Guest testimonials"
      style={{ padding: "6rem 0", backgroundColor: "#F5F0E8", overflow: "hidden" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <SectionHeading
          label="Guest Stories"
          title="What Our Guests Say"
          subtitle="Over 2,000 families have made memories here. Here are a few of their stories."
        />
      </div>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          width: "max-content",
        }}
      >
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          style={{
            display: "flex",
            gap: "2rem",
            padding: "0 1rem",
          }}
        >
          {marqueeItems.map((t, index) => (
            <div key={`${t.id}-${index}`} style={{ width: "350px", flexShrink: 0 }}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
