import Link from "next/link";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import HeroSection from "@/components/HeroSection";
import ValuePropsBar from "@/components/ValuePropsBar";
import FeaturedProducts from "@/components/FeaturedProducts";
import SectionHeader from "@/components/SectionHeader";
import Testimonials from "@/components/Testimonials";

const WA_LINK = "https://wa.me/2349069372377";

function AboutTeaser() {
  const stats = [
    { value: "13+", label: "Years in Business" },
    { value: "500+", label: "Happy Clients" },
    { value: "#1", label: "In Abuja" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#111827] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Who We Are"
              highlight="Who"
              subtitle="Sharpbrain Business Ventures has been Abuja's trusted source for premium furniture and electronics since 2011."
              centered={false}
              className="mb-6"
            />
            <p className="text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed mb-8">
              Located on Conakry Street, Wuse Zone 3, we&apos;ve built our reputation on quality
              products, honest pricing, and exceptional service. From executive office setups to
              complete home furnishings, we deliver and install — so you can focus on what matters.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#0F1E35] dark:bg-[#E87722] hover:bg-[#E87722] dark:hover:bg-[#d06a1a] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E87722]/30 hover:scale-[1.02]"
            >
              Learn more about us
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="relative bg-[#0F1E35] dark:bg-[#0A0F1A] rounded-2xl p-6 text-center overflow-hidden group hover:scale-[1.03] transition-transform duration-200"
              >
                <div
                  className="absolute top-0 left-0 w-8 h-8 group-hover:w-12 group-hover:h-12 transition-all duration-300"
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
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E87722] via-[#d06a1a] to-[#b85d16]" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.3) 20px,
            rgba(255,255,255,0.3) 21px
          )`,
        }}
      />

      {/* Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/80 font-medium text-sm uppercase tracking-widest mb-3">
          Payment on Delivery · Free Installation · Abuja-Wide
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Ready to furnish your space?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Talk to us directly — we&apos;ll help you find the perfect fit for your home or office.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#E87722] font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.03] text-lg"
          >
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </a>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg hover:bg-white/10"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen font-bold text-5xl">
      Shot down
    </div>
      {/* <HeroSection /> */}
      {/* <ValuePropsBar /> */}
      {/* <FeaturedProducts /> */}
      {/* <AboutTeaser /> */}
      {/* <Testimonials /> */}
      {/* <CTABanner /> */}
    </>
  );
}
