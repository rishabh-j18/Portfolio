'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/navbar';
import Hero from '@/components/sections/hero';
import Footer from '@/components/layout/footer';
import Preloader from '@/components/preloader';
import LoadingSection from '@/components/loading-section';

// Lazy load heavy sections
const About = dynamic(() => import('@/components/sections/about'), {
  loading: () => <LoadingSection />,
  ssr: false
});
const Skills = dynamic(() => import('@/components/sections/skills'), {
  loading: () => <LoadingSection />,
  ssr: false
});
const Projects = dynamic(() => import('@/components/sections/projects'), {
  loading: () => <LoadingSection />,
  ssr: false
});
const Education = dynamic(() => import('@/components/sections/education'), {
  loading: () => <LoadingSection />,
  ssr: false
});
const Certifications = dynamic(() => import('@/components/sections/certifications'), {
  loading: () => <LoadingSection />,
  ssr: false
});
const Contact = dynamic(() => import('@/components/sections/contact'), {
  loading: () => <LoadingSection />,
  ssr: false
});

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [visualProgress, setVisualProgress] = useState(0);
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Stage 1: Component has mounted
    setLoadingProgress(50);

    // Stage 2: Minimum preloader time elapsed
    const timer = setTimeout(() => {
      setLoadingProgress(100);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let delayTimer: NodeJS.Timeout;
    if (loadingProgress !== visualProgress) {
      delayTimer = setTimeout(() => {
        setVisualProgress(loadingProgress);
      }, 500);
    }
    return () => clearTimeout(delayTimer);
  }, [loadingProgress, visualProgress]);


  useEffect(() => {
    if (visualProgress === 100 && !isFadingOut) {
      const startFadeOutTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 250); // Wait 250ms before starting fade out

      const finishPreloaderTimer = setTimeout(() => {
        setPreloaderFinished(true);
      }, 2000); // Corresponds to the fade-out duration

      return () => {
        clearTimeout(startFadeOutTimer);
        clearTimeout(finishPreloaderTimer);
      };
    }
  }, [visualProgress, isFadingOut]);


  return (
    <>
      {!preloaderFinished && <Preloader loading={!isFadingOut} progress={visualProgress} />}
      <div className={`relative min-h-screen flex-col bg-background ${isFadingOut ? 'opacity-100 transition-opacity duration-2000' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20 pointer-events-none"></div>
        <Navbar />
        <main className="flex-grow">
          <Hero />
          {/* Only render these sections if the preloader is finishing to prioritize Hero load */}
          {preloaderFinished && (
            <>
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certifications />
              <Contact />
            </>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
