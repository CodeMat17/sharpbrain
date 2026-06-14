"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    role: "Interior Designer, Abuja",
    text: "Sharpbrain exceeded every expectation. The executive desk I ordered arrived on time, was installed perfectly, and the quality is absolutely premium. My clients keep asking where I got it!",
    rating: 5,
    initials: "AO",
  },
  {
    name: "Ibrahim Musa",
    role: "CEO, Musa Holdings",
    text: "We furnished our entire office through Sharpbrain — 20 workstations, conference room, reception. Everything arrived in one delivery, was installed the same day. Exceptional service.",
    rating: 5,
    initials: "IM",
  },
  {
    name: "Chioma Nwosu",
    role: "Homeowner, Wuse 2",
    text: "I was nervous about buying furniture without seeing it first, but the payment-on-delivery policy made it so easy. The living room set is gorgeous. Already referred 3 friends!",
    rating: 5,
    initials: "CN",
  },
];

export default function Testimonials() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-20 bg-[#0F1E35] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#E87722]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#1a3259]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            What Our <span className="text-[#E87722]">Clients Say</span>
          </h2>
          <p className="mt-3 text-white/60 text-lg max-w-xl mx-auto">
            Trusted by hundreds of homes and businesses across Abuja.
          </p>
          <div className="mt-4 h-1 w-16 bg-[#E87722] rounded-full mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text, rating, initials }, i) => (
            <motion.div
              key={name}
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/8 hover:border-[#E87722]/30 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="size-8 text-[#E87722]/40 shrink-0" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} className="size-4 text-[#E87722] fill-[#E87722]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/75 text-sm leading-relaxed flex-1">{text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="size-10 rounded-full bg-[#E87722] flex items-center justify-center font-bold text-white text-sm shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{name}</p>
                  <p className="text-white/50 text-xs">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-white/60 text-sm"
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 text-[#E87722] fill-[#E87722]" />
            ))}
          </div>
          <span>
            <strong className="text-white">4.9/5</strong> average rating from{" "}
            <strong className="text-white">500+</strong> satisfied clients
          </span>
        </motion.div>
      </div>
    </section>
  );
}
