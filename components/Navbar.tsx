"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 50));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FDF6EC]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="display-font text-2xl font-bold text-[#2C1A0E]"
          whileHover={{ scale: 1.02 }}
        >
          🧡 Saffron
        </motion.div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-[#2C1A0E]/70">
          {["How it works", "Chefs", "Menu", "Pricing"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-[#F99B2A] transition-colors duration-200"
              whileHover={{ y: -1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#F99B2A] text-white px-5 py-2.5 rounded-full text-sm font-medium font-body shadow-lg shadow-[#F99B2A]/30 hover:bg-[#E87E0A] transition-colors"
        >
          Order Now
        </motion.button>
      </div>
    </motion.nav>
  );
}
