"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";
import OrderModal from "@/components/OrderModal";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | null;
  priceOnRequest: boolean;
  badge: string | null;
  image: string;
  description: string;
  featured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const formattedPrice = formatPrice(product.price, product.priceOnRequest);
  const isPriceOnRequest = product.priceOnRequest || product.price === null;

  return (
    <>
      <motion.div
        whileHover={prefersReduced ? undefined : { scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col relative group"
      >
        {/* Badge ribbon */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10 bg-[#E87722] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            {product.badge}
          </div>
        )}

        {/* Diagonal orange slash accent */}
        <div
          className="absolute top-0 left-0 z-10 w-12 h-12 pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            backgroundColor: "#E87722",
          }}
        />

        {/* Image */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 2640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          {/* Category */}
          <span className="text-xs font-medium text-[#E87722] bg-[#E87722]/10 px-2.5 py-0.5 rounded-full w-fit">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="font-semibold text-base text-[#0F1E35] dark:text-white leading-snug">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Price */}
          <p
            className={
              isPriceOnRequest
                ? "text-sm italic text-[#6B7280] dark:text-[#9CA3AF]"
                : "text-lg font-bold text-[#E87722]"
            }
          >
            {formattedPrice}
          </p>

          {/* CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#E87722] hover:bg-[#d06a1a] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
          >
            <ShoppingCart className="size-4" />
            Order Now
          </button>
        </div>
      </motion.div>

      <OrderModal
        product={product.name}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
