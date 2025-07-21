import { Button } from '@/components/ui/button';
import Starfield from '@/components/starfield';
import { ArrowDown } from 'lucide-react';
import CosmicScene from '@/components/cosmic-scene';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-background">
      <CosmicScene />
      <Starfield />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
          Rishabh Jaiswal
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-300 md:text-xl">
          Creative Full-Stack Developer | Weaving Code into Cosmic Experiences
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/30 transition-shadow">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary font-bold bg-transparent backdrop-blur-sm">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-white/70" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
