import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="relative w-full py-20 md:py-32 overflow-hidden">
       <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl animate-[NebulaPulse_20s_ease-in-out_infinite]"></div>
       <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-[NebulaPulse_25s_ease-in-out_infinite] animation-delay-5000"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="flex justify-center items-center">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-xl animate-[PortalRing_10s_linear_infinite]"
              ></div>
              <div
                className="absolute inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  animation: 'FireSparkler 2s linear infinite',
                }}
              ></div>
              <Image
                src="/Rishabh.jpg"
                alt="Rishabh Jaiswal portrait"
                width={400}
                height={400}
                className="relative rounded-full shadow-2xl object-cover w-full h-full p-2"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">About Me</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center md:text-left">
                I am a passionate and creative full-stack developer with a love for building beautiful, intuitive, and high-performance web applications. With a background in computer science and a keen eye for design, I strive to create seamless user experiences that are both functional and visually appealing.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center md:text-left">
                My journey into the world of code began with a fascination for how things work, and it has evolved into a career where I can build, innovate, and solve complex problems. When I&apos;m not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or stargazing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
