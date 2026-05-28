"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Taste",
    price: "Free",
    desc: "Try before you commit",
    features: ["3 orders per month", "Access to all chefs", "Standard delivery", "Email support"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Regular",
    price: "$9",
    period: "/mo",
    desc: "For the dedicated foodies",
    features: ["Unlimited orders", "Priority delivery", "Early access to new chefs", "5% off every order", "Chat support"],
    cta: "Get Regular",
    highlight: true,
  },
  {
    name: "Chef's Table",
    price: "$19",
    period: "/mo",
    desc: "The full Saffron experience",
    features: ["Everything in Regular", "Free delivery always", "Chef customizations", "Monthly chef collab", "Phone support", "10% off every order"],
    cta: "Get Chef's Table",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 bg-[#FDF6EC]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#F99B2A] text-sm font-medium font-body uppercase tracking-widest">Simple pricing</span>
          <h2 className="display-font text-5xl md:text-6xl font-bold text-[#2C1A0E] mt-3">
            Eat well,<br /><span className="text-[#F99B2A] italic">spend less</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-7 border-2 transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#2C1A0E] border-[#2C1A0E] shadow-2xl shadow-[#2C1A0E]/20 scale-105"
                  : "bg-white border-[#FDD9A8]/60 hover:border-[#F99B2A]/40"
              }`}
            >
              {plan.highlight && (
                <div className="bg-[#F99B2A] text-white text-xs font-medium font-body px-3 py-1 rounded-full inline-block mb-4">Most popular</div>
              )}
              <h3 className={`display-font text-xl font-bold mb-1 ${plan.highlight ? "text-[#FDF6EC]" : "text-[#2C1A0E]"}`}>{plan.name}</h3>
              <p className={`text-xs font-body mb-4 ${plan.highlight ? "text-[#FDF6EC]/50" : "text-[#2C1A0E]/50"}`}>{plan.desc}</p>
              <div className={`display-font text-4xl font-bold mb-6 ${plan.highlight ? "text-[#FDF6EC]" : "text-[#2C1A0E]"}`}>
                {plan.price}
                {plan.period && <span className="text-lg font-normal opacity-50">{plan.period}</span>}
              </div>
              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm font-body ${plan.highlight ? "text-[#FDF6EC]/70" : "text-[#2C1A0E]/60"}`}>
                    <span className="text-[#F99B2A] text-xs">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-full text-sm font-medium font-body transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#F99B2A] text-white hover:bg-[#E87E0A]"
                    : "border-2 border-[#2C1A0E] text-[#2C1A0E] hover:bg-[#2C1A0E] hover:text-white"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
