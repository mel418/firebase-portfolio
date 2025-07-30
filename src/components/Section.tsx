import type { LucideIcon } from 'lucide-react';

type SectionProps = {
  id: string;
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
};

export function Section({ id, title, icon: Icon, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-8 h-8 text-primary" />
        <h2 className="text-4xl font-bold font-headline">{title}</h2>
      </div>
      {children}
    </section>
  );
}
