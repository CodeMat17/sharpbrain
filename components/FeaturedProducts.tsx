import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import { Product } from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = (products as Product[]).filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 bg-[#F9F6F1] dark:bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Top Products"
          subtitle="Handpicked premium pieces for your home and office."
          className="mb-12"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
