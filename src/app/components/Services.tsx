"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hammer, Armchair, Bed, LayoutGrid, HelpCircle } from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Cupboards & Wardrobes",
      icon: <LayoutGrid className="w-6 h-6 text-gold-premium" />,
      description: "Bedroom cupboards, walk-in closets, kitchen cabinets, and TV wall units.",
      pricing: "₹180 - ₹350 / sq.ft",
      tags: "Sliding & swing doors • Modular fittings • Veneer & laminate",
      isSpecial: false,
    },
    {
      title: "Doors & Windows",
      icon: <svg className="w-6 h-6 text-gold-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-4" /></svg>,
      description: "Teak main doors, custom window frames, and robust panel doors.",
      pricing: "Rates by design details",
      tags: "Teakwood carving • Anti-warp panels • Custom frames",
      isSpecial: false,
    },
    {
      title: "Cots & Beds",
      icon: <Bed className="w-6 h-6 text-gold-premium" />,
      description: "Durable solid wood beds, cots, and custom storage options.",
      pricing: "Custom size matching",
      tags: "Hydraulic storage • Headboard LED panels • Solid wood frame",
      isSpecial: false,
    },
    {
      title: "Sofas, Tables & Chairs",
      icon: <Armchair className="w-6 h-6 text-gold-premium" />,
      description: "Sofa frames, dining chairs, armchairs, and office desks with fine joinery.",
      pricing: "Built to specifications",
      tags: "Custom cushioning • Ergonomic chairs • High-grade wood",
      isSpecial: false,
    },
    {
      title: "Custom Furniture",
      icon: <Hammer className="w-6 h-6 text-gold-premium" />,
      description: "Handcrafted dining tables, study desks, and modern coffee tables.",
      pricing: "Unique creations",
      tags: "Live-edge tables • Functional study desks • Coffee tables",
      isSpecial: false,
    },
    {
      title: "Expert Material Guidance",
      icon: <HelpCircle className="w-6 h-6 text-gold-premium" />,
      description: "We select and recommend the most suitable timber grades and materials matching your budget, ensuring you get maximum quality without overpaying.",
      pricing: "Rs. 180 - 350 / sq.ft",
      marketPrice: "Rs. 800 - 1200 / sq.ft",
      isSpecial: true,
      tags: "",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-stone-950 relative overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-gold-premium/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-premium font-serif text-sm tracking-[0.3em] uppercase block mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4"
          >
            Woodwork Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mx-auto mb-4"
          />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => {
            const isSpecial = service.isSpecial;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`border rounded-xl p-5 md:p-6 transition-all duration-300 shadow-md flex flex-col justify-between relative overflow-hidden ${
                  isSpecial
                    ? "bg-stone-950/80 border-gold-premium/30 hover:border-gold-premium/60 min-h-[240px] md:min-h-[260px]"
                    : "bg-stone-900/40 border-stone-850 hover:border-gold-premium/50 hover:bg-stone-900/80 min-h-[220px] md:min-h-[240px]"
                }`}
              >
                {isSpecial ? (
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-start gap-2 mb-3">
                        <div className="p-1.5 bg-gold-premium/10 rounded-full text-gold-premium mt-0.5">
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-serif font-bold text-cream leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-stone-400 text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-stone-800/80">
                      <div className="flex justify-between items-center text-xs mb-1.5">
                        <span className="text-stone-500">Market standard interior cost:</span>
                        <span className="line-through text-red-500 font-semibold">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-cream">Our direct Labor cost:</span>
                        <span className="text-gold-premium">{service.pricing}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="p-2 bg-stone-950/80 rounded-lg border border-stone-800">
                          {service.icon}
                        </div>
                        <span className="text-[10px] text-stone-600 font-mono tracking-widest uppercase">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-lg font-serif font-bold text-cream mb-2 group-hover:text-gold-premium">
                        {service.title}
                      </h3>
                      <p className="text-stone-400 text-xs leading-relaxed mb-3">
                        {service.description}
                      </p>

                      {/* Inline Tags instead of Bullets */}
                      <p className="text-[11px] text-stone-500 font-medium leading-relaxed italic mb-4">
                        {service.tags}
                      </p>
                    </div>

                    {/* Bottom Rate Highlight */}
                    <div className="border-t border-stone-800/60 pt-3 mt-auto flex justify-between items-center">
                      <span className="text-[9px] text-stone-500 uppercase tracking-wider font-semibold">
                        Labor Price Reference
                      </span>
                      <span className="text-xs text-gold-accent font-semibold">
                        {service.pricing}
                      </span>
                    </div>
                  </div>
                )}

                {/* Decorative side accent visible on hover */}
                <motion.div
                  animate={hoveredIndex === index ? { width: "100%" } : { width: "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-premium to-gold-accent"
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
