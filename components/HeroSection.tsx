"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, ChevronDown, Star } from "lucide-react";
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
    <section className="relative min-h-screen md:pt-20 pb-8 md:min-h-[95vh] flex items-center overflow-hidden bg-[#0F1E35]">
      {/* Animated floating orbs */}
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[#E87722]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={prefersReduced ? {} : { y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[5%] w-56 h-56 rounded-full bg-[#1a3259]/60 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-[30%] w-40 h-40 rounded-full bg-[#E87722]/5 blur-2xl pointer-events-none"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-0 w-full">
        <div className="max-w-3xl">
          {/* Trust badge row */}
          <motion.div
            {...fadeUp(0, prefersReduced)}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-[#E87722]/15 text-[#E87722] text-sm font-medium px-4 py-1.5 rounded-full border border-[#E87722]/25">
              <span className="size-1.5 rounded-full bg-[#E87722] animate-pulse" />
              Abuja&apos;s #1 Furniture Store
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 text-white/70 text-sm px-4 py-1.5 rounded-full border border-white/10">
              <Star className="size-3.5 text-[#E87722] fill-[#E87722]" />
              4.9/5 · 500+ happy clients
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1, prefersReduced)}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            Abuja&apos;s Home for{" "}
            <span className="relative inline-block">
              <span className="text-[#E87722]">Premium</span>
            </span>{" "}
            Furniture &amp;{" "}
            <span className="relative">
              <span className="relative z-10">Electronics</span>
              <motion.span
                initial={prefersReduced ? {} : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                style={{ transformOrigin: "0%" }}
                className="absolute bottom-1 left-0 right-0 h-[6px] bg-[#E87722]/30 rounded-full z-0"
              />
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            {...fadeUp(0.25, prefersReduced)}
            className="mt-6 text-lg md:text-xl text-white/65 leading-relaxed max-w-2xl"
          >
            Payment on delivery. Free professional installation.{" "}
            <span className="text-white/85 font-medium">We bring it to you — you just enjoy it.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4, prefersReduced)}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-2 bg-[#E87722] hover:bg-[#d06a1a] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#E87722]/30 hover:shadow-[#E87722]/50 hover:scale-[1.02] text-base"
            >
              <ShoppingBag className="size-5 group-hover:scale-110 transition-transform" />
              Shop Now
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-base backdrop-blur-sm"
            >
              <WhatsAppIcon className="size-5" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            {...fadeUp(0.55, prefersReduced)}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { value: "13+", label: "Years in Business" },
              { value: "500+", label: "Happy Clients" },
              { value: "Free", label: "Delivery & Install" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-[#E87722]">{value}</p>
                <p className="text-white/50 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating badge */}
      {/* <motion.div
        initial={prefersReduced ? false : { opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-24 right-6 md:right-12"
      >
        <div className="bg-[#E87722] text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl shadow-[#E87722]/40 animate-bounce">
          Free Delivery Across Abuja 🚚
        </div>
      </motion.div> */}

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
