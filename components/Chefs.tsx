"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chefs = [
  { emoji: "👩🏽‍🍳", name: "Priya Sharma", specialty: "North Indian", meals: 847, rating: "4.9", city: "Austin, TX", bio: "My masalas have been passed down 3 generations. Every dish is made with love." },
  { emoji: "👨🏻‍🍳", name: "Carlos Mendez", specialty: "Oaxacan Mexican", meals: 612, rating: "4.8", city: "Chicago, IL", bio: "Born in Oaxaca. My mole takes 3 days to prepare. Worth every minute." },
  { emoji: "👩🏻‍🍳", name: "Linh Tran", specialty: "Vietnamese", meals: 534, rating: "5.0", city: "Houston, TX", bio: "My pho broth simmers for 12 hours. That's why it hits different." },
  { emoji: "👨🏾‍🍳", name: "Hassan Malik", specialty: "Moroccan", meals: 423, rating: "4.9", city: "Seattle, WA", bio: "My tagine recipe is from a small village in the Atlas Mountains." },
];

export default function Chefs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="chefs" ref={ref} className="py-32 px-6 bg-[#FEF0DC]/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#F99B2A] text-sm font-medium font-body uppercase tracking-widest">The people behind the food</span>
          <h2 className="display-font text-5xl md:text-6xl font-bold text-[#2C1A0E] mt-3 leading-none">
            Meet your<br /><span className="text-[#F99B2A] italic">home chefs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-[#FDD9A8]/60 shadow-sm hover:shadow-lg hover:shadow-[#F99B2A]/10 transition-all duration-300"
            >
              <div className="text-5xl mb-4 bg-[#FEF0DC] w-16 h-16 rounded-2xl flex items-center justify-center">{chef.emoji}</div>
              <h3 className="display-font text-lg font-semibold text-[#2C1A0E]">{chef.name}</h3>
              <p className="text-xs font-body text-[#F99B2A] font-medium mb-1">{chef.specialty}</p>
              <p className="text-xs font-body text-[#2C1A0E]/40 mb-3">{chef.city}</p>
              <p className="text-xs font-body text-[#2C1A0E]/60 leading-relaxed italic mb-4">"{chef.bio}"</p>
              <div className="flex items-center justify-between text-xs font-body">
                <span className="text-[#2C1A0E]/50">{chef.meals} meals</span>
                <span className="font-medium text-[#2C1A0E]">⭐ {chef.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-[#2C1A0E] text-[#2C1A0E] font-body font-medium px-8 py-3 rounded-full hover:bg-[#2C1A0E] hover:text-[#FDF6EC] transition-all duration-300"
          >
            Become a chef on Saffron →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
