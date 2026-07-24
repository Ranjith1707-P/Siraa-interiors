'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Check, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [workType, setWorkType] = useState('Cupboards & Wardrobes');
  const [message, setMessage] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Listen for applied estimations from Calculator component
  useEffect(() => {
    const handleApplyEstimate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setWorkType(customEvent.detail.workType || 'Cupboards & Wardrobes');
        setMessage(customEvent.detail.message || '');
        setIsHighlighted(true);
        
        // Remove glow effect after 1.5s
        const timer = setTimeout(() => {
          setIsHighlighted(false);
        }, 1500);

        return () => clearTimeout(timer);
      }
    };

    window.addEventListener('applyEstimate', handleApplyEstimate);
    return () => window.removeEventListener('applyEstimate', handleApplyEstimate);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate lead capture API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset fields
      setName('');
      setPlace('');
      setMobile('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  const workOptions = [
    'Cupboards & Wardrobes',
    'Doors & Windows',
    'Cots & Beds',
    'Sofas, Tables & Chairs',
    'Custom Furniture',
    'Complete Home Interiors'
  ];

  return (
    <section id="contact" className={`${styles.contactSection} section-padding`}>
      <div className="container">
        <div className={styles.grid}>
          
          {/* Info Details */}
          <div className={styles.infoCol}>
            <span className={styles.subtitle}>Get In Touch</span>
            <h2 className={styles.title}>Let's Discuss Your Project</h2>
            <p className={styles.desc}>
              Have questions about pricing, material options, or timelines? Fill out the form, or reach out to our team directly. We are happy to consult and guide you.
            </p>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Call Us</h4>
                  <a href="tel:9490265414" className={styles.infoValue}>9490265414</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Email Us</h4>
                  <a href="mailto:siraainteriors@gmail.com" className={styles.infoValue}>siraainteriors@gmail.com</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Our Workshop</h4>
                  <span className={styles.infoValue}>
                    Sathyavedu, Andhra Pradesh - Pin 517588
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Lead Form */}
          <div className={`${styles.formCard} ${isHighlighted ? styles.highlightAnim : ''}`}>
            <AnimatePresence>
              {success ? (
                <motion.div 
                  className={styles.successOverlay}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.successIcon}>
                    <Check size={36} />
                  </div>
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out to SIRAA Interiors. We will review your requirements and call you back shortly.
                  </p>
                  <button className="gold-btn" onClick={() => setSuccess(false)}>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGrid}>
                    
                    {/* Name */}
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="lead-name">Name</label>
                      <input 
                        type="text" 
                        id="lead-name" 
                        className={styles.input} 
                        placeholder="e.g. Ramesh Reddy" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                      />
                    </div>

                    {/* Place */}
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="lead-place">Your Place / Location</label>
                      <input 
                        type="text" 
                        id="lead-place" 
                        className={styles.input} 
                        placeholder="e.g. Tirupati, AP" 
                        value={place} 
                        onChange={(e) => setPlace(e.target.value)} 
                        required 
                      />
                    </div>

                    {/* Mobile */}
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="lead-mobile">Mobile Number</label>
                      <input 
                        type="tel" 
                        id="lead-mobile" 
                        className={styles.input} 
                        placeholder="e.g. 9876543210" 
                        value={mobile} 
                        onChange={(e) => setMobile(e.target.value)} 
                        required 
                      />
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="lead-email">Email ID</label>
                      <input 
                        type="email" 
                        id="lead-email" 
                        className={styles.input} 
                        placeholder="e.g. name@email.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>

                    {/* Work Type Dropdown */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label} htmlFor="lead-worktype">Type of Work Needed</label>
                      <select 
                        id="lead-worktype" 
                        className={styles.select}
                        value={workType}
                        onChange={(e) => setWorkType(e.target.value)}
                      >
                        {workOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label className={styles.label} htmlFor="lead-msg">Your Message</label>
                      <textarea 
                        id="lead-msg" 
                        className={styles.textarea} 
                        rows={4}
                        placeholder="Write down any specific details like rooms, sizes, or custom furniture requests..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                      />
                    </div>

                    {/* Submit Button */}
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <button 
                        type="submit" 
                        className={`${styles.submitBtn} gold-btn`} 
                        style={{ width: '100%' }}
                        disabled={loading}
                      >
                        <Send size={16} />
                        <span>{loading ? 'Sending...' : 'Send Message'}</span>
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
