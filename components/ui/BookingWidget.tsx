"use client";

import { useState } from "react";
import { Calendar, Users } from "lucide-react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking action, redirecting to contact for now
    window.location.href = `/contact?checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`;
  };

  return (
    <form
      onSubmit={handleBooking}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "#ffffff",
        padding: "1.5rem",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#6B7280", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Check-In</label>
          <div style={{ position: "relative" }}>
            <Calendar size={16} color="#9CA3AF" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="date"
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "14px",
                outline: "none",
                color: "#1A1A1A",
              }}
            />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#6B7280", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Check-Out</label>
          <div style={{ position: "relative" }}>
            <Calendar size={16} color="#9CA3AF" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="date"
              required
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 12px 12px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "14px",
                outline: "none",
                color: "#1A1A1A",
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#6B7280", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Guests</label>
        <div style={{ position: "relative" }}>
          <Users size={16} color="#9CA3AF" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }} />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 12px 12px 36px",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.1)",
              fontSize: "14px",
              outline: "none",
              color: "#1A1A1A",
              backgroundColor: "#fff",
              appearance: "none",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} Guest{n !== 1 ? "s" : ""}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#C89B4A",
          color: "#fff",
          fontSize: "15px",
          fontWeight: 700,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.2s",
          marginTop: "0.5rem",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b08a3e")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
      >
        Check Availability
      </button>
    </form>
  );
}
