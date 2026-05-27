"use client";

import { motion } from "framer-motion";
import { Wifi, Car, UtensilsCrossed, Bell, Map, PlaneLanding, WashingMachine, Droplets, Trees } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ElementType> = {
  Wifi, Car, UtensilsCrossed, Bell, Map, PlaneLanding, WashingMachine, Droplets, Trees,
};

const facilities = [
  { icon: "Wifi", title: "Free WiFi", description: "High-speed wireless throughout the property." },
  { icon: "Car", title: "Free Parking", description: "Ample secure parking for all guests." },
  { icon: "UtensilsCrossed", title: "Home-cooked Meals", description: "Authentic Kerala cuisine made fresh daily." },
  { icon: "Bell", title: "Room Service", description: "In-room dining available all day." },
  { icon: "Map", title: "Guided Tours", description: "Expert local guides for all experiences." },
  { icon: "PlaneLanding", title: "Airport Pickup", description: "Complimentary transfer from Cochin Airport." },
  { icon: "WashingMachine", title: "Laundry", description: "Same-day laundry service available." },
  { icon: "Droplets", title: "Hot Water", description: "24-hour hot water in all rooms." },
  { icon: "Trees", title: "Nature Garden", description: "Sprawling private garden with tropical plants." },
];

export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      aria-label="Our facilities"
      style={{ padding: "6rem 2rem", backgroundColor: "#0F1912" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeading
          label="Everything You Need"
          title="Facilities & Amenities"
          subtitle="We've thought of everything so you don't have to. Focus on relaxing — we've got the rest covered."
          lightMode
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {facilities.map((f, i) => {
            const Icon = ICON_MAP[f.icon];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.08 }}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "background-color 0.3s, border-color 0.3s",
                  cursor: "default",
                }}
                whileHover={{ 
                  y: -5, 
                  backgroundColor: "rgba(200,155,74,0.12)", 
                  borderColor: "rgba(200,155,74,0.4)",
                  boxShadow: "0 12px 30px -10px rgba(200,155,74,0.2)"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(200,155,74,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {Icon && <Icon size={24} color="#C89B4A" />}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#fff" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type React from "react";
