"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WA_LINK = "https://wa.me/2349069372377";

function fadeUp(delay: number, prefersReduced: boolean | null) {
  if (prefersReduced) return {};
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  };
}

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden bg-[#0F1E35]">
      {/* Diagonal texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            #E87722 20px,
            #E87722 21px
          )`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E35] via-[#0F1E35]/90 to-[#1a3259]/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0 w-full">
        <div className="max-w-3xl">
          <motion.div {...fadeUp(0, prefersReduced)}>
            <span className="inline-block bg-[#E87722]/20 text-[#E87722] text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-[#E87722]/30">
              Abuja&apos;s Premier Furniture & Electronics Store
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1, prefersReduced)}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            Abuja&apos;s Home for{" "}
            <span className="text-[#E87722]">Premium Furniture</span> &amp;
            Electronics
          </motion.h1>

          <motion.p
            {...fadeUp(0.25, prefersReduced)}
            className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed"
          >
            Payment on delivery. Free installation. We bring it to you.
          </motion.p>

          <motion.div
            {...fadeUp(0.4, prefersReduced)}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#E87722] hover:bg-[#d06a1a] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <ShoppingBag className="size-5" />
              Shop Now
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 right-6 md:right-12"
      >
        <div className="bg-[#E87722] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl animate-bounce">
          Free Delivery Across Abuja 🚚
        </div>
      </motion.div>
    </section>
  );
}
