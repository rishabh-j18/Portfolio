'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Palette, Server, Cloud } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", logo: "/icons/IReact.png" },
      { name: "Angular", logo: "/icons/IAngular.png" },
      { name: "MUI", logo: "/icons/Imui.png" },
      { name: "Framer Motion", logo: "/icons/Imotion.png" },
      { name: "Tailwind CSS", logo: "/icons/Itailwind.png" },
      { name: "HTML5", logo: "/icons/Ihtml.webp" },
      { name: "CSS3", logo: "/icons/Icss.svg" },
      { name: "Bootstrap", logo: "/icons/Ibootstrap.svg" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", logo: "/icons/Inode.svg" },
      { name: "Express", logo: "/icons/IExpressjs.png" },
      { name: "Python", logo: "/icons/Ipython.svg" },
      { name: "C++", logo: "/icons/Icplusplus.svg" },
      { name: "Java", logo: "/icons/Ijava.svg" },
      { name: "MongoDB", logo: "/icons/Imongodb.svg" },
      { name: "PostgreSQL", logo: "/icons/Ipostgresql.svg" },
      { name: "Redis", logo: "/icons/Iredis.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: [
      { name: "AWS", logo: "/icons/Iaws.svg" },
      { name: "Docker", logo: "/icons/Idocker.svg" },
      { name: "Git", logo: "/icons/Igit.svg" },
      { name: "Vercel", logo: "/icons/Ivercel.png" },
      { name: "Strapi", logo: "/icons/Istrapi.jpg" },
      { name: "Postman", logo: "/icons/Ipostman.svg" },
      { name: "Github", logo: "/icons/Igithub.svg" },
      { name: "VSCode", logo: "/icons/Ivscode.svg" },
    ],
  },
];


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeCategoryData = skillCategories[activeCategory];
  const CategoryIcon = activeCategoryData.icon;

  return (
    <section id="skills" className="w-full py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-10" style={{backgroundSize: '30px 30px', backgroundImage: 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)'}}></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
            A constellation of technologies I use to build robust and beautiful applications.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex space-x-1 md:space-x-2 p-2 bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl">
            {skillCategories.map((category, index) => (
              <button
                key={category.title}
                className={`px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeCategory === index ? 'text-background' : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {activeCategory === index && (
                   <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent z-0"></span>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <category.icon className="w-4 h-4 md:w-5 md:h-5" />
                  {category.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[450px] flex items-center justify-center">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex flex-col items-center justify-center shadow-lg transition-all duration-500"
            >
              <CategoryIcon className="w-12 h-12 md:w-16 md:h-16 text-white/80" />
              <span className="mt-2 text-sm font-bold text-white/90">{activeCategoryData.title}</span>
            </div>
            <TooltipProvider>
              {skillCategories[activeCategory].skills.map((skill, index) => {
                const angle = (index * 2 * Math.PI) / skillCategories[activeCategory].skills.length;
                const radiusDesktop = 220;
                const radiusMobile = 140;
                const xDesktop = Math.cos(angle) * radiusDesktop;
                const yDesktop = Math.sin(angle) * radiusDesktop;
                const xMobile = Math.cos(angle) * radiusMobile;
                const yMobile = Math.sin(angle) * radiusMobile;

                return (
                  <div
                    key={skill.name}
                    className="absolute transition-all duration-500 ease-in-out"
                    style={{
                      '--x-desktop': `${xDesktop}px`,
                      '--y-desktop': `${yDesktop}px`,
                      '--x-mobile': `${xMobile}px`,
                      '--y-mobile': `${yMobile}px`,
                      transform: 'translate(-50%, -50%) translate(var(--x-mobile), var(--y-mobile))',
                      left: `50%`,
                      top: `50%`,
                    }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="group relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer bg-card/60 backdrop-blur-md border-2 border-white/10 shadow-md hover:border-accent hover:shadow-accent/20 transition-all duration-300" style={{ animationDelay: `${index * 0.3}s` }}>
                          <Image src={skill.logo} alt={skill.name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                );
              })}
            </TooltipProvider>
        </div>
      </div>
       <style jsx>{`
        @media (min-width: 768px) {
          div[style*="--x-desktop"] {
            transform: translate(-50%, -50%) translate(var(--x-desktop), var(--y-desktop));
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
