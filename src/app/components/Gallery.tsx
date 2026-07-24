"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    "All",
    "Wardrobes",
    "Kitchens",
    "Doors & Panels",
    "Beds & Sofas",
  ];

  const galleryItems: GalleryItem[] = [
    {
      src: "/dressing_wardrobe.jpg",
      title: "Beige Vanity & Wardrobe",
      category: "Wardrobes",
      description: "Modern beige wardrobes built with an integrated dressing unit and soft gold profiles.",
    },
    {
      src: "/grey_wardrobe.jpg",
      title: "Glossy Grey Wardrobe Set",
      category: "Wardrobes",
      description: "Floor-to-ceiling high-gloss finish cupboards fitted with long handles and open display shelving.",
    },
    {
      src: "/black_kitchen.jpg",
      title: "Oak & Matte Black Kitchen",
      category: "Kitchens",
      description: "Contemporary kitchen cabinetry featuring handleless matte black fronts paired with warm natural oak wood.",
    },
    {
      src: "/traditional_bed.jpg",
      title: "Classical Teak Wood Bed",
      category: "Beds & Sofas",
      description: "Traditional hand-carved solid teak headboard with matching detailed wardrobes.",
    },
    {
      src: "/hydraulic_bed.jpg",
      title: "Teak Hydraulic Storage Bed",
      category: "Beds & Sofas",
      description: "Custom solid wood bed frame engineered with a lift-up hydraulic storage system.",
    },
    {
      src: "/panels.jpg",
      title: "Wooden Panel Design Variants",
      category: "Doors & Panels",
      description: "Bespoke veneer pattern selections for main entrance doors and partition paneling.",
    },
  ];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-12 md:py-20 bg-stone-900/30 border-t border-b border-stone-900 relative">
      {/* Background radial highlight */}
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-wood-light/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="text-gold-premium font-serif text-sm tracking-[0.3em] uppercase block mb-3">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-4">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mx-auto mb-4" />
          <p className="text-stone-400 font-sans text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
            Explore authentic photos of our wardrobes, cots, kitchens, and carved teak woodwork.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-serif uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? "bg-gradient-to-r from-gold-premium to-gold-accent text-stone-950 font-bold shadow-md shadow-gold-premium/15"
                  : "bg-stone-950 border border-stone-850 text-stone-400 hover:border-gold-premium/40 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.src}
                className="group relative aspect-square bg-stone-950 border border-stone-850 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Glassmorphic Hover Overlay */}
                <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 backdrop-blur-xs">
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium border border-gold-premium/30 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-gold-accent font-serif text-[9px] tracking-[0.2em] uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-cream font-serif text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-[11px] mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More button linking to Google Drive */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-8 md:mt-12 text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1JPA7sV0AIPSr6EJm-lg34mUz0fO_VSbj?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg hover:shadow-gold-premium/20 cursor-pointer active:scale-95"
          >
            See More Designs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <p className="text-stone-500 text-[10px] mt-2 font-sans">
            Opens our Google Drive folder containing more woodwork ideas
          </p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setActiveImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/75 hover:text-white"
              onClick={() => setActiveImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-stone-950 border border-stone-850 p-3 rounded-2xl max-w-3xl w-full flex flex-col gap-4 shadow-2xl"
            >
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full max-h-[70vh] object-cover rounded-xl border border-stone-900"
              />
              <div className="px-2">
                <span className="text-gold-accent font-serif text-[10px] uppercase tracking-widest">
                  {activeImage.category}
                </span>
                <h3 className="text-cream text-lg font-serif font-bold mt-1">
                  {activeImage.title}
                </h3>
                <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
