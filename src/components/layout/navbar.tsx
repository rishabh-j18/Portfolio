'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Sparkles, Home, User, Code, Briefcase, GraduationCap, Award, Mail, FolderGit2 } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/#home', icon: Home },
  { name: 'About', href: '/#about', icon: User },
  { name: 'Skills', href: '/#skills', icon: Code },
  { name: 'Projects', href: '/#projects', icon: Briefcase },
  { name: 'Education', href: '/#education', icon: GraduationCap },
  { name: 'Certifications', href: '/#certifications', icon: Award },
  { name: 'Contact', href: '/#contact', icon: Mail },
];

const allProjectsNavItem = { name: 'All Projects', href: '/projects', icon: FolderGit2 };
const allCertificationsNavItem = { name: 'All Certifications', href: '/certifications', icon: Award };


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';
  const isCertificationsPage = pathname === '/certifications';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavItems = () => {
    if (isProjectsPage) {
        return [allProjectsNavItem];
    }
    if (isCertificationsPage) {
        return [allCertificationsNavItem];
    }
    return navItems;
  }
  
  const currentNavItems = getNavItems();
  const homeLink = isProjectsPage || isCertificationsPage ? "/" : "#home";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isProjectsPage || isCertificationsPage ? 'bg-background/80 backdrop-blur-sm shadow-lg shadow-black/20 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href={homeLink} className="flex items-center gap-2 text-xl font-bold font-headline">
          <Sparkles className="h-6 w-6 text-accent" />
          {/* <span>AstroSpaceFolio</span> */}
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {currentNavItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6 border-l-white/10">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  <Link href={homeLink} className="mb-8 flex items-center gap-2 text-xl font-bold font-headline">
                    <Sparkles className="h-6 w-6 text-accent" />
                    {/* <span>AstroSpaceFolio</span> */}
                  </Link>
                  <nav className="flex flex-col gap-4">
                    {currentNavItems.map((item) => (
                      <SheetClose key={item.name} asChild>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 rounded-md p-2 text-lg font-medium hover:bg-accent/10"
                        >
                          <item.icon className="h-5 w-5 text-accent" />
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
