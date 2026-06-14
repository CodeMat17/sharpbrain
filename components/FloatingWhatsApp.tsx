"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WA_LINK =
  "https://wa.me/2349069372377?text=Hello%20Sharpbrain!%20I%27d%20like%20to%20know%20more%20about%20your%20products%20and%20services.";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 80 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative flex items-center gap-2">
            <AnimatePresence>
              {tooltip && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="bg-[#0F1E35] text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                >
                  Chat with us on WhatsApp
                </motion.span>
              )}
            </AnimatePresence>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              onMouseEnter={() => setTooltip(true)}
              onMouseLeave={() => setTooltip(false)}
              className="relative flex items-center justify-center size-14 bg-[#25D366] hover:bg-[#1fb359] rounded-full shadow-xl transition-colors duration-200 pulse-ring"
            >
              <WhatsAppIcon className="size-7 text-white" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
