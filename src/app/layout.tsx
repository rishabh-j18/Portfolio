import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Rishabh Jaiswal',
  description: `Welcome! I'm Rishabh Jaiswal, a passionate Creative Developer & Digital Artist dedicated to crafting extraordinary digital experiences. With a robust background in Full-Stack MERN development and a keen interest in Web3 (Solidity & Blockchain), I specialize in building performant, scalable, and visually compelling web applications. My expertise spans responsive UI/UX implementation with React.js & Tailwind CSS, optimizing performance with frameworks like Astro, and architecting robust backend solutions. Beyond coding, I leverage my artistic flair to ensure every project is not just functional, but also beautiful. My commitment to automated testing, problem-solving, and team leadership ensures delivery of high-quality, impactful solutions.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${spaceGrotesk.variable} font-body antialiased bg-background`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
