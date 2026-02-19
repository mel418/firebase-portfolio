import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  tags: string[];
  dataAiHint: string;
};

export function ProjectCard({ title, description, imageUrl, href, tags, dataAiHint }: ProjectCardProps) {
  const isInternal = href.startsWith('/');
  const CardContentWrapper = isInternal ? Link : 'a';

  return (
    <CardContentWrapper
      href={href}
      target={isInternal ? '_self' : '_blank'}
      rel={isInternal ? '' : 'noopener noreferrer'}
      className="block group rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background h-full"
    >
      <Card className="bg-card hover:bg-accent transition-colors duration-300 h-full flex flex-col overflow-hidden">
        <div className="relative aspect-[4/3] sm:aspect-square w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={dataAiHint}
          />
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="bg-primary rounded-full p-2 sm:p-3 shadow-lg">
              <Play className="h-4 w-4 sm:h-6 sm:w-6 text-black" fill="black" />
            </div>
          </div>
        </div>
        <CardHeader className="flex-grow p-3 sm:p-6">
          <CardTitle className="truncate font-headline text-sm sm:text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-xs sm:text-sm">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-3 pt-0 sm:p-6 sm:pt-0">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal text-xs px-1.5 py-0 sm:px-2.5 sm:py-0.5">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </CardContentWrapper>
  );
}
