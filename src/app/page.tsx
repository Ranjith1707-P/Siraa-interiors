"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer, Users, Heart, MapPin, ArrowRight, ShieldCheck, Star, Phone } from "lucide-react";
import Intro3D from "./components/Intro3D";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Estimator from "./components/Estimator";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import { FadeUp } from "./components/FadeUp";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  const handleCallClick = () => {
    const phoneNumber = "+919490265414";
    const confirmCall = window.confirm("Are you sure you want to call Siraa Interiors?");
    if (confirmCall) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!introFinished && (
          <Intro3D onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {introFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="min-h-screen text-cream flex flex-col relative bg-transparent"
        >
          {/* Background Video (fixed behind everything) */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
            style={{ transform: "scale(1.4)" }}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
          />

          {/* Header Navigation */}
          <Navbar />

          {/* HERO SECTION */}
          <header className="relative min-h-screen flex items-center justify-center p-[70px_32px_32px_32px] max-[900px]:p-[90px_18px_32px_18px] overflow-hidden bg-black/40 backdrop-blur-[1px] z-10">
            {/* Background texture line overlay */}
            <div className="absolute inset-0 wood-grain opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Text */}
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start max-w-[720px] mx-auto lg:mx-0">
                  <FadeUp
                    as="div"
                    delay={0.05}
                    y={20}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-gold-premium/10 border border-gold-premium/30 rounded-full text-gold-premium text-xs font-semibold uppercase tracking-wider"
                  >
                    <Star className="w-3.5 h-3.5 fill-gold-premium" /> Est. 2006 • 20+ Years Experience
                  </FadeUp>

                  <h2 
                    className="flex flex-wrap justify-center lg:justify-start gap-x-[0.25em] gap-y-[0.1em] font-sans font-bold leading-[1.08] tracking-[-0.01em] uppercase text-white m-0 text-center lg:text-left" 
                    style={{ fontSize: "clamp(26px, 3.5vw, 45px)" }}
                  >
                    {"WE BUILD CUSTOM WOODWORK FOR YOUR BUDGET.".split(" ").map((word, idx) => (
                      <FadeUp
                        key={idx}
                        as="span"
                        delay={0.15 + idx * 0.08}
                        y={32}
                        duration={0.7}
                        once={true}
                        className="inline-block"
                      >
                        {word}
                      </FadeUp>
                    ))}
                  </h2>

                  <FadeUp
                    as="p"
                    delay={0.9}
                    y={24}
                    className="mt-6 font-sans text-sm md:text-base leading-relaxed text-white/85 max-w-[420px]"
                  >
                    Custom high-quality woodwork crafted to perfection. From modular box cupboards to carved teakwood main doors, cots, sofas, and custom dining tables. Get direct expert labors with 100% transparent pricing.
                  </FadeUp>

                  <FadeUp
                    delay={1.1}
                    y={24}
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full"
                  >
                    <a
                      href="#estimator"
                      className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg gold-glow"
                    >
                      Estimate Labor Cost
                    </a>
                    <a
                      href="#contact"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-stone-800 hover:border-gold-premium rounded-xl text-cream text-sm font-semibold hover:bg-stone-900/30 transition-all duration-300"
                    >
                      Book Free Consultation <ArrowRight className="w-4 h-4" />
                    </a>
                  </FadeUp>
                </div>

                {/* Hero Badge Showcase Box */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="relative w-full max-w-[360px] aspect-[4/5] wood-grain rounded-2xl border border-stone-850 p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
                  >
                    {/* Shadow box borders */}
                    <div className="absolute inset-4 border border-gold-premium/10 rounded-xl" />

                    <div className="flex justify-between items-start relative z-10">
                      <span className="text-[10px] font-mono text-stone-500 tracking-widest uppercase">
                        Siraa Showroom
                      </span>
                      <ShieldCheck className="w-6 h-6 text-gold-premium" />
                    </div>

                    <div className="relative z-10 space-y-4">
                      <div className="w-12 h-1 bg-gold-premium" />
                      <blockquote className="font-serif italic text-cream text-lg md:text-xl leading-relaxed">
                        "Elegance is in the details, the matching grain, and the silent slide of a wooden drawer."
                      </blockquote>
                      <div>
                        <span className="font-sans text-xs uppercase tracking-wider text-stone-500 font-bold block">
                          Founder & Master Craftsman
                        </span>
                        <span className="font-serif text-gold-accent text-sm font-bold">
                          Siraa Interiors team
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-stone-500 pt-4 border-t border-stone-850/60 relative z-10">
                      <span>Sathyavedu, AP</span>
                      <span>Serving South India</span>
                    </div>
                  </motion.div>

                  {/* Call Master Craftsman Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    onClick={handleCallClick}
                    className="w-full max-w-[360px] flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-lg gold-glow cursor-pointer"
                  >
                    <Phone className="w-4 h-4" /> Call
                  </motion.button>
                </div>

              </div>
            </div>

            {/* Bottom Section Curve decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
          </header>

          {/* HERITAGE & COUNTER SECTION */}
          <section id="experience" className="relative z-50 py-20 bg-stone-950 border-t border-stone-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                <div className="bg-stone-900/30 border border-stone-850 p-6 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-gold-premium/10 rounded-full flex items-center justify-center text-gold-premium mx-auto">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-cream">20+ Years</h3>
                  <p className="text-stone-500 text-xs uppercase tracking-wider font-semibold">
                    Timber Experience
                  </p>
                  <p className="text-stone-400 text-xs">
                    Two decades crafting high-end domestic cupboards, frames, and furniture.
                  </p>
                </div>

                <div className="bg-stone-900/30 border border-stone-850 p-6 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-gold-premium/10 rounded-full flex items-center justify-center text-gold-premium mx-auto">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-cream">100% Happy</h3>
                  <p className="text-stone-500 text-xs uppercase tracking-wider font-semibold">
                    Customer Smiles
                  </p>
                  <p className="text-stone-400 text-xs">
                    Our clients appreciate the transparent labor rates and flawless woodwork.
                  </p>
                </div>

                <div className="bg-stone-900/30 border border-stone-850 p-6 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-gold-premium/10 rounded-full flex items-center justify-center text-gold-premium mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-cream">Experienced</h3>
                  <p className="text-stone-500 text-xs uppercase tracking-wider font-semibold">
                    Artisans & Labours
                  </p>
                  <p className="text-stone-400 text-xs">
                    Dedicated workers focused on precision carving, polish, and fittings.
                  </p>
                </div>

                <div className="bg-stone-900/30 border border-stone-850 p-6 rounded-xl text-center space-y-3">
                  <div className="w-12 h-12 bg-gold-premium/10 rounded-full flex items-center justify-center text-gold-premium mx-auto">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-cream">5 States</h3>
                  <p className="text-stone-500 text-xs uppercase tracking-wider font-semibold">
                    South India Coverage
                  </p>
                  <p className="text-stone-400 text-xs">
                    AP, Tamil Nadu, Kerala, Telangana, Karnataka, and open to custom requests anywhere.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* SERVICES SECTION */}
          <Services />

          {/* GALLERY SECTION */}
          <Gallery />

          {/* ESTIMATOR SECTION */}
          <Estimator />

          {/* REVIEWS SECTION */}
          <Reviews />

          {/* CONTACT & FAQ SECTION */}
          <ContactForm />

          {/* FOOTER */}
          <footer className="relative z-50 bg-stone-950 border-t border-stone-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                
                {/* Branding column */}
                <div className="space-y-4 col-span-1 md:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-stone-800 bg-white flex items-center justify-center overflow-hidden p-0.5">
                      <img
                        src="/logo.jpg"
                        alt="SIRAA Logo"
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <span className="text-cream font-serif text-base font-bold tracking-widest">SIRAA INTERIORS</span>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed max-w-sm">
                    Bringing elegance indoors since 2006. Dedicated to direct-labor woodwork, offering high transparency, fine wood finishing, and custom solid furniture for upper middle and middle-class homes.
                  </p>
                </div>

                {/* Quick links */}
                <div className="space-y-3">
                  <h4 className="text-cream font-serif text-xs uppercase tracking-widest font-bold">Quick Links</h4>
                  <ul className="space-y-2 text-stone-500 text-xs font-medium">
                    <li><a href="#services" className="hover:text-gold-premium transition-colors">Woodwork Services</a></li>
                    <li><a href="#estimator" className="hover:text-gold-premium transition-colors">Labor Cost Planner</a></li>
                    <li><a href="#experience" className="hover:text-gold-premium transition-colors">Our Experience</a></li>
                    <li><a href="#reviews" className="hover:text-gold-premium transition-colors font-serif italic text-gold-accent">Client Reviews</a></li>
                  </ul>
                </div>

                {/* Contact info column */}
                <div className="space-y-3">
                  <h4 className="text-cream font-serif text-xs uppercase tracking-widest font-bold">Office Address</h4>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Sathyavedu, Andhra Pradesh,<br />
                    India - 517588
                  </p>
                  <p className="text-stone-500 text-xs">
                    Call: +91 9490265414 <br />
                    WhatsApp: 9490169314 <br />
                    Email: siraainteriors@gmail.com
                  </p>
                </div>

              </div>

              {/* Bottom Copyright and note */}
              <div className="pt-8 border-t border-stone-900/80 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-stone-600 text-xs">
                  © {new Date().getFullYear()} SIRAA Interiors. All Rights Reserved.
                </span>
                <span className="text-stone-600 text-xs font-serif italic text-center md:text-right">
                  "Bringing elegance indoors"
                </span>
              </div>

            </div>
          </footer>

        </motion.div>
      )}
    </>
  );
}
