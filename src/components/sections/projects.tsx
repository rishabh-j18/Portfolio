import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'FreelanceIT',
    description: 'A comprehensive freelancing platform using MERN stack and web3 that helps freelancers and recruiters to interact. Features a wallet-based escrow payment system to build trust.',
    image: 'https://placehold.co/600x400.png',
    tags: ['MERN', 'Web3', 'Solidity', 'Escrow Payment'],
    link: '#',
    aiHint: 'blockchain freelance platform',
  },
  {
    title: 'Trace Safe',
    description: 'A platform to report missing persons using MERN and Web3. It integrates Google Maps for location tracking and records updates on a Solidity contract for transparency.',
    image: 'https://placehold.co/600x400.png',
    tags: ['MERN', 'Web3', 'Google Maps', 'Solidity'],
    link: '#',
    aiHint: 'person tracking app',
  },
  {
    title: 'Cafe Management System',
    description: 'An order and billing management system built with Python and Tkinter to streamline cafe operations and improve customer experience through efficient order processing.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Tkinter', 'UI/UX'],
    link: '#',
    aiHint: 'cafe management interface',
  },
  {
    title: 'AstroBlog',
    description: 'A content management system and blog platform for sharing astronomical discoveries and space exploration news.',
    image: 'https://placehold.co/600x400.png',
    tags: ['SvelteKit', 'Supabase', 'Markdown', 'Prisma'],
    link: '#',
    aiHint: 'clean blog layout',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 font-headline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 transition-all duration-300 group shadow-lg hover:shadow-primary/20 hover:border-primary/50">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent"></div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl font-bold mb-2 text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4 p-6 pt-0">
                 <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="border-primary/20 bg-primary/10 text-primary">{tag}</Badge>
                  ))}
                </div>
                 <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent group/btn bg-transparent">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold group shadow-lg shadow-accent/30 transition-shadow">
                <Link href="/projects">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
