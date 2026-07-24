'use client';

import { motion } from 'framer-motion';
import { Layers, DoorOpen, Bed, Armchair, Hammer, Check } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  const servicesList = [
    {
      icon: <Layers size={28} />,
      title: 'Cupboards & Wardrobes',
      desc: 'Optimized space solutions featuring soft-close hinges, custom drawer configurations, and high-quality wood laminate/veneer styling.',
      features: ['Normal Cupboards (₹180 - ₹250 / sq.ft)', 'Full Box Cupboards (₹300 - ₹350 / sq.ft)', 'Sliding door wardrobes', 'Modular walk-in closets']
    },
    {
      icon: <DoorOpen size={28} />,
      title: 'Doors & Windows',
      desc: 'Grand entrance main doors and safety-compliant windows crafted out of premium teak wood, finished with protective lacquer coatings.',
      features: ['Teak Wood Main Doors', 'Carved ornamental details', 'French window styles', 'Sturdy pane frames']
    },
    {
      icon: <Bed size={28} />,
      title: 'Cots & Beds',
      desc: 'Sturdy beds built with solid base support. Optional integration of hydraulic lifting drawers, storage spaces, and upholstered headboards.',
      features: ['King & Queen Size Beds', 'Hydraulic storage cots', 'Custom headboard panels', 'Kid-friendly single beds']
    },
    {
      icon: <Armchair size={28} />,
      title: 'Sofas, Tables & Chairs',
      desc: 'Sleek sofa wooden frames, robust dining sets, and comfortable lounge armchairs designed to balance ergonomics with premium timber grains.',
      features: ['Solid wood sofas', 'Dining chairs & stools', 'Wooden lounge frames', 'Polished wood polishing']
    },
    {
      icon: <Hammer size={28} />,
      title: 'Custom Furniture',
      desc: 'One-of-a-kind bespoke creations. Specifically tailored study desks, elegant custom dining tables, and minimalist coffee tables.',
      features: ['Custom Dining Tables', 'Ergonomic Study Desks', 'Teak Coffee Tables', 'Accent shelving units']
    }
  ];

  const locations = [
    'Tamil Nadu',
    'Andhra Pradesh',
    'Kerala',
    'Telangana',
    'Karnataka',
    'Anywhere Else!'
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 20,
        stiffness: 80,
        delay: index * 0.1,
      }
    })
  };

  return (
    <section id="services" className={`${styles.servicesSection} section-padding`}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Woodwork Craft</span>
          <h2 className={styles.title}>What We Craft For You</h2>
          <p className={styles.introText}>
            We combine two decades of heritage carpentry with modern design styles. From simple cabinets to luxurious solid-wood furniture, we deliver excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.card}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={index}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              
              <ul className={styles.featureList}>
                {service.features.map((feat) => (
                  <li key={feat} className={styles.featureItem}>
                    <span className={styles.featureBullet} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Locations Info */}
        <motion.div 
          className={`${styles.locationsPanel} glass-panel`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.locLeft}>
            <span className={styles.subtitle} style={{ fontSize: '0.7rem' }}>Service Regions</span>
            <h3>Serving South India & Beyond</h3>
            <p>
              We deploy our team of experienced carpenters directly to your site. No matter where your house is being built, we ensure hassle-free execution.
            </p>
          </div>
          <div className={styles.locRight}>
            {locations.map((loc) => (
              <span key={loc} className={styles.locTag}>
                {loc}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
