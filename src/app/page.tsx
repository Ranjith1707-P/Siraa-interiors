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
          <header className="relative min-h-screen max-[900px]:min-h-[85vh] flex items-center justify-center p-[70px_32px_32px_32px] max-[900px]:p-[80px_16px_24px_16px] overflow-hidden bg-black/40 backdrop-blur-[1px] z-10">
            {/* Background texture line overlay */}
            <div className="absolute inset-0 wood-grain opacity-5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                
                {/* Hero Text */}
                <div className="lg:col-span-7 space-y-4 md:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start max-w-[720px] mx-auto lg:mx-0">
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
                    className="mt-4 md:mt-6 font-sans text-sm md:text-base leading-relaxed text-white/85 max-w-[420px]"
                  >
                    Custom high-quality woodwork crafted to perfection. From modular cupboards to carved teakwood doors, cots, and sofas. Get direct expert labor with transparent pricing.
                  </FadeUp>

                  <FadeUp
                    delay={1.1}
                    y={24}
                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3 md:gap-4 md:pt-4 w-full"
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

                  {/* Compact Stats Row */}
                  <FadeUp
                    delay={1.2}
                    y={20}
                    className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-[450px] text-center lg:text-left"
                  >
                    <div>
                      <div className="text-lg md:text-xl font-serif font-bold text-gold-premium">20+ Yrs</div>
                      <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Experience</div>
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-serif font-bold text-gold-premium">100%</div>
                      <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-serif font-bold text-gold-premium">Direct</div>
                      <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">Labor Pricing</div>
                    </div>
                  </FadeUp>

                  {/* Available Locations Tag */}
                  <FadeUp
                    delay={1.3}
                    y={15}
                    className="text-[11px] text-stone-500 font-sans tracking-wide mt-2 w-full text-center lg:text-left"
                  >
                    <span className="text-gold-accent font-semibold">Serving:</span> Chennai, Tirupati, Nellore, Bengaluru, Hyderabad & South India
                  </FadeUp>
                </div>

                {/* Hero Badge Showcase Box */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="relative w-full max-w-[360px] aspect-[4/5] wood-grain rounded-2xl border border-stone-850 p-5 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
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

          {/* SERVICES SECTION */}
          <Services />

          {/* GALLERY SECTION */}
          <Gallery />

          {/* ESTIMATOR SECTION */}
          <Estimator />

          {/* CONTACT & FAQ SECTION */}
          <ContactForm />

          {/* REVIEWS SECTION */}
          <Reviews />

          {/* FOOTER */}
          <footer className="relative z-50 bg-stone-950 border-t border-stone-900 py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                
                {/* Branding column */}
                <div className="space-y-4 col-span-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-stone-800 flex items-center justify-center overflow-hidden">
                      <img
                        src="/logo.jpg"
                        alt="SIRAA Logo"
                        className="w-full h-full object-cover scale-[1.15]"
                      />
                    </div>
                    <span className="text-cream font-serif text-base font-bold tracking-widest">SIRAA INTERIORS</span>
                  </div>
                  <p className="text-stone-500 text-xs leading-relaxed">
                    Bringing elegance indoors since 2006. Dedicated to direct-labor woodwork, fine finishing, and transparent pricing.
                  </p>
                </div>

                {/* Quick links */}
                <div className="space-y-3">
                  <h4 className="text-cream font-serif text-xs uppercase tracking-widest font-bold">Quick Links</h4>
                  <ul className="space-y-2 text-stone-500 text-xs font-medium">
                    <li><a href="#services" className="hover:text-gold-premium transition-colors">Woodwork Services</a></li>
                    <li><a href="#gallery" className="hover:text-gold-premium transition-colors">Portfolio Gallery</a></li>
                    <li><a href="#estimator" className="hover:text-gold-premium transition-colors font-serif italic text-gold-accent font-semibold">Labor Cost Planner</a></li>
                    <li><a href="#contact" className="hover:text-gold-premium transition-colors">Contact Us</a></li>
                    <li><a href="#reviews" className="hover:text-gold-premium transition-colors">Client Reviews</a></li>
                  </ul>
                </div>

                {/* Service Areas */}
                <div className="space-y-3">
                  <h4 className="text-cream font-serif text-xs uppercase tracking-widest font-bold">Service Areas</h4>
                  <ul className="space-y-1.5 text-stone-500 text-xs font-medium">
                    <li>Chennai • Bengaluru</li>
                    <li>Hyderabad • Tirupati</li>
                    <li>Nellore • Chittoor</li>
                    <li>Vellore • Kadapa</li>
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
