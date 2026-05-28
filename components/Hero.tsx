"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const dishes = [
    { emoji: "🍛", name: "Butter Chicken", chef: "Priya S.", price: "$14", top: "15%", left: "5%", delay: 0.3 },
    { emoji: "🥘", name: "Lamb Tagine", chef: "Hassan M.", price: "$18", top: "60%", left: "2%", delay: 0.5 },
    { emoji: "🍜", name: "Pho Bo", chef: "Linh T.", price: "$12", top: "20%", right: "4%", delay: 0.4 },
    { emoji: "🫕", name: "Shakshuka", chef: "Amal K.", price: "$11", top: "65%", right: "3%", delay: 0.6 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDF6EC]">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2C1A0E 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Warm gradient blob */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F99B2A 0%, #FDD9A8 50%, transparent 70%)" }}
      />

      {/* Floating dish cards */}
      {dishes.map((dish, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: dish.delay, duration: 0.6 },
            y: { delay: dish.delay, duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute hidden lg:block"
          style={{ top: dish.top, left: dish.left, right: dish.right }}
        >
          <div className="bg-white rounded-2xl p-3 shadow-xl shadow-[#F99B2A]/10 border border-[#FDD9A8]/50 w-36">
            <div className="text-3xl mb-1">{dish.emoji}</div>
            <div className="display-font text-xs font-semibold text-[#2C1A0E]">{dish.name}</div>
            <div className="text-[10px] text-[#2C1A0E]/50 font-body">by {dish.chef}</div>
            <div className="text-sm font-semibold text-[#F99B2A] mt-1 font-body">{dish.price}</div>
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="inline-flex items-center gap-2 bg-[#F99B2A]/10 border border-[#F99B2A]/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#F99B2A] animate-pulse" />
          <span className="text-sm font-medium font-body text-[#C46207]">Now delivering in 12 cities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="display-font text-6xl md:text-8xl font-bold text-[#2C1A0E] leading-[0.95] tracking-tight mb-6"
        >
          Real food from
          <br />
          <span className="text-[#F99B2A] italic">real kitchens</span>
          <br />
          near you
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-body text-lg md:text-xl text-[#2C1A0E]/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Home chefs in your neighborhood cook authentic meals with love.
          No restaurants. No factories. Just grandma-level goodness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <div className="flex items-center bg-white rounded-full px-2 py-2 shadow-xl shadow-[#2C1A0E]/5 border border-[#FDD9A8]">
            <input
              type="text"
              placeholder="Enter your address..."
              className="px-4 py-1 text-sm font-body text-[#2C1A0E] bg-transparent outline-none w-56 placeholder:text-[#2C1A0E]/30"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F99B2A] text-white px-5 py-2.5 rounded-full text-sm font-medium font-body"
            >
              Find meals
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 flex items-center justify-center gap-8 text-sm font-body text-[#2C1A0E]/50"
        >
          {[["500+", "Home Chefs"], ["4.9★", "Avg Rating"], ["30min", "Avg Delivery"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="display-font text-xl font-bold text-[#2C1A0E]">{val}</div>
              <div className="text-xs">{label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#2C1A0E]/30"
      >
        <span className="text-xs font-body">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2C1A0E]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
