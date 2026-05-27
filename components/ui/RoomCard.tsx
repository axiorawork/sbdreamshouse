"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wifi, Bed, Eye, Wind, Coffee, Utensils } from "lucide-react";

const AMENITY_ICONS: Record<string, React.ElementType> = {
  "Free WiFi": Wifi,
  "King Bed": Bed,
  "Queen Bed": Bed,
  "Double Bed": Bed,
  "Mountain View": Eye,
  "Garden View": Eye,
  "AC": Wind,
  "Hot Water": Coffee,
  "Room Service": Utensils,
};

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  priceFrom: number;
  category: string;
  amenities: string[];
  highlight?: string;
}

export default function RoomCard({
  id,
  name,
  description,
  image,
  alt,
  priceFrom,
  amenities,
  highlight,
}: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image with zoom on hover */}
      <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} style={{ height: "100%" }}>
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        {highlight && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              backgroundColor: "#C89B4A",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "9999px",
            }}
          >
            {highlight}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "22px",
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </h3>
        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
          {description}
        </p>

        {/* Amenity icons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
          {amenities.slice(0, 4).map((amenity) => {
            const Icon = AMENITY_ICONS[amenity];
            return (
              <span
                key={amenity}
                title={amenity}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "11px",
                  color: "#6B7280",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 10px",
                  borderRadius: "9999px",
                }}
              >
                {Icon && <Icon size={12} />}
                {amenity}
              </span>
            );
          })}
        </div>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Starting from</span>
            <div style={{ fontSize: "22px", fontWeight: 700, color: "#C89B4A" }}>
              ₹{priceFrom.toLocaleString()}
              <span style={{ fontSize: "13px", fontWeight: 400, color: "#9CA3AF" }}>/night</span>
            </div>
          </div>
          <Link
            href={`/rooms#${id}`}
            style={{
              backgroundColor: "#0F1912",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              padding: "10px 20px",
              borderRadius: "9999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0F1912")}
          >
            View Room
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
