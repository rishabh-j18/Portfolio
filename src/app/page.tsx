'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Education from '@/components/sections/education';
import Certifications from '@/components/sections/certifications';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import Preloader from '@/components/preloader';

export default function Home() {
  const [contentReady, setContentReady] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Signal that content has mounted and update progress
    setContentReady(true);
    setLoadingProgress(50);


    // Set a minimum display time for the preloader
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
      setLoadingProgress(100);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (contentReady && minTimeElapsed) {
      setIsFadingOut(true);

      const fadeOutTimer = setTimeout(() => {
        setPreloaderFinished(true);
      }, 2000); // Corresponds to the fade-out duration

      return () => clearTimeout(fadeOutTimer);
    }
  }, [contentReady, minTimeElapsed]);

  return (
    <>
      {!preloaderFinished && <Preloader loading={!isFadingOut} progress={loadingProgress} />}
      <div className={`relative min-h-screen flex-col bg-background ${isFadingOut ? 'opacity-100 transition-opacity duration-2000' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20 pointer-events-none"></div>
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
