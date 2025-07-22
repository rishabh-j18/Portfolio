'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ loading }: { loading: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0); // Reset progress on mount/loading change
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 100); // Slower interval for a smoother feel

      return () => clearInterval(interval);
    }
  }, [loading]);


  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-white transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative h-40 w-40">
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="hsl(var(--primary) / 0.5)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}>
            <ellipse cx="50" cy="50" rx="35" ry="15" stroke="hsl(var(--accent) / 0.7)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationTimingFunction: 'ease-in-out', animationIterationCount: 'infinite' }}>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotateX(-60deg) rotateY(-20deg)' }}>
            <ellipse cx="50" cy="50" rx="40" ry="10" stroke="hsl(var(--accent) / 0.7)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-primary shadow-[0_0_20px_5px_hsl(var(--primary))]"></div>
        </div>
      </div>
      <p className="mt-8 text-lg font-medium tracking-widest text-muted-foreground animate-pulse">LOADING...</p>
        
      <div className="w-80 mx-auto mb-6 mt-8">
          <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden border border-primary/30">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary to-accent"
              style={{
                width: `${progress}%`,
                willChange: "width",
              }}
              animate={{
                boxShadow: [
                  "0 0 10px hsl(var(--primary))",
                  "0 0 15px hsl(var(--accent))",
                  "0 0 10px hsl(var(--primary))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.div
            className="text-center mt-4 font-mono text-lg text-primary"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {progress}% COMPLETE
          </motion.div>
        </div>
    </div>
  );
};

export default Preloader;
