import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52s-.669-1.611-.916-2.207c-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.57c-.28 1.13-1.04 1.4-1.73.86L14.4 16l-4.22 4.15c-.49.49-1.28.24-1.4-.4z"/>
    </svg>
);


const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-white/10 mt-20 z-10">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Thanks for visiting!</h3>
                <p className="text-muted-foreground">
                    I hope you enjoyed this cosmic corner of the web. Let&apos;s connect and build something amazing together.
                </p>
            </div>

            <div className="flex flex-col items-center gap-4">
                <p className="text-sm font-semibold text-foreground">Stay Connected</p>
                 <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:rishabh.itdev@gmail.com" aria-label="Email">
                            <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://wa.me/917860609470" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <WhatsAppIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://t.me/rishabh18_official" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <TelegramIcon className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                        </a>
                    </Button>
                    {/* <Button variant="ghost" size="icon" asChild>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                        </a>
                    </Button> */}
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/rishabh-j18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/rishabh-jaiswal-55a604178" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-accent" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center">
            <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Rishabh Jaiswal. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
