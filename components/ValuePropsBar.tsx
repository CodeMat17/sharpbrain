"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Truck, Wrench, MapPin, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: ShieldCheck,
    title: "Payment on Delivery",
    desc: "Pay only when your order arrives safely at your doorstep.",
    stat: "100%",
    statLabel: "Risk-free",
  },
  {
    icon: Wrench,
    title: "Free Installation",
    desc: "Our professional team handles full setup at zero extra cost.",
    stat: "Free",
    statLabel: "Always",
  },
  {
    icon: Truck,
    title: "Abuja-Wide Delivery",
    desc: "Fast, careful delivery to every corner of Abuja.",
    stat: "1–3",
    statLabel: "Days delivery",
  },
  {
    icon: MapPin,
    title: "13+ Years of Trust",
    desc: "Wuse Zone 3's most trusted furniture and electronics store.",
    stat: "500+",
    statLabel: "Happy clients",
  },
];

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  return <span>{target}{suffix}</span>;
}

export default function ValuePropsBar() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative bg-gradient-to-b from-[#0F1E35] to-[#0a1628] overflow-hidden">
      {/* Separator line with glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E87722]/40 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {props.map(({ icon: Icon, title, desc, stat, statLabel }, i) => (
            <motion.div
              key={title}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-white/3 hover:bg-white/6 hover:border-[#E87722]/20 transition-all duration-300"
            >
              {/* Orange corner accent */}
              <div
                className="absolute top-0 left-0 w-8 h-8 rounded-tl-2xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  backgroundColor: "#E87722",
                  opacity: 0.6,
                }}
              />

              {/* Icon */}
              <div className="size-12 rounded-xl bg-[#E87722]/15 group-hover:bg-[#E87722]/25 flex items-center justify-center transition-colors duration-300">
                <Icon className="size-6 text-[#E87722]" />
              </div>

              {/* Stat */}
              <div>
                <p className="font-display text-3xl font-bold text-white">
                  <CountUp target={stat} />
                </p>
                <p className="text-[#E87722] text-xs font-medium uppercase tracking-wider mt-0.5">{statLabel}</p>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
