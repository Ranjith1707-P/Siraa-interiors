"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hammer, Armchair, Bed, LayoutGrid, Award, ShieldCheck, HelpCircle } from "lucide-react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Cupboards & Wardrobes",
      icon: <LayoutGrid className="w-8 h-8 text-gold-premium" />,
      description: "Custom bedroom cupboards, space-maximizing walk-in closets, kitchen cabinets, and wall units.",
      pricing: "Labor rates: Normal Cupboard Rs. 180-250/sq.ft. | Full Box Cupboard Rs. 300-350/sq.ft.",
      bullets: ["Sliding and swing doors", "Soft-close modular fittings", "Veneer / Acrylic / Laminate finishing"],
    },
    {
      title: "Doors & Windows",
      icon: <svg className="w-8 h-8 text-gold-premium" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-4" /></svg>,
      description: "Majestic main entrance doors, custom frames, window shutters, panel doors, and robust French windows.",
      pricing: "Rates vary by design details (Teak wood, Rosewood, Sal wood options).",
      bullets: ["Elegant Teak carving main doors", "Anti-warp panel assembly", "Custom frame profiling"],
    },
    {
      title: "Cots & Beds",
      icon: <Bed className="w-8 h-8 text-gold-premium" />,
      description: "Solid wood beds designed for durability and comfort, including storage beds and classic cots.",
      pricing: "Custom size matching.",
      bullets: ["Hydraulic storage options", "Integrated headboard LED panels", "High-quality wood framing"],
    },
    {
      title: "Sofas, Tables & Chairs",
      icon: <Armchair className="w-8 h-8 text-gold-premium" />,
      description: "Living room sofa sets, dining chairs, armchairs, and workspace furniture with exquisite joinery.",
      pricing: "Built to specifications.",
      bullets: ["Custom cushion frame construction", "Ergonomic dining chairs", "High-grade upholstery support"],
    },
    {
      title: "Custom Furniture",
      icon: <Hammer className="w-8 h-8 text-gold-premium" />,
      description: "Exquisite handmade custom dining tables, study desks, and modern coffee tables.",
      pricing: "Unique creations.",
      bullets: ["Live-edge dining tables", "Multi-functional study desks", "Glass-top & solid wood coffee tables"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background Decorative element */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-gold-premium/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[300px] h-[300px] bg-wood-light/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-3xl md:text-5xl font-serif font-bold text-cream mb-4"
          >
            Our Woodwork Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-stone-400 font-sans text-base md:text-lg leading-relaxed"
          >
            Specialized in residential wood works, matching high elegance with affordable pricing systems for Middle and Upper-Middle class families.
          </motion.p>
        </div>

        {/* Business Model explanation - Highly interactive layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/5 rounded-full filter blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold-premium/10 border border-gold-premium/30 rounded-full text-gold-premium text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> Budget-Friendly Woodwork
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream">
                Craftsmanship Tailored to Your Budget
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm md:text-base">
                We work according to your specific budget and requirements. Instead of charging high margins on raw materials, our experienced team consults with you to recommend the most suitable, high-quality woods, boards, laminates, and fittings that fit perfectly within your financial plan.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-premium/10 flex items-center justify-center text-gold-premium">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cream text-sm font-semibold">20+ Years Experience</h4>
                    <p className="text-stone-500 text-xs mt-0.5">Generations of carpentry excellence.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-premium/10 flex items-center justify-center text-gold-premium">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-cream text-sm font-semibold">100% Happy Customers</h4>
                    <p className="text-stone-500 text-xs mt-0.5">Reliable timelines and fine finishes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-wood-dark border border-stone-850 p-6 rounded-xl flex flex-col justify-between h-full space-y-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-gold-accent mt-0.5" />
                <div>
                  <h4 className="text-cream font-serif font-bold text-base">Expert Material Guidance</h4>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                    We select and recommend the most suitable timber grades and materials matching your budget, ensuring you get maximum quality without overpaying.
                  </p>
                </div>
              </div>
              <div className="border-t border-stone-800 pt-3">
                <div className="flex justify-between text-xs text-stone-500 mb-1">
                  <span>Market standard interior cost:</span>
                  <span className="line-through text-red-500">Rs. 800 - 1200 / sq.ft</span>
                </div>
                <div className="flex justify-between text-sm text-gold-premium font-semibold">
                  <span>Our direct Labor cost:</span>
                  <span>Rs. 180 - 350 / sq.ft</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-stone-900/40 border border-stone-850 rounded-xl p-6 transition-all duration-300 hover:border-gold-premium/50 hover:bg-stone-900/80 shadow-lg hover:shadow-gold-premium/5 flex flex-col justify-between min-h-[360px] relative overflow-hidden"
            >
              {/* Top Section */}
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="p-3 bg-stone-950/80 rounded-lg border border-stone-800">
                    {service.icon}
                  </div>
                  <span className="text-[10px] text-stone-600 font-mono tracking-widest uppercase">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-cream mb-3 group-hover:text-gold-premium">
                  {service.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sublist */}
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center text-xs text-stone-500 gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-premium" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Rate Highlight */}
              <div className="border-t border-stone-800/60 pt-4 mt-auto">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold block mb-1">
                  Labor Price Reference
                </span>
                <p className="text-xs text-gold-accent font-semibold leading-relaxed">
                  {service.pricing}
                </p>
              </div>

              {/* Decorative side accent visible on hover */}
              <motion.div
                animate={hoveredIndex === index ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold-premium to-gold-accent"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
