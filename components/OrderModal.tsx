"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface OrderModalProps {
  product: string;
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  phone: string;
  address: string;
  quantity: number;
  note: string;
}

interface Errors {
  name?: string;
  phone?: string;
  address?: string;
}

const WA_NUMBER = "2349069372377";

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  const prefersReduced = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    note: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.address.trim()) e.address = "Delivery address is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    const message = encodeURIComponent(
      `Hello Sharpbrain! 👋 I'd like to place an order:\n\n` +
      `🛒 Product: ${product}\n` +
      `🔢 Quantity: ${form.quantity}\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📍 Address: ${form.address}\n` +
      `📝 Note: ${form.note || "None"}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
    onClose();
  }

  function field(
    label: string,
    key: keyof FormState,
    type: string = "text",
    props: Record<string, unknown> = {}
  ) {
    const error = errors[key as keyof Errors];
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-[#0F1E35] dark:text-white">
          {label}
        </label>
        <input
          type={type}
          value={String(form[key])}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              [key]: type === "number" ? Math.max(1, Number(e.target.value)) : e.target.value,
            }))
          }
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#E87722]/50 focus:border-[#E87722]"
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }

  const backdropVariants = prefersReduced
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 0.5 }, exit: { opacity: 0 } };

  const modalVariants = prefersReduced
    ? {}
    : {
        initial: { opacity: 0, y: "100%", scale: 0.95 },
        animate: { opacity: 1, y: "0%", scale: 1 },
        exit: { opacity: 0, y: "100%", scale: 0.95 },
      };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            {...backdropVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            {...modalVariants}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center z-50 pointer-events-none"
          >
            <div className="bg-background w-full md:w-full md:max-w-lg rounded-t-2xl md:rounded-2xl shadow-2xl pointer-events-auto max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="font-display text-xl font-bold text-[#0F1E35] dark:text-white">
                  Place an Order
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="rounded-full p-1.5 hover:bg-muted transition-colors"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4">
                {/* Product tag */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#0F1E35] dark:text-white">
                    Product
                  </label>
                  <div className="inline-flex">
                    <span className="bg-[#E87722]/10 text-[#E87722] border border-[#E87722]/30 text-sm font-medium px-3 py-1.5 rounded-lg">
                      {product}
                    </span>
                  </div>
                </div>

                {field("Full Name *", "name")}
                {field("Phone Number *", "phone", "tel")}
                {field("Delivery Address in Abuja *", "address")}
                {field("Quantity", "quantity", "number", { min: 1 })}

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#0F1E35] dark:text-white">
                    Note (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                    placeholder="Any special requests or details..."
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#E87722]/50 focus:border-[#E87722] resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#E87722] hover:bg-[#d06a1a] text-white font-semibold py-3 rounded-lg transition-colors duration-200 mt-2"
                >
                  Send Order via WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
