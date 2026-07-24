"use client";

import React, { useState, useEffect } from "react";
import { Star, MessageSquare, Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  id: string;
  name: string;
  place: string;
  rating: number;
  workType: string;
  comment: string;
  date: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Rajesh K.",
    place: "Chennai, TN",
    rating: 5,
    workType: "Teakwood Main Doors",
    comment: "The master craftsman carved our main entrance door beautifully. Splendid joinery and finishing.",
    date: "12 May 2026",
  },
  {
    id: "rev-2",
    name: "Sowmya Reddy",
    place: "Tirupati, AP",
    rating: 5,
    workType: "Box Wardrobes & Cots",
    comment: "Excellent experience. Siraa Interiors recommended the best materials for our budget. Highly recommended!",
    date: "28 June 2026",
  },
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState(5);
  const [workType, setWorkType] = useState("Cupboards & Wardrobes");
  const [comment, setComment] = useState("");
  
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = localStorage.getItem("siraa_reviews");
    if (savedReviews) {
      try {
        setReviews(JSON.parse(savedReviews));
      } catch (e) {
        setReviews(DEFAULT_REVIEWS);
      }
    } else {
      setReviews(DEFAULT_REVIEWS);
      localStorage.setItem("siraa_reviews", JSON.stringify(DEFAULT_REVIEWS));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !place || !comment) return;

    const newReview: Review = {
      id: `rev-${Date.now()}`,
      name,
      place,
      rating,
      workType,
      comment,
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("siraa_reviews", JSON.stringify(updatedReviews));

    // Reset Form
    setName("");
    setPlace("");
    setRating(5);
    setComment("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-12 md:py-20 bg-stone-950 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-1/4 bottom-10 w-[200px] h-[200px] bg-gold-premium/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="max-w-2xl">
            <span className="text-gold-premium font-serif text-sm tracking-[0.3em] uppercase block mb-3">
              Happy Homeowners
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mb-3">
              Testimonials
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mb-4" />
            <p className="text-stone-400 font-sans text-xs md:text-sm leading-relaxed">
              Real feedback from homeowners across South India.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 border border-gold-premium text-gold-premium hover:bg-gold-premium hover:text-stone-950 rounded-full font-serif font-bold text-xs tracking-wider uppercase transition-all duration-300 self-start"
          >
            <Plus className="w-3.5 h-3.5" />
            Write a Review
          </button>
        </div>

        {/* Add Review Drawer/Collapse Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="bg-stone-900 border border-stone-850 p-5 rounded-2xl shadow-xl max-w-2xl mx-auto">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-3">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="text-cream text-base font-serif font-bold">Review Submitted!</h3>
                    <p className="text-stone-400 text-[10px] mt-1">Thank you for sharing your feedback with SIRAA Interiors.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-cream font-serif font-bold text-base mb-1">Share your experience</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">Your Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh"
                          className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 text-xs focus:border-gold-premium focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">Your Location</label>
                        <input
                          type="text"
                          required
                          value={place}
                          onChange={(e) => setPlace(e.target.value)}
                          placeholder="e.g. Nellore, AP"
                          className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 text-xs focus:border-gold-premium focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">Type of Woodwork</label>
                        <select
                          value={workType}
                          onChange={(e) => setWorkType(e.target.value)}
                          className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 text-xs focus:border-gold-premium focus:outline-none appearance-none"
                        >
                          <option>Cupboards & Wardrobes</option>
                          <option>Doors & Windows (Main Doors)</option>
                          <option>Cots & Beds</option>
                          <option>Sofas, Tables & Chairs</option>
                          <option>Custom Dining/Study/Coffee Tables</option>
                          <option value="Other Custom Work">(Other Work) Custom Works</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-stone-400 text-[10px] block mb-1">Overall Rating</label>
                        <div className="flex gap-1.5 items-center h-8">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="text-stone-500 hover:text-gold-accent transition-colors"
                            >
                              <Star
                                className={`w-5 h-5 ${
                                  star <= rating ? "fill-gold-premium text-gold-premium" : "text-stone-600"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-stone-400 text-[10px] block mb-1">Your Review Message</label>
                      <textarea
                        required
                        rows={2}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Detail your carpentry work, finish, timeline..."
                        className="w-full bg-stone-950 border border-stone-800 rounded-lg p-2 text-stone-200 text-xs focus:border-gold-premium focus:outline-none resize-none"
                      />
                    </div>

                    <div className="flex gap-3 justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-1.5 text-stone-400 hover:text-stone-200 text-[10px] font-semibold uppercase"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-gradient-to-r from-gold-premium to-gold-accent text-stone-950 font-bold rounded-lg text-[10px] uppercase tracking-wider"
                      >
                        Publish Review
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <AnimatePresence>
            {reviews.slice(0, 2).map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-stone-900/40 border border-stone-850 p-5 rounded-xl flex flex-col justify-between shadow-md relative"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < review.rating ? "fill-gold-premium text-gold-premium" : "text-stone-800"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-stone-300 font-sans text-xs italic leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                {/* Footer details */}
                <div className="border-t border-stone-800/80 pt-3 mt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-xs text-cream block">{review.name}</span>
                    <span className="text-[9px] text-stone-500 font-mono">{review.date}</span>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-[10px]">
                    <span className="text-gold-accent font-medium">{review.workType}</span>
                    <span className="text-stone-500">{review.place}</span>
                  </div>
                </div>

                <MessageSquare className="absolute top-5 right-5 w-6 h-6 text-stone-850/60 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
