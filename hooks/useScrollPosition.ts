"use client";

import { useState, useEffect } from "react";

export function useScrollPosition(threshold: number = 80): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check immediately on mount
    checkScroll();

    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, [threshold]);

  return isScrolled;
}
