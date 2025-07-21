'use client';

const Preloader = ({ loading }: { loading: boolean }) => {
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
    </div>
  );
};

export default Preloader;
