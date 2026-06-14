import products from "@/data/products.json";
import { Product } from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Products",
  description: "Browse our full range of premium furniture and electronics in Abuja. Office chairs, dining tables, executive desks and more.",
  openGraph: {
    title: "Products | Sharpbrain Business Ventures",
    description: "Browse our full range of premium furniture and electronics in Abuja.",
    images: [{ url: "/logo.webp", alt: "Sharpbrain Business Ventures" }],
  },
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F9F6F1] dark:bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Products"
          subtitle="Quality furniture and electronics — for your home, office, and beyond."
          className="mb-10"
        />
        <ProductGrid products={products as Product[]} showFilter />
      </div>
    </div>
  );
}
