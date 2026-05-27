"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LogoHeader() {
  return (
    <div className="fixed -top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <Link href="/" className="pointer-events-auto block">
        <motion.img
          layoutId="brand-logo"
          src="/logo.webp"
          alt="S&B Dreams House Logo"
          width={280}
          height={280}
          className="object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        />
      </Link>
    </div>
  );
}
