"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  lightMode?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  lightMode = false,
}: SectionHeadingProps) {
  const textAlign = align === "center" ? "center" : "left";
  const alignItems = align === "center" ? "center" : "flex-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 md:mb-16"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems,
        textAlign,
      }}
    >
      {label && (
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#C89B4A",
            marginBottom: "1rem",
            display: "block",
          }}
        >
          {label}
        </span>
      )}
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700,
          color: lightMode ? "#ffffff" : "#1A1A1A",
          lineHeight: 1.2,
          marginBottom: subtitle ? "1.5rem" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            color: lightMode ? "rgba(255,255,255,0.7)" : "#6B7280",
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
