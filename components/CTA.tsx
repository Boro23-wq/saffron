"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#FEF0DC]/40">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#2C1A0E] rounded-[2.5rem] p-14 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #F99B2A, transparent 70%)" }}
          />
          <div className="relative z-10">
            <div className="text-5xl mb-4">🧡</div>
            <h2 className="display-font text-4xl md:text-5xl font-bold text-[#FDF6EC] mb-4 leading-tight">
              Your neighbor is cooking<br />something <span className="text-[#F99B2A] italic">incredible</span> right now
            </h2>
            <p className="font-body text-[#FDF6EC]/50 mb-8 max-w-md mx-auto">
              Stop eating sad takeout. Start eating the way food was meant to be — made with love, by real people.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#F99B2A] text-white px-10 py-4 rounded-full font-body font-medium text-base shadow-xl shadow-[#F99B2A]/30 hover:bg-[#E87E0A] transition-colors"
            >
              Order your first meal →
            </motion.button>
            <p className="font-body text-xs text-[#FDF6EC]/30 mt-4">No subscription required to get started</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
