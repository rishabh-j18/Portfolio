'use client';

import { useState, useEffect, useRef } from 'react';

const Starfield = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number, duration: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const generateStars = () => {
      // Reduce star count for mobile/performance if needed, but keeping 100 for now as requested by user ("exciting UI")
      // However, we can optimize by ensuring they only render when visible (handled by parent logic or just pure CSS is fine usually,
      // but detaching them from DOM when not visible is better for low-end devices).
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 1.5 + 0.5, // 0.5px to 2px
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  if (!isVisible) return <div ref={containerRef} className="absolute inset-0 z-0" />;

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {stars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white/80"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `Twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            willChange: 'opacity', // Hint browser for optimization
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
