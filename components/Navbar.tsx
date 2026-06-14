"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ThemeToggle from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const WA_LINK =
  "https://wa.me/2349069372377?text=Hello%20Sharpbrain!%20I%27d%20like%20to%20know%20more%20about%20your%20products%20and%20services.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpenAt, setMenuOpenAt] = useState<string | null>(null);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();

  const open = menuOpenAt === pathname;
  const setOpen = (val: boolean) => setMenuOpenAt(val ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-brand-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center shrink-0 gap-2'
          aria-label='Sharpbrain Business Ventures home'>
          <Image
            src='/logo.webp'
            alt='Sharpbrain Business Ventures'
            width={140}
            height={40}
            priority
            className='h-10 w-auto object-contain'
          />
          <span className='font-display text-lg font-bold text-white'>
            SHARP<span className='text-brand-orange'>BRAIN</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className='hidden md:flex items-center gap-8'>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === href
                    ? "text-brand-orange"
                    : "text-white/80 hover:text-white",
                )}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className='flex items-center gap-2'>
          <ThemeToggle
            iconClassName={
              solid
                ? "text-white hover:text-white hover:bg-white/10"
                : undefined
            }
          />
          <a
            href={WA_LINK}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat on WhatsApp'
            className='hidden sm:flex items-center gap-1.5 bg-brand-orange hover:bg-[#d06a1a] text-white text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-200'>
            <WhatsAppIcon className='size-4' />
            WhatsApp
          </a>
          <button
            className="md:hidden p-1 transition-colors duration-300 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}>
            {open ? <X className='size-6' /> : <Menu className='size-6' />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key='mobile-menu'
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='md:hidden bg-brand-navy border-t border-white/10 px-4 pb-6 pt-4'>
            <ul className='flex flex-col gap-4'>
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "block text-base font-medium py-1 transition-colors",
                      pathname === href ? "text-[#E87722]" : "text-white/80",
                    )}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-4 flex items-center justify-center gap-2 bg-brand-orange text-white font-medium py-2.5 rounded-lg'>
              <WhatsAppIcon className='size-4' />
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
