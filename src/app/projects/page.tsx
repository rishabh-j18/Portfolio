import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

const projects = [
  {
    title: 'FreelanceIT',
    description: 'Developed a comprehensive freelancing platform using MERN stack and web3 that helps freelancers and recruiters to interact with each other to work on a project. The key advantage of the platform is the payment system that leverages a wallet-based escrow payment system, reducing trust issue between client and freelancers.',
    image: 'https://placehold.co/600x400.png',
    tags: ['MERN', 'Web3', 'Solidity', 'Escrow Payment'],
    link: '#',
    aiHint: 'blockchain freelance platform',
  },
  {
    title: 'Trace Safe',
    description: 'A platform to report missing or finding of persons leveraging the power of MERN stack and web3. Integrated google map to track location report for report proceeding purpose and each update getting recorded on the solidity contract.',
    image: 'https://placehold.co/600x400.png',
    tags: ['MERN', 'Web3', 'Google Maps', 'Solidity'],
    link: '#',
    aiHint: 'person tracking app',
  },
  {
    title: 'Cafe Management System',
    description: 'Engineered an order and billing management system utilizing Tkinter and Python, streamlining cafe operations and significantly enhancing customer experience through efficient order processing.',
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

export default function AllProjectsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat opacity-20 pointer-events-none"></div>
      <Navbar />
      <main className="flex-grow pt-24">
        <section id="all-projects" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center mb-16">
                 <Button asChild variant="ghost" className="mr-4">
                    <Link href="/#projects">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="sr-only">Back to home</span>
                    </Link>
                 </Button>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  All Projects
                </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
