"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
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

const WA_NUMBER = "2349069372377";

export default function ProductCard({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  const formattedPrice = formatPrice(product.price, product.priceOnRequest);
  const isPriceOnRequest = product.priceOnRequest || product.price === null;

  const waText = encodeURIComponent(
    `Hello Sharpbrain! I'm interested in: *${product.name}*. Could you provide more details?`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  return (
    <>
      <motion.div
        whileHover={prefersReduced ? undefined : { y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/40 transition-shadow duration-300 flex flex-col relative group border border-transparent hover:border-brand-orange/20"
      >
        {/* Badge ribbon */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-20 bg-[#E87722] text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg shadow-brand-orange/30">
            {product.badge}
          </div>
        )}

        {/* Diagonal orange slash accent */}
        <div
          className="absolute top-0 left-0 z-20 w-10 h-10 pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            backgroundColor: "#E87722",
          }}
        />

        {/* Image + hover overlay */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-108"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Hover overlay with quick actions */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 gap-2 z-10">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb359] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg transition-colors duration-200"
            >
              <MessageCircle className="size-3.5" />
              Quick Enquiry
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          {/* Category */}
          <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full w-fit">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="font-semibold text-base text-brand-navy dark:text-white leading-snug">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-brand-muted dark:text-[#9CA3AF] leading-relaxed line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Price */}
          <p
            className={
              isPriceOnRequest
                ? "text-sm italic text-brand-muted dark:text-[#9CA3AF]"
                : "text-lg font-bold text-brand-orange"
            }
          >
            {formattedPrice}
          </p>

          {/* CTA */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-[#d06a1a] text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:shadow-brand-orange/30"
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
