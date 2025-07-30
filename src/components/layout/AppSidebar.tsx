'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code, GraduationCap, Mail, Bot, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/#profile', label: 'Profile', icon: Home },
  { href: '/#projects', label: 'Projects', icon: Briefcase },
  { href: '/#skills', label: 'Skills', icon: Code },
  { href: '/#education', label: 'Education', icon: GraduationCap },
  { href: '/#contact', label: 'Contact', icon: Mail },
];

const aiTools = [
  { href: '/cover-letter', label: 'Cover Letter AI', icon: Bot },
];

const NavLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: React.ElementType }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref>
      <Button
        variant={isActive ? 'secondary' : 'ghost'}
        className={cn('w-full justify-start text-base py-6', isActive && 'text-primary')}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon className="mr-3 h-5 w-5" />
        {label}
      </Button>
    </Link>
  );
};

export function AppSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 border-r bg-card h-screen fixed top-0 left-0 p-6 space-y-6">
      <Link href="/" className="text-3xl font-bold text-primary flex items-center gap-2 font-headline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2Z"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M14 12v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
        </svg>
        Melody
      </Link>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
      <Separator />
      <nav className="flex flex-col space-y-2">
        <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          AI Tools
        </h3>
        {aiTools.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
      <div className="mt-auto">
        <a href="https://github.com/mel418" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub Profile
          </Button>
        </a>
        <p className="text-xs text-muted-foreground text-center mt-4">© 2024 Melody. All Rights Reserved.</p>
      </div>
    </aside>
  );
}
