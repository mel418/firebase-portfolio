import Image from 'next/image';
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
  return (
    <a href={href} target={href.startsWith('/') ? '_self' : '_blank'} rel="noopener noreferrer" className="block group rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
      <Card className="bg-card hover:bg-accent transition-colors duration-300 h-full flex flex-col overflow-hidden">
        <div className="relative aspect-square w-full">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="object-cover" 
            data-ai-hint={dataAiHint} 
          />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div className="bg-primary rounded-full p-3 shadow-lg">
              <Play className="h-6 w-6 text-black" fill="black" />
            </div>
          </div>
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="truncate font-headline text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2 h-10">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
