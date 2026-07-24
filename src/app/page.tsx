'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Intro3D from '@/components/Intro3D';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import Reviews from '@/components/Reviews';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Auto skip intro if visited recently in session to prevent annoying returning users
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('siraa_intro_seen');
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('siraa_intro_seen', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro3D onComplete={handleIntroComplete} />
      ) : (
        <>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>
            <Hero />
            <Services />
            <Calculator />
            <Reviews />
            <ContactForm />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
