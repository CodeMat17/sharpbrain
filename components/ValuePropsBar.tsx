"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Truck, Wrench, MapPin } from "lucide-react";

const props = [
  {
    icon: Truck,
    title: "Payment on Delivery",
    desc: "Pay only when your order arrives at your doorstep.",
  },
  {
    icon: Wrench,
    title: "Free Installation",
    desc: "Our team handles full setup at no extra cost.",
  },
  {
    icon: MapPin,
    title: "Abuja-Wide Delivery",
    desc: "We deliver to every corner of Abuja.",
  },
];

export default function ValuePropsBar() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-[#0F1E35] dark:bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={prefersReduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 flex items-center justify-center size-12 rounded-xl bg-[#E87722]/20">
                <Icon className="size-6 text-[#E87722]" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">{title}</h3>
                <p className="text-white/60 text-sm mt-1">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
