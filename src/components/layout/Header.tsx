import Link from 'next/link';
import { LibraryMusic } from 'lucide-react';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 lg:hidden flex items-center justify-between h-16 px-4 border-b bg-background/80 backdrop-blur-sm">
       <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 font-headline">
        <LibraryMusic className="h-7 w-7" />
        Melody
      </Link>
      <MobileNav />
    </header>
  );
}
