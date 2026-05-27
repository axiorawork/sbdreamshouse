"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  icon: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  delay?: number;
}

export default function ExperienceCard({
  icon,
  title,
  description,
  image,
  alt,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={{ y: -8 }}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
        cursor: "default",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }} />
        {/* Icon badge */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "16px",
            fontSize: "28px",
            lineHeight: 1,
          }}
        >
          {icon}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
