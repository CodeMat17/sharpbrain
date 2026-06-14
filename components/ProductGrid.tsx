"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProductCard, { Product } from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";

interface ProductGridProps {
  products: Product[];
  showFilter?: boolean;
}

export default function ProductGrid({ products, showFilter = true }: ProductGridProps) {
  const [active, setActive] = useState("All");
  const prefersReduced = useReducedMotion();

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-8">
      {showFilter && (
        <CategoryFilter active={active} onChange={setActive} />
      )}

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={prefersReduced ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-[#6B7280] py-12">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
