'use client';

import { useState, useEffect } from 'react';
import { Star, Check, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Reviews.module.css';

interface Review {
  id: number;
  name: string;
  rating: number;
  workType: string;
  text: string;
  location: string;
  date: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [workType, setWorkType] = useState('Cupboards & Wardrobes');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fetch reviews on mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      if (res.ok) {
        const data = await res.json();
        // Sort reviews: newest first
        setReviews(data.reverse());
      }
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location || !text) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          location,
          rating,
          workType,
          text
        }),
      });

      if (res.ok) {
        const newReview = await res.json();
        // Prepend new review
        setReviews((prev) => [newReview, ...prev]);
        setSuccess(true);
        // Reset form
        setName('');
        setLocation('');
        setRating(5);
        setText('');
      }
    } catch (error) {
      console.error('Failed to submit review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const workOptions = [
    'Cupboards & Wardrobes',
    'Doors & Windows',
    'Cots & Beds',
    'Sofas, Tables & Chairs',
    'Custom Furniture'
  ];

  return (
    <section id="reviews" className={`${styles.reviewsSection} section-padding`}>
      <div className="container">
        
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Testimonials</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Read real feedback from our clients across South India. After we complete your woodwork project, you can add your review here too!
          </p>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          
          {/* Reviews List */}
          <div className={styles.reviewsCol}>
            {reviews.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '40px' }}>
                Loading client reviews...
              </p>
            ) : (
              reviews.map((rev) => (
                <div key={rev.id} className={styles.reviewCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h4 className={styles.clientName}>{rev.name}</h4>
                      <div className={styles.clientMeta}>
                        <span>{rev.location}</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                    
                    {/* Stars */}
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < rev.rating ? styles.starFilled : styles.starEmpty} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className={styles.workTag}>{rev.workType}</div>
                  <p className={styles.reviewText}>"{rev.text}"</p>
                </div>
              ))
            )}
          </div>

          {/* Add Review Form */}
          <div className={styles.formCol}>
            <AnimatePresence>
              {success ? (
                <motion.div 
                  className={styles.successCard}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className={styles.successIcon}>
                    <Check size={32} />
                  </div>
                  <h3 className={styles.successTitle}>Review Submitted!</h3>
                  <p className={styles.successText}>
                    Thank you for sharing your experience. Your review is now visible on our website.
                  </p>
                  <button className="outline-btn" onClick={() => setSuccess(false)}>
                    Submit Another Review
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>Leave a Review</h3>
                  <p className={styles.formDesc}>
                    Did we complete carpentry or woodworks at your house recently? Let us know how we did.
                  </p>

                  {/* Name Input */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel} htmlFor="client-name">Your Name</label>
                    <input 
                      type="text" 
                      id="client-name" 
                      className={styles.textInput} 
                      placeholder="e.g. Anand Kumar" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>

                  {/* Location Input */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel} htmlFor="client-loc">Location</label>
                    <input 
                      type="text" 
                      id="client-loc" 
                      className={styles.textInput} 
                      placeholder="e.g. Sathyavedu, AP" 
                      value={location} 
                      onChange={(e) => setLocation(e.target.value)} 
                      required 
                    />
                  </div>

                  {/* Work Type Dropdown */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel} htmlFor="client-worktype">Woodwork Type</label>
                    <select 
                      id="client-worktype" 
                      className={styles.selectInput}
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                    >
                      {workOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Rating Stars Input */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel}>Rating</label>
                    <div className={styles.starRatingContainer}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={styles.ratingStarBtn}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star 
                            size={28}
                            className={
                              star <= (hoverRating ?? rating) 
                                ? styles.starFilled 
                                : styles.starEmpty
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text Area */}
                  <div className={styles.formGroup}>
                    <label className={styles.inputLabel} htmlFor="client-review">Your Review</label>
                    <textarea 
                      id="client-review" 
                      className={styles.textAreaInput} 
                      rows={4}
                      placeholder="Share details of the woodwork, finish, craftsmanship, and how our workers did..." 
                      value={text} 
                      onChange={(e) => setText(e.target.value)} 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className={`${styles.submitBtn} gold-btn`} 
                    disabled={submitting}
                  >
                    <span>{submitting ? 'Submitting...' : 'Submit Review'}</span>
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
