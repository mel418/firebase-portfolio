'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, User, Briefcase, Play, Code, GraduationCap, Mail, Bot, Github, Library, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

const navItems = [
  { href: '/#profile', label: 'Profile', icon: User },
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#projects', label: 'Projects', icon: Play },
  { href: '/#skills', label: 'Skills', icon: Code },
  { href: '/#education', label: 'Education', icon: GraduationCap },
  { href: '/#contact', label: 'Contact', icon: Mail },
];

const aiTools = [
  // { href: '/cover-letter', label: 'Cover Letter AI', icon: Bot },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={`flex items-center p-3 rounded-lg text-lg ${
          isActive ? 'bg-secondary text-primary' : 'text-foreground'
        }`}
      >
        <Icon className="mr-4 h-6 w-6" />
        {label}
      </Link>
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm bg-card p-6 flex flex-col">
        <div className="text-3xl font-bold text-primary flex items-center gap-2 font-headline mb-8">
            <Library className="h-8 w-8" />
            Melody
        </div>

        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
        {aiTools.length > 0 && <Separator className="my-6" />}
        {aiTools.length > 0 && (
            <nav className="flex flex-col space-y-3">
                <h3 className="px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                AI Tools
                </h3>
                {aiTools.map((item) => (
                <NavLink key={item.href} {...item} />
                ))}
            </nav>
        )}

        <div className="mt-auto pt-6 space-y-2">
            <a href="/Melody_Gatan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full text-lg py-6">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </a>
            <a href="https://github.com/mel418" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="w-full text-lg py-6">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <p className="text-xs text-muted-foreground text-center pt-4">© 2025 Melody Gatan. All Rights Reserved.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
