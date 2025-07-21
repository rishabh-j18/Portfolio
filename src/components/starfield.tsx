'use client';

import { useState, useEffect } from 'react';

const Starfield = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number, duration: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
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

  return (
    <div className="absolute inset-0 z-0">
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
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
