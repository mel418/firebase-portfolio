import Link from 'next/link';
import { Library } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-40 lg:hidden flex items-center justify-between h-16 px-4 border-b bg-background/80 backdrop-blur-sm">
       <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 font-headline">
        <Library className="h-7 w-7" />
        Melody
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  );
}
