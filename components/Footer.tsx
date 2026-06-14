import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const WA_LINK = "https://wa.me/2349069372377";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Pre-footer CTA strip */}
      <div className="border-t border-white/10 bg-linear-to-r from-brand-navy via-[#1a2d4a] to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-bold text-white">
              Ready to order? We deliver across{" "}
              <span className="text-brand-orange">Abuja</span>.
            </p>
            <p className="text-white/50 text-sm mt-0.5">Payment on delivery · Free installation · 13+ years of trust</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-[#d06a1a] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="size-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/logo.webp"
                alt="Sharpbrain Business Ventures"
                width={120}
                height={34}
                className="h-9 w-auto object-contain"
              />
              <span className="font-display text-2xl font-bold">
                SHARP<span className="text-brand-orange">BRAIN</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Premium Furniture &amp; Electronics — Delivered to Your Door. Serving
              Abuja with quality and trust since 2011.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-white/8 hover:bg-brand-orange p-2.5 rounded-full transition-all duration-200 hover:scale-110"
              >
                <WhatsAppIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/sharpbrain_b_ventures_nig_ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/8 hover:bg-brand-orange p-2.5 rounded-full transition-all duration-200 hover:scale-110"
              >
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-orange mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-orange mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li className="leading-relaxed">Conakry Street, Wuse Zone 3, Abuja</li>
              <li>
                <a href="tel:+2349069372377" className="hover:text-white transition-colors">
                  +234 906 937 2377
                </a>
              </li>
              <li>
                <a href="tel:+2347011163784" className="hover:text-white transition-colors">
                  +234 701 116 3784
                </a>
              </li>
              <li>
                <a
                  href="mailto:sharpbrainbusinessventuresnglt@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  sharpbrainbusinessventuresnglt@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/30 text-xs">
          <span>© 2026 Sharpbrain Business Ventures Nig. Ltd. All rights reserved.</span>
          <span>Wuse Zone 3, Abuja, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
