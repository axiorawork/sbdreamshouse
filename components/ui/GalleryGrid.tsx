"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  return (
    <>
      {/* Masonry grid */}
      <div
        style={{
          columns: "3 220px",
          gap: "1rem",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openLightbox(i)}
            style={{
              position: "relative",
              breakInside: "avoid",
              marginBottom: "1rem",
              borderRadius: "12px",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: "#f0f0f0",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={i % 3 === 0 ? 400 : 280}
              className="object-cover w-full"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {/* Hover overlay */}
            <div
              className="gallery-overlay"
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0)"; }}
            >
              <ZoomIn size={32} color="rgba(255,255,255,0)" style={{ transition: "color 0.3s" }} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "rgba(0,0,0,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              aria-label="Close lightbox"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "9999px",
                color: "#fff",
                cursor: "pointer",
                zIndex: 101,
              }}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              style={{
                position: "absolute",
                left: "1rem",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "9999px",
                color: "#fff",
                cursor: "pointer",
                zIndex: 101,
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                width={1200}
                height={800}
                className="object-contain"
                style={{ maxWidth: "90vw", maxHeight: "85vh", borderRadius: "8px" }}
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              style={{
                position: "absolute",
                right: "1rem",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "9999px",
                color: "#fff",
                cursor: "pointer",
                zIndex: 101,
              }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Counter */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px",
              }}
            >
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
