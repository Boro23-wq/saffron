"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] py-12 px-6 border-t border-[#FDF6EC]/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="display-font text-2xl font-bold text-[#FDF6EC]">
          Saffron
        </div>
        <div className="flex gap-6 text-sm font-body text-[#FDF6EC]/40">
          {["About", "How it works", "Become a chef", "Support", "Privacy"].map(
            (link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: "#F99B2A" }}
                className="hover:text-[#F99B2A] transition-colors"
              >
                {link}
              </motion.a>
            ),
          )}
        </div>
        <p className="text-xs font-body text-[#FDF6EC]/20">
          © 2026 Saffron. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
