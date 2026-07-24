"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Intro3DProps {
  onComplete: () => void;
}

export default function Intro3D({ onComplete }: Intro3DProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Simulate a loading state for a luxury craft workshop
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoadingComplete(true), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const handleOpen = () => {
    if (!loadingComplete) return;
    setIsOpen(true);
    // Let the 3D doors fully swing open (1.8s) before completing the intro
    setTimeout(() => {
      onComplete();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden perspective-2000">
      {/* Background warm radial light glow behind the cabinet */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,24,16,0.6)_0%,rgba(10,8,6,1)_80%)]" />

      {/* Subtle floating gold dust particles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-premium rounded-full filter blur-xs animate-pulse duration-3000" />
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-gold-premium rounded-full filter blur-xs animate-pulse duration-2000 delay-1000" />
        <div className="absolute top-1/3 left-2/3 w-2 h-2 bg-gold-premium rounded-full filter blur-xs animate-pulse duration-4000 delay-500" />
        <div className="absolute top-2/3 left-3/4 w-1.5 h-1.5 bg-gold-premium rounded-full filter blur-xs animate-pulse duration-3000 delay-1500" />
      </div>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            transition={{ duration: 0.8 }}
            className="absolute top-8 md:top-12 text-center z-20 px-6 pointer-events-none"
          >
            <span className="text-gold-premium font-serif text-xs tracking-[0.4em] uppercase block animate-pulse">
              Fine Woodcraft
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main 3D Cabinet Box Container */}
      <motion.div
        animate={isOpen ? { scale: 1.4, z: 200 } : { scale: 1 }}
        transition={{ duration: 2, ease: [0.7, 0, 0.3, 1] }}
        className="relative w-[340px] h-[480px] md:w-[480px] md:h-[600px] preserve-3d"
      >
        {/* Inside Light burst revealed when doors open */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 1] }}
            className="absolute inset-0 bg-gradient-to-t from-[#c5a059] via-[#f3e5ab] to-white rounded-lg filter blur-lg z-0"
            style={{ transform: "translateZ(-50px)" }}
          />
        )}

        {/* Back panel of the cupboard */}
        <div
          className="absolute inset-0 rounded-lg border border-stone-850 bg-stone-950 flex flex-col items-center justify-center p-6 z-0 shadow-2xl"
          style={{ transform: "translateZ(-80px)" }}
        >
          {/* Glowing emblem inside */}
          <div className="w-28 h-28 rounded-2xl border border-gold-premium/30 bg-white flex items-center justify-center shadow-md relative overflow-hidden animate-pulse mb-6 p-1.5">
            <img
              src="/logo.jpg"
              alt="SIRAA Logo"
              className="w-full h-full rounded-xl object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-cream font-bold tracking-widest text-center uppercase">
            SIRAA
          </h2>
          <span className="text-gold-accent font-serif tracking-[0.25em] uppercase text-[10px] text-center mt-1">
            Interiors
          </span>
          <p className="text-[11px] text-stone-500 font-sans italic mt-6 text-center tracking-wide">
            "Bringing elegance indoors"
          </p>
        </div>

        {/* Left Side Cabinet Door */}
        <motion.div
          animate={isOpen ? { rotateY: -130 } : { rotateY: 0 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.1, 1] }}
          onClick={handleOpen}
          className={`absolute top-0 left-0 w-1/2 h-full cursor-pointer preserve-3d origin-left z-10`}
          style={{ transformOrigin: "left center" }}
        >
          {/* Front Face of Left Door */}
          <div className="absolute inset-0 wood-grain rounded-l-lg border-y-4 border-l-4 border-stone-900 flex flex-col justify-between p-6 shadow-2xl backface-hidden">
            {/* Classic wood molding frame */}
            <div className="absolute inset-3 border-2 border-stone-950/60 rounded-md pointer-events-none opacity-50 flex items-center justify-center">
              <div className="absolute inset-2 border border-gold-premium/15 rounded-sm" />
            </div>
            
            <div className="text-stone-600 font-serif text-xs select-none">SI-ESTD</div>
            
            {/* Brass Door Handle Plate */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-3.5 h-24 bg-gradient-to-r from-gold-premium via-gold-accent to-gold-premium rounded-l-md border border-stone-900 flex items-center justify-center shadow-lg group">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mb-8" />
              <div className="w-1 h-8 rounded-full bg-stone-950/40 absolute" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-8" />
            </div>

            <div className="text-stone-600 font-serif text-xs select-none">2006</div>
          </div>

          {/* Inner side of Left Door (visible when open) */}
          <div
            className="absolute inset-0 bg-stone-900 rounded-l-lg border-y-4 border-l-4 border-stone-950 p-6 flex flex-col items-end justify-center backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="w-1.5 h-20 bg-stone-800 rounded-full mr-2" />
          </div>
        </motion.div>

        {/* Right Side Cabinet Door */}
        <motion.div
          animate={isOpen ? { rotateY: 130 } : { rotateY: 0 }}
          transition={{ duration: 1.8, ease: [0.6, 0.05, 0.1, 1] }}
          onClick={handleOpen}
          className={`absolute top-0 right-0 w-1/2 h-full cursor-pointer preserve-3d origin-right z-10`}
          style={{ transformOrigin: "right center" }}
        >
          {/* Front Face of Right Door */}
          <div className="absolute inset-0 wood-grain rounded-r-lg border-y-4 border-r-4 border-stone-900 flex flex-col justify-between p-6 shadow-2xl backface-hidden">
            {/* Classic wood molding frame */}
            <div className="absolute inset-3 border-2 border-stone-950/60 rounded-md pointer-events-none opacity-50 flex items-center justify-center">
              <div className="absolute inset-2 border border-gold-premium/15 rounded-sm" />
            </div>

            <div className="text-right text-stone-600 font-serif text-xs select-none">WOODWORKS</div>

            {/* Brass Door Handle Plate */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-3.5 h-24 bg-gradient-to-l from-gold-premium via-gold-accent to-gold-premium rounded-r-md border border-stone-900 flex items-center justify-center shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mb-8" />
              <div className="w-1 h-8 rounded-full bg-stone-950/40 absolute" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-8" />
            </div>

            <div className="text-right text-stone-600 font-serif text-xs select-none">HANDMADE</div>
          </div>

          {/* Inner side of Right Door (visible when open) */}
          <div
            className="absolute inset-0 bg-stone-900 rounded-r-lg border-y-4 border-r-4 border-stone-950 p-6 flex flex-col items-start justify-center backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <div className="w-1.5 h-20 bg-stone-800 rounded-full ml-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Loading bar and step inside call-to-action */}
      <div className="absolute bottom-16 md:bottom-20 z-20 flex flex-col items-center px-6 w-full max-w-sm">
        <AnimatePresence mode="wait">
          {!loadingComplete ? (
            <motion.div
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full h-1 bg-stone-900 rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-premium to-gold-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-stone-400 font-medium">
                Polishing Timber {progress}%
              </span>
            </motion.div>
          ) : (
            <motion.button
              key="btn"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpen}
              className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-sm tracking-[0.15em] uppercase rounded-full shadow-lg transition-all duration-300 gold-glow gold-glow-hover select-none ${
                isOpen ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <Sparkles className="w-4 h-4 animate-spin duration-3000" />
              {isOpen ? "Opening..." : "Step Inside"}
            </motion.button>
          )}
        </AnimatePresence>

        <p className="mt-4 text-stone-500 font-sans text-xs tracking-wider text-center pointer-events-none">
          {isOpen ? "Entering the showroom..." : "Click doors or button to explore"}
        </p>
      </div>
    </div>
  );
}
