import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import HeroSection from "@/components/HeroSection";
import ValuePropsBar from "@/components/ValuePropsBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import SectionHeader from "@/components/SectionHeader";

const WA_LINK = "https://wa.me/2349069372377";

function AboutTeaser() {
  const stats = [
    { value: "13+", label: "Years in Business" },
    { value: "500+", label: "Happy Clients" },
    { value: "#1", label: "In Abuja" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Who We Are"
              subtitle="Sharpbrain Business Ventures has been Abuja's trusted source for premium furniture and electronics since 2011."
              centered={false}
              className="mb-6"
            />
            <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed mb-6">
              Located on Conakry Street, Wuse Zone 3, we&apos;ve built our reputation on quality
              products, honest pricing, and exceptional service. From executive office setups to
              complete home furnishings, we deliver and install — so you can focus on what matters.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[#E87722] font-semibold hover:underline"
            >
              Learn more about us →
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="relative bg-[#0F1E35] dark:bg-[#0A0F1A] rounded-2xl p-6 text-center overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-8 h-8"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                    backgroundColor: "#E87722",
                  }}
                />
                <p className="font-display text-3xl font-bold text-[#E87722]">{value}</p>
                <p className="text-white/60 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-16 bg-[#0F1E35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to furnish your space?
        </h2>
        <p className="text-white/60 text-lg mb-8">
          Talk to us directly — we&apos;ll help you find the perfect fit.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#d06a1a] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 text-lg"
        >
          <WhatsAppIcon className="size-5" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuePropsBar />
      <FeaturedProducts />
      <AboutTeaser />
      <CTABanner />
    </>
  );
}
