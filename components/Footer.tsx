import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const WA_LINK = "https://wa.me/2349069372377";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
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
            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              Premium Furniture &amp; Electronics — Delivered to Your Door. Serving
              Abuja with quality and trust.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-white/10 hover:bg-brand-orange p-2 rounded-full transition-colors"
              >
                <WhatsAppIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/sharpbrain_b_ventures_nig_ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-brand-orange p-2 rounded-full transition-colors"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-brand-orange p-2 rounded-full transition-colors"
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
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-brand-orange mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Conakry Street, Wuse Zone 3, Abuja</li>
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

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 Sharpbrain Business Ventures Nig. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
