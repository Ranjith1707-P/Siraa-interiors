"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Hammer } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Estimator", href: "#estimator" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll detection for glassmorphism and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/80 backdrop-blur-md border-b border-stone-900/60 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo and Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border border-stone-800 bg-white flex items-center justify-center overflow-hidden p-0.5 transition-all duration-300 group-hover:border-gold-premium/50 shadow-md">
              <img
                src="/logo.jpg"
                alt="SIRAA Logo"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-sm md:text-base font-bold tracking-widest leading-none group-hover:text-gold-premium transition-colors">
                SIRAA
              </span>
              <span className="text-[9px] text-stone-500 tracking-wider uppercase font-semibold mt-0.5">
                Interiors & Woodworks
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {link.label}
                    {activeSection === link.href && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-premium to-gold-accent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Quick Estimator CTA */}
            <a
              href="#estimator"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-xs tracking-wider uppercase rounded-lg transition-all duration-300 shadow-md hover:shadow-gold-premium/10"
            >
              Labor Cost Planner
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-stone-950/95 border-b border-stone-900 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 text-sm font-semibold uppercase tracking-wider border-b border-stone-900/40 ${
                        activeSection === link.href
                          ? "text-gold-premium"
                          : "text-stone-300 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <a
                  href="#estimator"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-gold-premium to-gold-accent text-stone-950 font-serif font-bold text-xs tracking-wider uppercase rounded-xl transition-all duration-300"
                >
                  <Hammer className="w-3.5 h-3.5" /> Labor Cost Planner <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
