import { Truck, Wrench, MapPin, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import MapEmbed from "@/components/MapEmbed";

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
    <div className="pt-24 pb-20 min-h-screen bg-[#F9F6F1] dark:bg-[#0A0F1A]">
      {/* Hero banner */}
      <div className="bg-[#0F1E35] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Who We Are
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Abuja&apos;s trusted source for premium furniture and electronics since 2011.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#0F1E35] dark:text-white text-lg leading-relaxed mb-5">
            Sharpbrain Business Ventures Nig. Ltd. is a premier supplier of high-quality furniture
            and consumer electronics based in Wuse Zone 3, Abuja. Founded with a simple mission —
            to make premium living and working spaces accessible to every Nigerian — we have grown
            to become one of Abuja&apos;s most trusted names in furnishing and electronics.
          </p>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-base leading-relaxed">
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
              className="bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-8 h-8"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 0 100%)",
                  backgroundColor: "#E87722",
                }}
              />
              <div className="size-12 rounded-xl bg-[#E87722]/10 flex items-center justify-center mb-4">
                <Icon className="size-6 text-[#E87722]" />
              </div>
              <h3 className="font-semibold text-[#0F1E35] dark:text-white mb-2">{title}</h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader title="Find Us" centered={false} className="mb-6" />
            <ul className="space-y-3 text-[#0F1E35] dark:text-white text-sm">
              <li>
                <span className="font-semibold">Address:</span> Conakry Street, Wuse Zone 3, Abuja, Nigeria
              </li>
              <li>
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+2349069372377" className="text-[#E87722]">+234 906 937 2377</a>
              </li>
              <li>
                <span className="font-semibold">Phone 2:</span>{" "}
                <a href="tel:+2347011163784" className="text-[#E87722]">+234 701 116 3784</a>
              </li>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:sharpbrainbusinessventuresnglt@gmail.com" className="text-[#E87722] break-all">
                  sharpbrainbusinessventuresnglt@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/sharpbrain_b_ventures_nig_ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E87722]"
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
