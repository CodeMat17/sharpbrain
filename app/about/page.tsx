import { Truck, Wrench, MapPin, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us",
  description: "Learn about Sharpbrain Business Ventures — Abuja's home for premium furniture and electronics since 2011.",
  openGraph: {
    title: "About Us | Sharpbrain Business Ventures",
    description: "Learn about Sharpbrain Business Ventures — Abuja's home for premium furniture and electronics since 2011.",
    images: [{ url: "/logo.webp", alt: "Sharpbrain Business Ventures" }],
  },
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Star, title: "Quality First", desc: "Every product is vetted for durability and premium finish." },
  { icon: Truck, title: "Delivery & Setup", desc: "We handle logistics and installation across Abuja." },
  { icon: Wrench, title: "After-Sale Support", desc: "Our team is on hand post-delivery to ensure satisfaction." },
  { icon: MapPin, title: "Local Expertise", desc: "13+ years navigating the Abuja market for our clients." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-[#0A0F1A]">
      <PageHero
        title="Who We Are"
        subtitle="Abuja's trusted source for premium furniture and electronics since 2011."
        breadcrumb="About Us"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-navy dark:text-white text-lg leading-relaxed mb-5">
            Sharpbrain Business Ventures Nig. Ltd. is a premier supplier of high-quality furniture
            and consumer electronics based in Wuse Zone 3, Abuja. Founded with a simple mission —
            to make premium living and working spaces accessible to every Nigerian — we have grown
            to become one of Abuja&apos;s most trusted names in furnishing and electronics.
          </p>
          <p className="text-brand-muted dark:text-[#9CA3AF] text-base leading-relaxed">
            From executive office solutions to elegant home furniture and the latest electronics, we
            combine competitive pricing, reliable delivery, and professional installation to deliver
            a truly end-to-end experience. Payment on delivery means you only pay when you&apos;re
            satisfied.
          </p>
        </div>

        {/* Values */}
        <SectionHeader title="Why Choose Us" className="mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <div
                className="absolute top-0 left-0 w-8 h-8 group-hover:w-12 group-hover:h-12 transition-all duration-300"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)", backgroundColor: "#E87722" }}
              />
              <div className="size-12 rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <Icon className="size-6 text-brand-orange" />
              </div>
              <h3 className="font-semibold text-brand-navy dark:text-white mb-2">{title}</h3>
              <p className="text-brand-muted dark:text-[#9CA3AF] text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader title="Find Us" centered={false} className="mb-6" />
            <ul className="space-y-3 text-brand-navy dark:text-white text-sm">
              <li><span className="font-semibold">Address:</span> Conakry Street, Wuse Zone 3, Abuja, Nigeria</li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+2349069372377" className="text-brand-orange">+234 906 937 2377</a>
              </li>
              <li>
                <span className="font-semibold">Phone 2:</span>{" "}
                <a href="tel:+2347011163784" className="text-brand-orange">+234 701 116 3784</a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:sharpbrainbusinessventuresnglt@gmail.com" className="text-brand-orange break-all">
                  sharpbrainbusinessventuresnglt@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/sharpbrain_b_ventures_nig_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange"
                >
                  @sharpbrain_b_ventures_nig_ltd
                </a>
              </li>
            </ul>
          </div>
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
