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
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
        >
          <path d="M20 7V12.5C20 13.8807 18.8807 15 17.5 15C16.1193 15 15 13.8807 15 12.5C15 11.1193 16.1193 10 17.5 10C18.3284 10 19.0494 10.4046 19.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 12.5V6.5C15 5.56494 15 5.0974 14.8978 4.72359C14.7118 4.04983 14.2017 3.50419 13.5593 3.2923C13.2084 3.18129 12.7753 3.10731 11.909 2.95934L11.0254 2.79587C9.37563 2.48868 8.55074 2.33509 7.82823 2.71571C7.10572 3.09634 6.64993 3.82949 6.5204 4.63223C6.42592 5.2359 6.55198 5.86989 6.8041 7.13788L6.96872 7.91187" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6.96872 7.91187C7.30232 9.49782 7.46892 10.2905 7.94054 10.89C8.41163 11.4901 9.17296 11.7766 10.5361 12.0624L11.5302 12.274C13.0692 12.5932 13.8387 12.7528 14.4194 13.2247C15 13.6966 15 14.4556 15 16V18.5C15 19.8807 13.8807 21 12.5 21C11.1193 21 10 19.8807 10 18.5V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 18.5C10 18.1063 10 17.9094 9.95351 17.7431C9.82069 17.2719 9.44463 16.8958 8.97341 16.763C8.80712 16.7165 8.61021 16.7165 8.21639 16.7165H4.5C3.11929 16.7165 2 17.8358 2 19.2165C2 20.5972 3.11929 21.7165 4.5 21.7165C5.88071 21.7165 7 20.5972 7 19.2165V8.5C7 6.01472 8.95533 4 11.3889 4C13.8225 4 15.7778 6.01472 15.7778 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6.96872 7.91187L6.03128 7.08813C4.99023 6.16336 4.46971 5.701 3.96813 5.75501C3.46654 5.80902 3.03346 6.18342 2.82274 6.64393C2.61202 7.10443 2.80289 7.68965 3.18463 8.86008L4.31537 12.1399C4.69711 13.3103 4.88798 13.8956 5.38956 13.9496C5.89115 14.0036 6.32422 13.6292 6.53495 13.1697C6.74567 12.7102 6.5548 12.1249 6.17306 10.9545L6.03128 10.5881" stroke="currentColor" strokeWidth="1.5"/>
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
