"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const categories = ["All", "Home Furniture", "Office Solutions"];

interface CategoryFilterProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 border",
            active === cat
              ? "text-white border-brand-orange"
              : "bg-transparent text-brand-muted dark:text-[#9CA3AF] border-border hover:border-brand-orange hover:text-brand-orange"
          )}
        >
          {active === cat && (
            <motion.span
              layoutId="category-pill"
              className="absolute inset-0 bg-brand-orange rounded-full -z-10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          {cat}
        </button>
      ))}
    </div>
  );
}
