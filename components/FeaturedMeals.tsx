"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const categories = [
  "All",
  "Mexican",
  "Asian",
  "Middle Eastern",
  "African",
  "Indian",
];

const meals = [
  {
    emoji: "🌮",
    name: "Birria Tacos",
    chef: "Carlos M.",
    cuisine: "Mexican",
    price: "$13",
    time: "28 min",
    rating: "4.8",
    orders: "218",
  },
  {
    emoji: "🍜",
    name: "Pho Bo",
    chef: "Linh T.",
    cuisine: "Asian",
    price: "$12",
    time: "40 min",
    rating: "5.0",
    orders: "189",
  },
  {
    emoji: "🥘",
    name: "Lamb Tagine",
    chef: "Hassan M.",
    cuisine: "Middle Eastern",
    price: "$18",
    time: "50 min",
    rating: "4.9",
    orders: "156",
  },
  {
    emoji: "🫕",
    name: "Jollof Rice",
    chef: "Amara O.",
    cuisine: "African",
    price: "$13",
    time: "38 min",
    rating: "4.8",
    orders: "134",
  },
  {
    emoji: "🍛",
    name: "Butter Chicken",
    chef: "Priya S.",
    cuisine: "Indian",
    price: "$14",
    time: "35 min",
    rating: "4.9",
    orders: "342",
  },
  {
    emoji: "🫔",
    name: "Paneer Tikka",
    chef: "Meera R.",
    cuisine: "Indian",
    price: "$15",
    time: "32 min",
    rating: "4.7",
    orders: "201",
  },
];

export default function FeaturedMeals() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? meals : meals.filter((m) => m.cuisine === active);

  return (
    <section id="menu" ref={ref} className="py-32 px-6 bg-[#FDF6EC]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-[#F99B2A] text-sm font-medium font-body uppercase tracking-widest">
              Today's picks
            </span>
            <h2 className="display-font text-5xl md:text-6xl font-bold text-[#2C1A0E] mt-2 leading-none">
              What's
              <br />
              <span className="text-[#F99B2A] italic">cooking</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#2C1A0E] text-[#FDF6EC]"
                    : "bg-[#2C1A0E]/5 text-[#2C1A0E]/60 hover:bg-[#2C1A0E]/10"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((meal, i) => (
            <motion.div
              key={meal.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#FDD9A8]/50 shadow-sm hover:shadow-xl hover:shadow-[#F99B2A]/10 transition-all duration-300 cursor-pointer"
            >
              {/* Meal image placeholder */}
              <div className="h-44 bg-gradient-to-br from-[#FEF0DC] to-[#FDD9A8] flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="text-7xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {meal.emoji}
                </motion.div>
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs font-medium font-body text-[#2C1A0E]">
                  ⏱ {meal.time}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="display-font text-lg font-semibold text-[#2C1A0E]">
                    {meal.name}
                  </h3>
                  <span className="display-font text-lg font-bold text-[#F99B2A]">
                    {meal.price}
                  </span>
                </div>
                <p className="text-xs font-body text-[#2C1A0E]/50 mb-3">
                  by {meal.chef} · {meal.orders} orders
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-xs">⭐</span>
                    <span className="text-xs font-medium font-body text-[#2C1A0E]/70">
                      {meal.rating}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F99B2A] text-white text-xs font-medium font-body px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Order now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
