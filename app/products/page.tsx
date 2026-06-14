import products from "@/data/products.json";
import { Product } from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";
import PageHero from "@/components/PageHero";

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
    <div className="min-h-screen bg-brand-cream dark:bg-[#0A0F1A]">
      <PageHero
        title="Our Products"
        subtitle="Quality furniture and electronics — for your home, office, and beyond."
        breadcrumb="Products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductGrid products={products as Product[]} showFilter />
      </div>
    </div>
  );
}
