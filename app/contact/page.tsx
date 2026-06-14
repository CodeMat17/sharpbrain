import { Phone, Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import SectionHeader from "@/components/SectionHeader";
import MapEmbed from "@/components/MapEmbed";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Sharpbrain Business Ventures. Call, WhatsApp, or visit us in Wuse Zone 3, Abuja.",
  openGraph: {
    title: "Contact | Sharpbrain Business Ventures",
    description: "Get in touch with Sharpbrain Business Ventures. Call, WhatsApp, or visit us in Wuse Zone 3, Abuja.",
    images: [{ url: "/logo.webp", alt: "Sharpbrain Business Ventures" }],
  },
  alternates: { canonical: "/contact" },
};

const WA_LINK = "https://wa.me/2349069372377";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 906 937 2377",
    href: "tel:+2349069372377",
  },
  {
    icon: Phone,
    label: "Phone 2",
    value: "+234 701 116 3784",
    href: "tel:+2347011163784",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sharpbrainbusinessventuresnglt@gmail.com",
    href: "mailto:sharpbrainbusinessventuresnglt@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Conakry Street, Wuse Zone 3, Abuja, Nigeria",
    href: null,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@sharpbrain_b_ventures_nig_ltd",
    href: "https://www.instagram.com/sharpbrain_b_ventures_nig_ltd",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-cream dark:bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="We'd love to hear from you. Reach us via phone, email, or WhatsApp."
          className="mb-12"
        />

        {/* Two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white dark:bg-[#111827] rounded-2xl p-5 shadow-sm relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-6 h-6"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 0 100%)",
                    backgroundColor: "#E87722",
                  }}
                />
                <div className="size-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Icon className="size-5 text-brand-orange" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted dark:text-[#9CA3AF] mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-brand-navy dark:text-white hover:text-brand-orange transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-brand-navy dark:text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb359] text-white font-semibold py-4 rounded-2xl text-lg transition-colors duration-200 shadow-md"
            >
              <WhatsAppIcon className="size-6" />
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Map */}
          <MapEmbed />
        </div>
      </div>
    </div>
  );
}
