'use client';

import { motion } from 'framer-motion';
import { Ruler, ShieldCheck, Sparkles, MoveRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 20, stiffness: 100 }
    }
  };

  const rightVisualVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: 'easeOut' as const, delay: 0.4 }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      <div className={`${styles.heroContent} container`}>
        {/* Left Side Details */}
        <motion.div 
          className={styles.heroLeft}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <Sparkles size={12} />
            <span>Bringing Elegance Indoors</span>
          </motion.div>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Premium Woodwork & <span className="gold-gradient-text">Custom Furniture</span>
            <span className={`${styles.highlight} gold-gradient-text`}>Crafted to Last.</span>
          </motion.h1>

          <motion.p className={styles.description} variants={itemVariants}>
            Tailored carpentry solutions for middle and upper-middle class homes. From custom wardrobe cupboards and beds to designer main doors and tables. Sourced by you or managed by us, completed by master carpenters with 20 years of expertise.
          </motion.p>

          <motion.div className={styles.actions} variants={itemVariants}>
            <a href="#calculator" className="gold-btn">
              <span>Calculate Estimate</span>
              <MoveRight size={16} />
            </a>
            <a href="#services" className="outline-btn">
              <span>Explore Services</span>
            </a>
          </motion.div>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.statItem}>
              <span className={styles.statVal}>20+</span>
              <span className={styles.statLbl}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>100%</span>
              <span className={styles.statLbl}>Happy Customers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal}>5+</span>
              <span className={styles.statLbl}>States Served</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Visual Graphic */}
        <motion.div 
          className={styles.heroRight}
          variants={rightVisualVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.visualWrapper}>
            <div className={styles.visualBlueprint}>
              <div className={styles.visualGridLines} />
              
              {/* Animated Wardrobe Outline */}
              <motion.div 
                className={styles.visualFurnitureOutline}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                <div className={styles.visualCrown} />
                <div className={styles.visualDoors}>
                  <div className={styles.visualLeftDoor}>
                    <motion.div 
                      className={styles.visualHandle}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    />
                  </div>
                  <div className={styles.visualRightDoor}>
                    <motion.div 
                      className={styles.visualHandle}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    />
                  </div>
                </div>
                <div className={styles.visualBase} />

                {/* Simulated Dimensions */}
                <div className={`${styles.dimensions} ${styles.dimHeight}`}>H: 7.0 ft</div>
                <div className={`${styles.dimensions} ${styles.dimWidth}`}>W: 5.0 ft</div>
              </motion.div>
            </div>
          </div>

          {/* Floating badge for Carpenters */}
          <motion.div 
            className={styles.floatingExperienceCard}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className={styles.floatingIcon}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className={styles.floatingTextTitle}>Master Woodwork</h4>
              <p className={styles.floatingTextDesc}>20 Yrs Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
