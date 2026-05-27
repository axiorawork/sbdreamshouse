"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      aria-label="Call to action"
      style={{ position: "relative", overflow: "hidden", padding: "8rem 2rem", minHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-20%",
          y: bgY,
          backgroundImage: "url('/hero_slides/Slide4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,20,12,0.72)" }} aria-hidden="true" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", textAlign: "center", maxWidth: "700px" }}
      >
        <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>
          Begin Your Journey
        </span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
          }}
        >
          Ready to Experience Munnar Like Never Before?
        </h2>
        <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Book your stay today and wake up to mountain air and warm hospitality.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/rooms"
            style={{
              backgroundColor: "#C89B4A",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "15px 36px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b08a3e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 36px",
              borderRadius: "9999px",
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.6)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#fff"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.backgroundColor = "transparent"; }}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
