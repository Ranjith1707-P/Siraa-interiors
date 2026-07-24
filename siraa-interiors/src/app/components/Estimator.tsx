"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Calculator, ArrowRight } from "lucide-react";

export default function Estimator() {
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(7);
  const [workType, setWorkType] = useState<"normal" | "box">("normal");
  const [complexity, setComplexity] = useState<"basic" | "medium" | "premium">("medium");

  const [ratePerSqFt, setRatePerSqFt] = useState(200);
  const [totalSqFt, setTotalSqFt] = useState(42);
  const [totalCostRange, setTotalCostRange] = useState({ min: 7500, max: 9500 });

  // Recalculate cost when selections change
  useEffect(() => {
    const sqFt = width * height;
    setTotalSqFt(sqFt);

    let baseRate = 200;
    let minRate = 180;
    let maxRate = 250;

    if (workType === "normal") {
      if (complexity === "basic") {
        baseRate = 180;
        minRate = 180;
        maxRate = 195;
      } else if (complexity === "medium") {
        baseRate = 210;
        minRate = 200;
        maxRate = 225;
      } else {
        baseRate = 250;
        minRate = 230;
        maxRate = 250;
      }
    } else {
      // Full Box Cupboard
      if (complexity === "basic") {
        baseRate = 300;
        minRate = 300;
        maxRate = 315;
      } else if (complexity === "medium") {
        baseRate = 325;
        minRate = 315;
        maxRate = 335;
      } else {
        baseRate = 350;
        minRate = 340;
        maxRate = 350;
      }
    }

    setRatePerSqFt(baseRate);
    setTotalCostRange({
      min: Math.round(sqFt * minRate),
      max: Math.round(sqFt * maxRate),
    });
  }, [width, height, workType, complexity]);

  // Handler to fill in contact form
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Pre-fill type of work if field exists
      const workSelect = document.getElementById("workType") as HTMLSelectElement;
      if (workSelect) {
        workSelect.value = "Cupboards & Wardrobes";
      }
      const messageTextarea = document.getElementById("message") as HTMLTextAreaElement;
      if (messageTextarea) {
        messageTextarea.value = `Hi Siraa, I estimated a ${workType === "normal" ? "Normal" : "Full Box"} Wardrobe (${width}ft x ${height}ft, approx ${totalSqFt} sq.ft) with ${complexity} complexity design. Let's discuss details and timelines.`;
      }
    }
  };

  return (
    <section id="estimator" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute left-1/4 top-1/3 w-[250px] h-[250px] bg-gold-premium/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-premium font-serif text-sm tracking-[0.3em] uppercase block mb-3">
            Budget Planner
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-cream mb-4">
            Labor Cost Estimator
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mx-auto mb-6" />
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed">
            Specify the approximate width and height of your wardrobes or cabinets to calculate your direct labor charges instantly.
          </p>
        </div>

        {/* Dynamic Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Sliders & Controls */}
          <div className="lg:col-span-7 bg-stone-950/60 border border-stone-850 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-xl">
            <div className="space-y-8">
              
              {/* Type Selection */}
              <div>
                <label className="text-stone-400 font-sans text-xs tracking-wider uppercase font-semibold block mb-4">
                  Select Cupboard Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setWorkType("normal")}
                    className={`flex flex-col p-4 rounded-xl border text-left transition-all duration-300 ${
                      workType === "normal"
                        ? "border-gold-premium bg-gold-premium/5"
                        : "border-stone-800 bg-stone-900/30 hover:border-stone-700"
                    }`}
                  >
                    <span className={`font-serif font-bold text-base ${workType === "normal" ? "text-gold-premium" : "text-stone-300"}`}>
                      Normal Cupboard
                    </span>
                    <span className="text-stone-500 text-xs mt-1 leading-relaxed">
                      Built directly on existing walls / niches. Perfect for cost-effectiveness. (₹180 - ₹250 / sq.ft)
                    </span>
                  </button>

                  <button
                    onClick={() => setWorkType("box")}
                    className={`flex flex-col p-4 rounded-xl border text-left transition-all duration-300 ${
                      workType === "box"
                        ? "border-gold-premium bg-gold-premium/5"
                        : "border-stone-800 bg-stone-900/30 hover:border-stone-700"
                    }`}
                  >
                    <span className={`font-serif font-bold text-base ${workType === "box" ? "text-gold-premium" : "text-stone-300"}`}>
                      Full Box Cupboard
                    </span>
                    <span className="text-stone-500 text-xs mt-1 leading-relaxed">
                      Features full back panel, double sides, and sturdy self-contained box frames. (₹300 - ₹350 / sq.ft)
                    </span>
                  </button>
                </div>
              </div>

              {/* Dimension Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-stone-400 text-xs uppercase tracking-wider font-semibold">
                      Cabinet Width (Feet)
                    </span>
                    <span className="text-gold-premium font-mono font-bold text-lg">{width} ft</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="24"
                    value={width}
                    onChange={(e) => setWidth(parseInt(e.target.value))}
                    className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-gold-premium"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 mt-1">
                    <span>2 ft</span>
                    <span>12 ft</span>
                    <span>24 ft</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-stone-400 text-xs uppercase tracking-wider font-semibold">
                      Cabinet Height (Feet)
                    </span>
                    <span className="text-gold-premium font-mono font-bold text-lg">{height} ft</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="12"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-gold-premium"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 mt-1">
                    <span>2 ft</span>
                    <span>7 ft (Std)</span>
                    <span>12 ft (Loft)</span>
                  </div>
                </div>
              </div>

              {/* Design Complexity Selection */}
              <div>
                <label className="text-stone-400 font-sans text-xs tracking-wider uppercase font-semibold block mb-3">
                  Design & Carving Complexity
                </label>
                <div className="flex bg-stone-900 border border-stone-800 rounded-lg p-1">
                  {(["basic", "medium", "premium"] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setComplexity(level)}
                      className={`flex-1 py-2 text-center text-xs font-semibold rounded-md uppercase tracking-wider transition-all duration-300 ${
                        complexity === level
                          ? "bg-gold-premium text-stone-950 font-bold"
                          : "text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Disclaimer */}
            <div className="mt-8 flex gap-3 p-3 bg-stone-900/50 border border-stone-800/40 rounded-lg">
              <HelpCircle className="w-4 h-4 text-stone-500 mt-0.5 flex-shrink-0" />
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Prices shown are direct estimates for **carpentry and installation labor only**. Hardware fitting, materials, veneer polishing, laminate pasting, transport, and worker food expenses differ according to your local material store and site locations.
              </p>
            </div>

          </div>

          {/* Visual Display Output */}
          <div className="lg:col-span-5 bg-gradient-to-br from-wood-dark via-stone-950 to-stone-950 border border-stone-850 p-6 md:p-8 rounded-2xl flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-premium/5 rounded-full filter blur-3xl pointer-events-none" />

            {/* Wardrobe Resizing Preview Mockup */}
            <div className="flex-1 flex flex-col justify-center items-center py-6 min-h-[220px]">
              <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-4 font-semibold">
                Simulated Scale Profile
              </span>
              
              {/* Dynamic Simulated Closet */}
              <motion.div
                layout
                className="relative bg-stone-900 rounded-md border-4 border-stone-800 shadow-inner flex flex-wrap"
                style={{
                  width: `${Math.min(100 + width * 8, 200)}px`,
                  height: `${Math.min(100 + height * 12, 190)}px`,
                }}
              >
                {/* Wood grains inside */}
                <div className="absolute inset-0 wood-grain opacity-10 rounded-sm pointer-events-none" />
                
                {/* Simulated panels based on width */}
                <div className="absolute inset-y-0 left-0 w-1/2 border-r-2 border-stone-950/70" />
                
                {/* Horizontal separator (Loft panel if height > 8) */}
                {height >= 8 && (
                  <div className="absolute left-0 right-0 top-1/4 h-[2px] bg-stone-950/70" />
                )}

                {/* Cabinet Door Handles */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[50%] -translate-x-[50%] flex gap-1.5">
                  <div className="w-1.5 h-8 bg-gold-premium rounded-sm opacity-80" />
                  <div className="w-1.5 h-8 bg-gold-premium rounded-sm opacity-80" />
                </div>

                {/* Dimension Tags */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-stone-500 whitespace-nowrap">
                  W: {width} ft
                </div>
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[10px] font-mono text-stone-500 rotate-270 whitespace-nowrap">
                  H: {height} ft
                </div>
              </motion.div>
            </div>

            {/* Calculations and Rates */}
            <div className="space-y-4 pt-6 border-t border-stone-800/80">
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-400">Total Area:</span>
                <span className="text-cream font-mono font-semibold">{totalSqFt} sq. ft.</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-400">Avg Labor Rate / sq.ft:</span>
                <span className="text-gold-accent font-mono font-semibold">₹{ratePerSqFt}</span>
              </div>

              <div className="bg-stone-900/80 rounded-xl p-4 border border-stone-800 text-center">
                <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold block mb-1">
                  Estimated Direct Labor Cost
                </span>
                <span className="text-2xl md:text-3xl font-serif font-bold text-cream">
                  ₹{totalCostRange.min.toLocaleString("en-IN")} - ₹{totalCostRange.max.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={handleScrollToContact}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 shadow-md gold-glow"
              >
                <Calculator className="w-4 h-4" />
                Book carpentry labor
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
