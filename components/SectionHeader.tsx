"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlight?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  highlight,
}: SectionHeaderProps) {
  const prefersReduced = useReducedMotion();

  const rendered = highlight
    ? title.replace(
        highlight,
        `<span class="text-brand-orange">${highlight}</span>`
      )
    : title;

  return (
    <motion.div
      className={cn(centered && "text-center", className)}
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2
        className="font-display text-3xl md:text-4xl font-bold text-brand-navy dark:text-white"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
      {subtitle && (
        <p className="mt-3 text-brand-muted dark:text-[#9CA3AF] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-4 h-1 w-16 bg-brand-orange rounded-full", centered && "mx-auto")} />
    </motion.div>
  );
}
