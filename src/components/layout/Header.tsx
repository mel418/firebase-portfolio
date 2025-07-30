import Link from 'next/link';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 lg:hidden flex items-center justify-between h-16 px-4 border-b bg-background/80 backdrop-blur-sm">
       <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2 font-headline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m10 10-2 2 2 2" />
          <path d="m14 14 2-2-2-2" />
        </svg>
        Codeify
      </Link>
      <MobileNav />
    </header>
  );
}
