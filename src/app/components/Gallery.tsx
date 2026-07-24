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
    "Craft Details",
  ];

  const galleryItems: GalleryItem[] = [
    {
      src: "/dressing_wardrobe.jpg",
      title: "Beige Vanity & Wardrobe",
      category: "Wardrobes",
      description: "Modern beige wardrobes built with an integrated dressing unit, backlit circular vanity mirror, and soft gold profiles.",
    },
    {
      src: "/grey_wardrobe.jpg",
      title: "Glossy Grey Wardrobe Set",
      category: "Wardrobes",
      description: "Floor-to-ceiling high-gloss finish cupboards fitted with long handles and a light oak open display bookcase.",
    },
    {
      src: "/pink_wardrobe.jpg",
      title: "Kids Room Wardrobe & Desk",
      category: "Wardrobes",
      description: "Pink and white lacquer finish kids wardrobe integrated with a matching study desk, drawers, and display shelves.",
    },
    {
      src: "/bedroom.jpg",
      title: "Modern Bedroom Closet Set",
      category: "Wardrobes",
      description: "Complete wood closet setup featuring a modular double wardrobe, bedside drawers, and an integrated tall dressing mirror.",
    },
    {
      src: "/black_kitchen.jpg",
      title: "Oak & Matte Black Kitchen",
      category: "Kitchens",
      description: "Contemporary kitchen cabinetry featuring handleless matte black door fronts paired with warm natural oak wood framing.",
    },
    {
      src: "/floral_kitchen.jpg",
      title: "Floral Modular Cabinets",
      category: "Kitchens",
      description: "Red and white floral printed cabinet shutters matched with clear glass panels and durable steel handles.",
    },
    {
      src: "/traditional_bed.jpg",
      title: "Classical Teak Wood Bed",
      category: "Beds & Sofas",
      description: "Traditional hand-carved solid teak headboard with matching detailed wardrobes and bedside drawers.",
    },
    {
      src: "/hydraulic_bed.jpg",
      title: "Teak Hydraulic Storage Bed",
      category: "Beds & Sofas",
      description: "Custom solid wood bed frame engineered with a lift-up hydraulic storage system for space savings.",
    },
    {
      src: "/sofa_collage.jpg",
      title: "Solid Wood Sofa Catalog",
      category: "Beds & Sofas",
      description: "Exquisite corner sofa configurations made with solid hardwood frames, soft cushions, and matching center coffee tables.",
    },
    {
      src: "/living_room.jpg",
      title: "Minimalist TV Console Set",
      category: "Beds & Sofas",
      description: "Low-profile oak television console table matched with solid wood cushioned armchairs in a modern living space.",
    },
    {
      src: "/panels.jpg",
      title: "Wooden Panel Design Variants",
      category: "Doors & Panels",
      description: "Bespoke veneer pattern selections for main entrance doors, wall partition paneling, and shutter boards.",
    },
    {
      src: "/collage.jpg",
      title: "Carpentry Showcase Catalog",
      category: "Doors & Panels",
      description: "Examples of carved teak entrance doors, dining chairs, cots, and modular kitchen storage structures.",
    },
    {
      src: "/staircase.jpg",
      title: "Teak Staircase Banister",
      category: "Craft Details",
      description: "Fine, hand-fitted teak wood staircase railing under construction, highlighting neat carpentry joinery.",
    },
    {
      src: "/tools.jpg",
      title: "Generations of Carpentry",
      category: "Craft Details",
      description: "Traditional handsaw, chisels, and wood-planing tools on our experienced master carpenter's workbench.",
    },
    {
      src: "/shelves.jpg",
      title: "Hexagonal Floating Shelves",
      category: "Craft Details",
      description: "Geometric wall shelves with alternating wood-grain and custom orange lacquer finishes.",
    },
  ];

  const filteredItems =
    filter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-stone-900/30 border-t border-b border-stone-900 relative">
      {/* Background radial highlight */}
      <div className="absolute left-1/4 top-1/4 w-[300px] h-[300px] bg-wood-light/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold-premium font-serif text-sm tracking-[0.3em] uppercase block mb-3">
            Our Work Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-cream mb-4">
            Recent Woodwork Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mx-auto mb-6" />
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed">
            Explore authentic photos of our completed wardrobes, custom cots, modular kitchens, and hand-carved teak woodwork. Hand-built by our carpenters to fit your specific budget.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-serif uppercase tracking-wider transition-all duration-300 cursor-pointer ${
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
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
                <div className="absolute inset-0 bg-stone-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-xs">
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold-premium/20 flex items-center justify-center text-gold-premium border border-gold-premium/30 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <span className="text-gold-accent font-serif text-[10px] tracking-[0.2em] uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-cream font-serif text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More button linking to Google Drive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="https://drive.google.com/drive/folders/1JPA7sV0AIPSr6EJm-lg34mUz0fO_VSbj?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg hover:shadow-gold-premium/20 cursor-pointer active:scale-95"
          >
            See More Designs
            <svg
              className="w-4.5 h-4.5"
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
          <p className="text-stone-500 text-xs mt-3 font-sans">
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
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 bg-stone-900 border border-stone-800 text-stone-400 hover:text-cream rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-4xl w-full bg-stone-950 border border-stone-850 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Image Section */}
                <div className="md:col-span-2 aspect-video md:aspect-auto md:h-[65vh] bg-black">
                  <img
                    src={activeImage.src}
                    alt={activeImage.title}
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
                {/* Description Details */}
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div>
                    <span className="text-gold-premium font-serif text-xs tracking-widest uppercase block mb-1">
                      {activeImage.category}
                    </span>
                    <h3 className="text-2xl font-serif text-cream font-bold leading-tight">
                      {activeImage.title}
                    </h3>
                  </div>
                  <div className="w-12 h-0.5 bg-gold-accent" />
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {activeImage.description}
                  </p>
                  <div className="pt-4">
                    <a
                      href="#contact"
                      onClick={() => setActiveImage(null)}
                      className="inline-block text-center w-full px-6 py-3 bg-gradient-to-r from-gold-premium to-gold-accent text-stone-950 font-serif font-bold text-xs uppercase tracking-wider rounded-xl transition-transform active:scale-95 cursor-pointer shadow-md"
                    >
                      Enquire for this work
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
