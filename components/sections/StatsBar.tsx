"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/app/lib/constants";

export default function StatsBar() {
  return (
    <section
      aria-label="Property statistics"
      style={{ padding: "60px 1rem", backgroundColor: "#162018" }}
    >
      <div
        id="stats-grid"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "0",
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              textAlign: "center",
              padding: "1rem 2rem",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "0.25rem" }}>{stat.icon}</div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 700,
                color: "#C89B4A",
                lineHeight: 1,
                marginBottom: "0.375rem",
              }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isDecimal={(stat as { isDecimal?: boolean }).isDecimal}
              />
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
