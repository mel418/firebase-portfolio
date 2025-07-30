import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Play, GraduationCap, Code, Briefcase, Bot, User, Send } from 'lucide-react';

import { AppSidebar } from '@/components/layout/AppSidebar';
import { Header } from '@/components/layout/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const projects = [
  {
    title: 'AI Cover Letter Generator',
    description: 'A tool integrated into this portfolio that uses generative AI to create personalized cover letters based on a job description.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: '/cover-letter',
    tags: ['Next.js', 'React', 'TypeScript', 'GenAI', 'TailwindCSS'],
    dataAiHint: 'abstract code',
  },
  {
    title: 'Portfolio Website',
    description: 'This Spotify-themed portfolio website, built to showcase my skills and projects in an interactive and visually appealing way.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: 'https://github.com/mel418/portfolio',
    tags: ['Next.js', 'React', 'TypeScript', 'ShadCN UI', 'Figma'],
    dataAiHint: 'design technology',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with features like product catalog, shopping cart, user authentication, and order processing.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: 'https://github.com/mel418/ecommerce',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
    dataAiHint: 'online shopping',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application that helps users organize their tasks, set deadlines, and track progress.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: 'https://github.com/mel418/task-manager',
    tags: ['Vue.js', 'Firebase', 'Vuetify'],
    dataAiHint: 'productivity application',
  },
];

const skills = {
  languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL'],
  frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Spring Boot', 'TailwindCSS'],
  tools: ['Git', 'Docker', 'Figma', 'Postman', 'Jira', 'Firebase'],
};

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <AppSidebar />
      <div className="lg:pl-72">
        <Header />
        <main className="p-4 sm:p-6 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-24">
            <Section id="profile" icon={User} title="Profile">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <Image
                    src="https://avatars.githubusercontent.com/u/82139031?v=4"
                    data-ai-hint="professional portrait"
                    alt="Melody"
                    width={250}
                    height={250}
                    className="rounded-full shadow-lg border-4 border-primary"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h1 className="text-5xl font-headline font-bold">Melanie</h1>
                  <p className="text-xl text-muted-foreground">
                    Senior Computer Science Student at California State University, Long Beach (CSULB).
                  </p>
                  <p className="text-lg">
                    Passionate about developing innovative and user-centric web applications. Eager to apply my skills in a dynamic and challenging environment.
                  </p>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Long Beach, CA</span>
                  </div>
                  <div className="flex space-x-4 pt-2">
                    <a href="https://github.com/mel418" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon"><Github /></Button>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                       <Button variant="outline" size="icon"><Linkedin /></Button>
                    </a>
                    <a href="#contact">
                       <Button variant="outline" size="icon"><Mail /></Button>
                    </a>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="projects" icon={Briefcase} title="Projects">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </Section>

            <Section id="skills" icon={Code} title="Key Skills">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => <Badge key={skill} className="text-lg py-1 px-3">{skill}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => <Badge key={skill} className="text-lg py-1 px-3">{skill}</Badge>)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => <Badge key={skill} className="text-lg py-1 px-3">{skill}</Badge>)}
                  </div>
                </div>
              </div>
            </Section>

            <Section id="education" icon={GraduationCap} title="Education">
              <Card className="bg-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-primary">California State University, Long Beach</CardTitle>
                      <CardDescription className="text-lg">Bachelor of Science in Computer Science</CardDescription>
                    </div>
                    <p className="text-muted-foreground">Expected May 2025</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Relevant Coursework: Data Structures and Algorithms, Software Engineering, Database Systems, Operating Systems, Web Development, Artificial Intelligence.</p>
                </CardContent>
              </Card>
            </Section>
            
            <Section id="contact" icon={Mail} title="Contact Me">
              <Card className="max-w-2xl mx-auto bg-card">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>Have a question or want to work together? Send me a message!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input type="text" placeholder="Your Name" required />
                    <Input type="email" placeholder="Your Email" required />
                    <Textarea placeholder="Your Message" rows={5} required />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Section>
          </div>
        </main>
      </div>
    </div>
  );
}
