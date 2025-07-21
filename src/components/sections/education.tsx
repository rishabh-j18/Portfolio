import { GraduationCap, MapPin, Star } from 'lucide-react';

const educationData = [
  {
    period: "2023-2025",
    degree: "Master of Computer Science",
    institution: "Vellore Institute of Technology",
    location: "Vellore, TN",
    description:
      "Specialized in Software Engineering with focus on web technologies and distributed systems. Conducted research on Blockchain Technology.",
    achievements: ["GPA: 8.86/10.0", "Dean's List", "Published 1 papers"],
  },
  {
    period: "2020-2023",
    degree: "Bachelor of Science",
    institution: "Dr. Ram Manohar Lohia Avadh University",
    location: "Ayodhya, UP",
    description:
      "Graduated with a Bachelor of Science (BSc), specializing in Physics, Mathematics, and Computer Science. Beyond a strong academic performance, I actively organized and managed college events, while also honing my problem-solving abilities through competitive coding.",
    achievements: ["Percentage: 81.66%", "Leadership", "Hackathon Winner"],
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 font-headline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
          Education
        </h2>
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical timeline bar */}
          <div className="absolute left-4 sm:left-1/2 top-2 h-[calc(100%-2rem)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-accent to-transparent" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Dot */}
                 <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-accent flex items-center justify-center z-10 shadow-lg shadow-accent/40 group-hover:shadow-accent/60 transition-shadow duration-300">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                
                {/* Content Card */}
                <div 
                  className={`w-full sm:w-1/2 p-1 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}
                  style={{ marginLeft: index % 2 !== 0 ? 'auto' : '0' }}
                >
                  <div className={`p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-white/10 hover:border-accent/50 shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1 ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <h3 className="text-xl font-bold text-primary">{item.degree}</h3>
                    <h4 className="font-semibold text-foreground/90">{item.institution}</h4>
                    <div className={`flex items-center text-sm text-muted-foreground mt-1 ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        <MapPin className="w-3 h-3 mr-1.5"/>
                        <span>{item.location}</span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-4">
                        <h5 className={`font-semibold text-foreground mb-2 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>Key Achievements</h5>
                        <ul className={`space-y-2 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                            {item.achievements.map((ach, achIndex) => (
                                <li key={achIndex} className={`flex items-center text-sm text-muted-foreground ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'flex-row'}`}>
                                    <Star className={`w-3 h-3 text-accent ${index % 2 === 0 ? 'ml-2' : 'mr-2'}`} />
                                    <span>{ach}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
