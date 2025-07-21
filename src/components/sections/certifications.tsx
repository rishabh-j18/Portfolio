import Link from 'next/link';
import { Award, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const certificationsData = [
  {
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    year: "2023",
    description:
      "Professional certification demonstrating understanding and practical skills in the fundamental concepts and techniques of deep learning.",
    badge: "🤖",
  },
  {
    name: "API designs in Node.js",
    issuer: "Frontend Masters",
    year: "2025",
    description:
      "Certification in designing, building, and deploying applications with robust and secure apis.",
    badge: "🌐",
  },
  {
    name: "Complete Intro to React",
    issuer: "Frontend Masters",
    year: "2025",
    description:
      "Detailed program covering React, advanced patterns, and modern frontend development.",
    badge: "⚛️",
  },
  {
    name: "Web Securities, v2",
    issuer: "Frontend Masters",
    year: "2025",
    description:
      "Real Life applications based security practices that enhance webapp securities.",
    badge: "🛡️",
  },
   {
    title: 'Certified Information Systems Security Professional (CISSP)',
    issuer: '(ISC)²',
    date: 'Issued 2023',
    badge: '🔒',
  },
   {
    title: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    date: 'Issued 2021',
    badge: '🏗️',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 font-headline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
          Certifications & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.slice(0, 4).map((cert, index) => (
            <Card
              key={index}
              className="group bg-card/50 border-white/10 backdrop-blur-sm shadow-lg hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2 hover:border-accent/50"
            >
              <CardHeader className="flex flex-row items-start gap-4 pb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20 group-hover:bg-accent/20 transition-colors text-2xl">
                    {cert.badge}
                </div>
                <div>
                    <CardTitle className="text-lg font-bold">{cert.name || cert.title}</CardTitle>
                    <p className="font-semibold text-primary">{cert.issuer}</p>
                </div>
              </CardHeader>
              <CardContent>
                {cert.description && (
                  <CardDescription className="mb-2">{cert.description}</CardDescription>
                )}
                <p className="text-sm text-muted-foreground">{cert.year || cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold group shadow-lg shadow-accent/30 transition-shadow">
                <Link href="/certifications">
                    View All Certifications
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
