"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import RoomCard from "@/components/ui/RoomCard";
import { ROOMS } from "@/app/lib/constants";
import Link from "next/link";

export default function RoomsPreview() {
  return (
    <section
      id="rooms"
      aria-label="Our rooms"
      className="py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: "#fff" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          label="Where You'll Stay"
          title="Our Rooms"
          subtitle="From our signature cave suite to garden-facing retreats, every room is a sanctuary designed with care and warmth."
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {ROOMS.map((room) => (
            <div key={room.id} style={{ flex: "1 1 300px", maxWidth: "380px", display: "flex" }}>
              <RoomCard {...room} />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/rooms"
            style={{
              display: "inline-block",
              backgroundColor: "#C89B4A",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 36px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b08a3e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
          >
            View All Rooms →
          </Link>
        </div>
      </div>
    </section>
  );
}
