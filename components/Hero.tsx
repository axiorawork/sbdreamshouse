"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/app/lib/constants";

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-[#0A1210]"
      aria-label="S&B Dreams House hero slideshow"
    >
      {/* Slide Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[current].image}
              alt={HERO_SLIDES[current].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.38)" }}
        aria-hidden="true"
      />

      {/* Slide Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-[15vh] px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 max-w-4xl"
          >
            <span
              style={{
                color: "#C89B4A",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {HERO_SLIDES[current].tagline}
            </span>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                textShadow: "0 2px 24px rgba(0,0,0,0.2)",
              }}
            >
              {HERO_SLIDES[current].headline}
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "clamp(16px, 1.5vw, 18px)",
                lineHeight: 1.6,
                maxWidth: "600px",
                margin: "0 auto",
                marginBottom: "1rem",
              }}
            >
              {HERO_SLIDES[current].subtitle}
            </p>


          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          left: "2rem",
          transform: "translateY(-50%)",
          zIndex: 30,
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "9999px",
          color: "#fff",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={advance}
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          right: "2rem",
          transform: "translateY(-50%)",
          zIndex: 30,
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "9999px",
          color: "#fff",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll Down Chevron */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
