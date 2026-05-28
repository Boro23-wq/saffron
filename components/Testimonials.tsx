"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    text: "I haven't ordered from a restaurant since I found Saffron. Priya's butter chicken is better than anything I've ever eaten out.",
    name: "Jordan T.",
    city: "Austin, TX",
    rating: 5,
  },
  {
    text: "As someone who grew up eating home cooking, Saffron actually scratches that itch. This isn't delivery food — this is someone's Sunday dinner.",
    name: "Maya R.",
    city: "Chicago, IL",
    rating: 5,
  },
  {
    text: "Carlos's birria tacos changed my life. I'm not even exaggerating. I order 3x a week now.",
    name: "Derek M.",
    city: "Houston, TX",
    rating: 5,
  },
  {
    text: "The quality difference is insane. You can actually taste the care that goes into each meal.",
    name: "Sarah K.",
    city: "Seattle, WA",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#2C1A0E] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#F99B2A] text-sm font-medium font-body uppercase tracking-widest">
            Real people, real meals
          </span>
          <h2 className="display-font text-5xl md:text-6xl font-bold text-[#FDF6EC] mt-3 leading-16">
            They said it
            <br />
            <span className="text-[#F99B2A] italic">best</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#FDF6EC]/5 border border-[#FDF6EC]/10 rounded-3xl p-8 hover:border-[#F99B2A]/20 transition-colors duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j} className="text-[#F99B2A]">
                    ★
                  </span>
                ))}
              </div>
              <p className="display-font text-lg text-[#FDF6EC] leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <div>
                <div className="font-body font-medium text-[#FDF6EC] text-sm">
                  {r.name}
                </div>
                <div className="font-body text-xs text-[#FDF6EC]/40">
                  {r.city}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
