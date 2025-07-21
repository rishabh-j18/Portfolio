// src/components/cosmic-scene.tsx
'use client';

import { useState, useEffect } from 'react';

type StarStyle = {
  animation: string;
  animationDelay: string;
  filter: string;
};

const CosmicScene = () => {
  const [starStyles, setStarStyles] = useState<StarStyle[]>([]);

  useEffect(() => {
    // Generate star styles only on the client-side to avoid hydration mismatch
    const styles = Array.from({ length: 3 }, () => ({
      animation: `ShootingStar ${Math.random() * 5 + 5}s linear infinite`,
      animationDelay: `${Math.random() * 10}s`,
      filter: 'blur(1px)',
    }));
    setStarStyles(styles);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Static but softly pulsing nebula clouds using performant radial gradients */}
      <div
        className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vh] rounded-full animate-[NebulaPulse_20s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.4) 0%, rgba(109, 40, 217, 0) 70%)',
          animationDelay: '0s',
        }}
      />
      <div
        className="absolute bottom-[-30%] right-[-10%] w-[70vw] h-[70vh] rounded-full animate-[NebulaPulse_25s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(30, 58, 138, 0.5) 0%, rgba(30, 58, 138, 0) 70%)',
          animationDelay: '-5s',
        }}
      />
      <div
        className="absolute top-[30%] right-[5%] w-[50vw] h-[50vh] rounded-full animate-[NebulaPulse_18s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(circle, rgba(190, 24, 93, 0.3) 0%, rgba(190, 24, 93, 0) 70%)',
          animationDelay: '-10s',
        }}
      />

      {/* Shooting Stars */}
      {starStyles.map((style, i) => (
        <div
          key={`shooting-star-${i}`}
          className="absolute top-0 left-0 w-0.5 h-40 bg-gradient-to-b from-white/80 to-transparent"
          style={style}
        />
      ))}
    </div>
  );
};

export default CosmicScene;
