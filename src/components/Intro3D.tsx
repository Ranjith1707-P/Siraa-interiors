'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Intro3D.module.css';

interface Intro3DProps {
  onComplete: () => void;
}

export default function Intro3D({ onComplete }: Intro3DProps) {
  const [stage, setStage] = useState<'assemble' | 'glow' | 'open' | 'zoom' | 'done'>('assemble');

  useEffect(() => {
    // Stage 1: Assemble (0 to 1.8s) - panels fly in
    // Stage 2: Glow & slogan (1.8s)
    const glowTimer = setTimeout(() => {
      setStage('glow');
    }, 1800);

    // Stage 3: Doors open (2.8s)
    const openTimer = setTimeout(() => {
      setStage('open');
    }, 2800);

    // Stage 4: Zoom into light & fade (3.8s)
    const zoomTimer = setTimeout(() => {
      setStage('zoom');
    }, 3800);

    // Stage 5: Complete & unmount (4.6s)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4600);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(openTimer);
      clearTimeout(zoomTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Motion variants for panels flying in
  const panelVariants = {
    hidden: (direction: 'left' | 'right' | 'top' | 'bottom' | 'back') => {
      switch (direction) {
        case 'left': return { x: -300, rotateY: 180, opacity: 0 };
        case 'right': return { x: 300, rotateY: -180, opacity: 0 };
        case 'top': return { y: -300, rotateX: -90, opacity: 0 };
        case 'bottom': return { y: 300, rotateX: 90, opacity: 0 };
        case 'back': return { z: -300, opacity: 0 };
      }
    },
    visible: {
      x: 0,
      y: 0,
      z: 0,
      rotateX: 0,
      rotateY: 0,
      opacity: 1,
      transition: { type: 'spring' as const, damping: 15, stiffness: 60, duration: 1.2 }
    }
  };

  // Door opening angles
  const leftDoorRotate = stage === 'open' || stage === 'zoom' ? -135 : 0;
  const rightDoorRotate = stage === 'open' || stage === 'zoom' ? 135 : 0;

  // Camera scene animations
  const sceneAnimate = {
    assemble: { rotateY: -25, rotateX: 10, scale: 0.95 },
    glow: { rotateY: 15, rotateX: 5, scale: 1, transition: { duration: 1.5, ease: 'easeInOut' as const } },
    open: { rotateY: 0, rotateX: 0, scale: 1.1, z: 0, transition: { duration: 1.2, ease: 'easeOut' as const } },
    zoom: { scale: 3.5, z: 200, opacity: 0, transition: { duration: 0.9, ease: [0.6, 0.05, -0.01, 0.9] as const } },
    done: {}
  };

  return (
    <div className={styles.introContainer}>
      {/* 3D Scene */}
      <motion.div 
        className={styles.scene3d}
        animate={sceneAnimate[stage === 'done' ? 'zoom' : stage]}
        initial={{ rotateY: -60, rotateX: 20, scale: 0.7 }}
      >
        {/* Back Panel */}
        <motion.div 
          custom="back"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.panel} ${styles.backPanel}`}
        />

        {/* Left Side Panel */}
        <motion.div 
          custom="left"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.panel} ${styles.leftPanel}`}
          style={{ transformOrigin: 'left center', transform: 'rotateY(90deg)' }}
        />

        {/* Right Side Panel */}
        <motion.div 
          custom="right"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.panel} ${styles.rightPanel}`}
          style={{ transformOrigin: 'right center', transform: 'rotateY(-90deg)' }}
        />

        {/* Top Panel */}
        <motion.div 
          custom="top"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.panel} ${styles.topPanel}`}
          style={{ transformOrigin: 'center top', transform: 'rotateX(90deg)' }}
        />

        {/* Bottom Panel */}
        <motion.div 
          custom="bottom"
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className={`${styles.panel} ${styles.bottomPanel}`}
          style={{ transformOrigin: 'center bottom', transform: 'rotateX(-90deg)' }}
        />

        {/* Interior Gold Glow */}
        <div 
          className={styles.glow} 
          style={{ opacity: stage === 'glow' ? 0.3 : stage === 'open' || stage === 'zoom' ? 1 : 0 }} 
        />

        {/* Left Door */}
        <motion.div 
          className={`${styles.door} ${styles.leftDoor}`}
          animate={{ rotateY: leftDoorRotate }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'left center', transform: 'translateZ(50px)' }}
        >
          <div className={styles.handle} />
        </motion.div>

        {/* Right Door */}
        <motion.div 
          className={`${styles.door} ${styles.rightDoor}`}
          animate={{ rotateY: rightDoorRotate }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'right center', transform: 'translateZ(50px)' }}
        >
          <div className={styles.handle} />
        </motion.div>
      </motion.div>

      {/* Slogan & Info */}
      <div className={styles.textContainer}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          SIRAA
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Bringing Elegance Indoors
        </motion.p>
      </div>

      <button className={styles.skipButton} onClick={onComplete}>
        Skip Intro
      </button>
    </div>
  );
}
