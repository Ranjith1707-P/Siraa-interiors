'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} container`}>
        
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <span className={styles.logoText}>SIRAA</span>
          <span className={styles.logoSub}>Interiors</span>
          <p className={styles.desc}>
            Bringing elegance indoors. Premium woodwork, cupboards, cots, sofas, tables, doors and windows. Over 20 years of craftsmanship experience.
          </p>
        </div>

        {/* Links Column */}
        <div className={styles.linksCol}>
          <h4>Quick Links</h4>
          <ul className={styles.linksList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#calculator">Pricing Calculator</a></li>
            <li><a href="#reviews">Client Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.contactCol}>
          <h4>Contact Info</h4>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <Phone size={16} className={styles.contactIcon} />
              <div className={styles.contactValue}>
                <a href="tel:9490265414">9490265414</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <Mail size={16} className={styles.contactIcon} />
              <div className={styles.contactValue}>
                <a href="mailto:siraainteriors@gmail.com">siraainteriors@gmail.com</a>
              </div>
            </li>
            <li className={styles.contactItem}>
              <MapPin size={16} className={styles.contactIcon} />
              <div className={styles.contactValue}>
                <span>Sathyavedu, Andhra Pradesh, India - 517588</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className={`${styles.bottomBar} container`}>
        <p>© {currentYear} SIRAA Interiors. All rights reserved.</p>
        <p>Crafting Premium Spaces Across TN, AP, Kerala, Karnataka, and Telangana.</p>
      </div>
    </footer>
  );
}
