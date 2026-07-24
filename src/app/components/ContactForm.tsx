"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  X, 
  MessageSquare, 
  ChevronDown, 
  Loader2, 
  Send 
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the direct labor model save me money?",
    answer: "You buy materials directly at vendor cost (zero markup). You only pay our direct carpentry labor cost (₹180-₹350/sq.ft), saving up to 40% compared to full-service interior firms."
  },
  {
    question: "Which states do you service in South India?",
    answer: "We are based in Sathyavedu, AP. We regularly service Andhra Pradesh, Tamil Nadu (including Chennai), Karnataka, Kerala, and Telangana."
  },
  {
    question: "What wood/plywood do you recommend?",
    answer: "For moisture-heavy areas like kitchens, we recommend Boiling Water Proof (BWP) plywood. For cupboards and wardrobes, Moisture Resistant (MR) plywood works excellent."
  }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    workType: "Cupboards & Wardrobes",
    message: "",
  });

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const toggleFaq = (index: number) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Basic Validation
    if (!formData.name.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError("Please enter your phone number.");
      return;
    }
    if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) {
      setValidationError("Please enter a valid phone number (10-15 digits).");
      return;
    }
    if (!formData.message.trim()) {
      setValidationError("Please share details about your request.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          workType: "Cupboards & Wardrobes",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleWhatsAppDirect = () => {
    const defaultText = `Hi Siraa Interiors, my name is ${formData.name || "Guest"}. I'm interested in ${formData.workType} woodwork service. Details: ${formData.message || "I'd like to book a free consultation."}`;
    const encodedText = encodeURIComponent(defaultText);
    window.open(`https://wa.me/919490169314?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-stone-950 relative overflow-hidden border-t border-stone-900">
      {/* Background Decorative Blurs */}
      <div className="absolute right-1/4 bottom-1/4 w-[300px] h-[300px] bg-wood-light/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute left-10 top-1/4 w-[200px] h-[200px] bg-gold-premium/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-gold-premium font-serif text-sm tracking-[0.3em] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-cream mb-4">
            Start Your Woodwork Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-premium to-gold-accent mx-auto mb-4 md:mb-6" />
          <p className="text-stone-400 font-sans text-sm md:text-base leading-relaxed">
            Fill out the form or contact us directly to request a call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: FAQ & CONTACT INFO */}
          <div className="lg:col-span-6 space-y-6 md:space-y-10">
            
            {/* Contact Details */}
            <div className="bg-stone-900/30 border border-stone-900 p-5 md:p-8 rounded-2xl space-y-4 md:space-y-6">
              <h3 className="text-xl font-serif font-bold text-cream">
                Direct Communications
              </h3>
              <p className="text-stone-400 text-xs leading-relaxed">
                Connect directly with Siraa Interiors for fast pricing details, timber procurement, and design options.
              </p>

              <div className="space-y-4">
                <a 
                  href="tel:+919490265414" 
                  className="flex items-center gap-4 group p-3 hover:bg-stone-900/50 rounded-xl transition-all duration-300 border border-transparent hover:border-stone-850"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-premium/10 flex items-center justify-center text-gold-premium transition-transform group-hover:scale-110">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">Call Directly</span>
                    <span className="text-cream text-sm font-bold group-hover:text-gold-accent transition-colors">+91 94902 65414</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/919490169314" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-3 hover:bg-stone-900/50 rounded-xl transition-all duration-300 border border-transparent hover:border-stone-850"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-premium/10 flex items-center justify-center text-gold-premium transition-transform group-hover:scale-110">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 1.98 14.12 1.012 12.006 1.012c-5.438 0-9.863 4.372-9.867 9.8.001 2.13.588 4.21 1.705 6.012L2.74 21.26l4.907-1.285-.999-.597z" />
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.057-.978-.277-.1-.479-.15-.68.15-.201.3-.778.978-.953 1.178-.175.2-.35.225-.651.075-.301-.15-1.27-.468-2.42-1.494-.894-.797-1.498-1.782-1.673-2.082-.175-.3-.019-.462.131-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.68-1.638-.93-2.244-.244-.587-.492-.51-.68-.52h-.578c-.201 0-.528.075-.804.375-.276.3-1.054 1.03-1.054 2.515s1.08 2.917 1.23 3.117c.15.2 2.115 3.23 5.122 4.532.716.31 1.275.495 1.71.633.72.228 1.375.196 1.892.119.577-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.276-.201-.577-.352z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">WhatsApp Message</span>
                    <span className="text-cream text-sm font-bold group-hover:text-gold-accent transition-colors">+91 94901 69314</span>
                  </div>
                </a>

                <a 
                  href="mailto:siraainteriors@gmail.com" 
                  className="flex items-center gap-4 group p-3 hover:bg-stone-900/50 rounded-xl transition-all duration-300 border border-transparent hover:border-stone-850"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-premium/10 flex items-center justify-center text-gold-premium transition-transform group-hover:scale-110">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">Email Inquiry</span>
                    <span className="text-cream text-sm font-bold group-hover:text-gold-accent transition-colors">siraainteriors@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 border border-transparent rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gold-premium/10 flex items-center justify-center text-gold-premium">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider block font-semibold">Workshop Address</span>
                    <span className="text-cream text-xs leading-relaxed font-semibold">Sathyavedu, Andhra Pradesh, India - 517588</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-serif font-bold text-cream px-2">
                Frequently Asked Questions
              </h3>
              
              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = faqOpenIndex === index;
                  return (
                    <div 
                      key={index}
                      className="border border-stone-850 bg-stone-900/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-stone-800"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 text-left font-serif text-sm font-semibold text-cream hover:text-gold-premium transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-stone-500 transition-transform duration-300 flex-shrink-0 ml-4 ${
                            isOpen ? "transform rotate-180 text-gold-premium" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-4 pb-4 text-xs text-stone-400 leading-relaxed border-t border-stone-900/60 pt-2 font-sans">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LEAD FORM */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-wood-dark via-stone-950 to-stone-950 border border-stone-850 p-5 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-premium/5 rounded-full filter blur-2xl pointer-events-none" />
              
              <h3 className="text-2xl font-serif font-bold text-cream mb-6">
                Consultation Request Form
              </h3>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 mx-auto shadow-lg shadow-green-500/5">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-cream">Inquiry Submitted Successfully!</h4>
                    <p className="text-stone-400 text-xs leading-relaxed max-w-sm mx-auto">
                      Thank you for contacting Siraa Interiors. Our team will review your requirements and reach out to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 bg-stone-900 hover:bg-stone-850 border border-stone-800 text-cream text-xs font-semibold rounded-lg transition-colors mt-4"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name Input */}
                    <div>
                      <label className="block text-[10px] text-stone-400 uppercase tracking-wider font-semibold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-stone-900/60 border border-stone-800 focus:border-gold-premium rounded-xl px-4 py-3 text-cream text-sm transition-all outline-none"
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] text-stone-400 uppercase tracking-wider font-semibold mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="94902 65414"
                          className="w-full bg-stone-900/60 border border-stone-800 focus:border-gold-premium rounded-xl px-4 py-3 text-cream text-sm transition-all outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-stone-400 uppercase tracking-wider font-semibold mb-2">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="johndoe@example.com"
                          className="w-full bg-stone-900/60 border border-stone-800 focus:border-gold-premium rounded-xl px-4 py-3 text-cream text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Select Woodwork Service */}
                    <div>
                      <label className="block text-[10px] text-stone-400 uppercase tracking-wider font-semibold mb-2">
                        Select Required Woodwork
                      </label>
                      <select
                        name="workType"
                        id="workType"
                        value={formData.workType}
                        onChange={handleInputChange}
                        className="w-full bg-stone-900 border border-stone-800 focus:border-gold-premium rounded-xl px-4 py-3 text-cream text-sm transition-all outline-none appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M7 9l3 3 3-3' stroke='%23a8a29e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.25rem",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <option value="Cupboards & Wardrobes">Cupboards & Wardrobes</option>
                        <option value="Doors & Windows">Doors & Windows</option>
                        <option value="Cots & Beds">Cots & Beds</option>
                        <option value="Sofas, Tables & Chairs">Sofas, Tables & Chairs</option>
                        <option value="Custom Furniture">Custom Furniture</option>
                        <option value="Full Home Interior">Full Home Interior</option>
                        <option value="Other Custom Work">(Other Work) Custom Works</option>
                      </select>
                    </div>

                    {/* Message Input */}
                    <div>
                      <label className="block text-[10px] text-stone-400 uppercase tracking-wider font-semibold mb-2">
                        Describe Design or Project Details *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Please describe approximate sizes, preferred wood choice, and design complexity levels..."
                        className="w-full bg-stone-900/60 border border-stone-800 focus:border-gold-premium rounded-xl px-4 py-3 text-cream text-sm transition-all outline-none resize-none"
                      />
                    </div>

                    {/* Validation Error Banner */}
                    {validationError && (
                      <div className="text-xs text-red-400 font-semibold bg-red-950/20 border border-red-900/40 p-3 rounded-lg flex items-center gap-2">
                        <X className="w-4 h-4 flex-shrink-0" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    {/* Submit Error Banner */}
                    {status === "error" && (
                      <div className="text-xs text-red-400 font-semibold bg-red-950/20 border border-red-900/40 p-3 rounded-lg flex items-center gap-2">
                        <X className="w-4 h-4 flex-shrink-0" />
                        <span>Failed to send your request. Please try again or submit via WhatsApp directly.</span>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-gold-premium to-gold-accent hover:from-gold-accent hover:to-gold-premium text-stone-950 font-serif font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md gold-glow"
                      >
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Inquiry
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppDirect}
                        className="inline-flex items-center justify-center gap-2 py-4 px-6 border border-stone-800 hover:border-gold-premium rounded-xl text-cream hover:bg-stone-900/30 text-sm font-semibold transition-all duration-300"
                      >
                        <MessageSquare className="w-4 h-4 text-green-400" />
                        WhatsApp Direct
                      </button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
