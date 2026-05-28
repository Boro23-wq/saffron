"use client";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

const steps = [
  {
    number: "01",
    icon: "📍",
    title: "Drop your location",
    desc: "Tell us where you are. We'll show you home chefs cooking real meals within a few miles of you.",
  },
  {
    number: "02",
    icon: "🍽️",
    title: "Pick a dish you love",
    desc: "Browse authentic recipes from real home cooks — Mexican, Vietnamese, Ethiopian, Italian & more.",
  },
  {
    number: "03",
    icon: "🛵",
    title: "Get it delivered hot",
    desc: "Your meal is cooked fresh and delivered straight to your door, usually in under 45 minutes.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-32 px-6 bg-[#2C1A0E] relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FDF6EC 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#F99B2A] text-sm font-medium font-body uppercase tracking-widest">
            Simple process
          </span>
          <h2 className="display-font text-5xl md:text-6xl font-bold text-[#FDF6EC] mt-3 leading-none">
            How Saffron
            <br />
            <span className="text-[#F99B2A] italic">works</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row md:gap-0 gap-6">
          {steps.map((step, i) => (
            <Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="flex-1 relative bg-[#FDF6EC]/5 border border-[#FDF6EC]/10 rounded-3xl p-8 hover:border-[#F99B2A]/30 transition-colors duration-300"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="display-font text-6xl font-bold text-[#F99B2A]/20 absolute top-6 right-6">
                  {step.number}
                </div>
                <h3 className="display-font text-xl font-semibold text-[#FDF6EC] mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#FDF6EC]/50 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
              {i < 2 && (
                <div className="hidden md:flex items-center justify-center shrink-0 w-8">
                  <div className="w-full border-t border-dashed border-[#F99B2A]/40" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
