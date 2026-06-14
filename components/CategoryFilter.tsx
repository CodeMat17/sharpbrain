"use client";

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
            "px-2.5 sm:px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 border",
            active === cat
              ? "bg-[#E87722] text-white border-[#E87722]"
              : "bg-transparent text-[#6B7280] dark:text-[#9CA3AF] border-border hover:border-[#E87722] hover:text-[#E87722]"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
