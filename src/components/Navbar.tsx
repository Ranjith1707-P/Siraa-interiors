'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing Calculator', href: '#calculator' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.navContainer} container`}>
          <Link href="#home" className={styles.logo} onClick={closeMobileMenu}>
            <span className={styles.logoText}>SIRAA</span>
            <span className={styles.logoSub}>Interiors</span>
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navLinks}>
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.label}
                className={styles.navItem}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </ul>

          <motion.div 
            className={styles.navAction}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="tel:9490265414" className="outline-btn" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
              <PhoneCall size={14} />
              <span>9490265414</span>
            </a>
          </motion.div>

          {/* Mobile toggle */}
          <button className={styles.mobileToggle} onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${mobileOpen ? styles.overlayOpen : ''}`} 
        onClick={closeMobileMenu} 
      />

      {/* Mobile Menu Drawer */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {menuItems.map((item) => (
            <li key={item.label} className={styles.mobileNavItem}>
              <a href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto' }}>
          <a href="tel:9490265414" className="gold-btn" style={{ width: '100%' }}>
            <PhoneCall size={16} />
            <span>Call 9490265414</span>
          </a>
          <p style={{ marginTop: '16px', fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            siraainteriors@gmail.com
          </p>
        </div>
      </div>
    </>
  );
}
