import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Play, GraduationCap, Code, Briefcase, Bot, User, Send, Award } from 'lucide-react';

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
    title: 'Cafinity☕',
    description: 'A location-based café discovery platform with secure authentication, role-based access, and real-time search for over 200 cafes.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: 'https://github.com/mel418/cafinity',
    tags: ['React', 'Firebase', 'Google Maps API', 'TailwindCSS'],
    dataAiHint: 'coffee shop map',
  },
  {
    title: 'Discord Music Recc Bot',
    description: 'A Discord bot that provides personalized music recommendations using the Spotify API. Won 2nd place at MarinaHacks 3.0.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: 'https://devpost.com/software/discord-music-recc-bot',
    tags: ['Python', 'Discord.py', 'Spotify API'],
    dataAiHint: 'music bot interface',
  },
  {
    title: 'Notion Clone',
    description: 'A document management application with real-time collaboration features, built with Next.js and Convex.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: 'https://github.com/mel418/notion-clone',
    tags: ['Next.js', 'Convex', 'React', 'TypeScript'],
    dataAiHint: 'document editor',
  },
  {
    title: 'AI Cover Letter Generator',
    description: 'A tool integrated into this portfolio that uses generative AI to create personalized cover letters based on a job description.',
    imageUrl: 'https://placehold.co/600x600.png',
    href: '/cover-letter',
    tags: ['Next.js', 'React', 'GenAI', 'TailwindCSS'],
    dataAiHint: 'abstract code',
  },
];

const skills = {
  languages: ['python', 'cplusplus', 'java', 'kotlin', 'cs', 'js'],
  web: ['react', 'html', 'css', 'nextjs', 'nodejs', 'php'],
  databases: ['mysql', 'sql', 'firebase', 'mongodb', 'prisma'],
  tools: ['git', 'vscode', 'jira', 'aws', 'docker', 'figma', 'linux'],
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
                    alt="Melody Gatan"
                    width={250}
                    height={250}
                    className="rounded-full shadow-lg border-4 border-primary"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h1 className="text-5xl font-headline font-bold">Melody Gatan</h1>
                  <p className="text-xl text-muted-foreground">
                    Software Engineer | Full-Stack Developer
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
                    <a href="https://linkedin.com/in/melody-gatan" target="_blank" rel="noopener noreferrer">
                       <Button variant="outline" size="icon"><Linkedin /></Button>
                    </a>
                    <a href="mailto:melodygatan@gmail.com">
                       <Button variant="outline" size="icon"><Mail /></Button>
                    </a>
                  </div>
                </div>
              </div>
            </Section>
            
            <Section id="experience" icon={Briefcase} title="Experience">
               <div className="space-y-8">
                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-primary">Web Developer Intern</CardTitle>
                        <CardDescription className="text-lg">CSULB Esports Association</CardDescription>
                      </div>
                      <p className="text-muted-foreground">Sept 2023 - July 2024</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-base">
                      <li>Reduced database query response time by 60% through PHP/MySQL optimization, serving 500+ users with 99.2% uptime.</li>
                      <li>Decreased manual registration processing time by 75% by engineering automated player tryouts system with PHP/MySQL, successfully processing 200+ signups per season with zero data loss.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-primary">Secretary</CardTitle>
                        <CardDescription className="text-lg">Women in Computing (WiC) - CSULB</CardDescription>
                      </div>
                      <p className="text-muted-foreground">Aug 2023 - April 2024</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                     <ul className="list-disc pl-5 space-y-2 text-base">
                      <li>Increased member engagement by 35% by automating weekly newsletter delivery to 150+ members using MailChimp with targeted content strategy.</li>
                      <li>Boosted workshop attendance by 45% coordinating 8 technical workshops with 35+ attendees each.</li>
                       <li>Maintained digital archives for 20+ organization documents and meeting notes.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Section>


            <Section id="projects" icon={Play} title="Projects">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </Section>

            <Section id="skills" icon={Code} title="Technical Skills">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-4">
                    {skills.languages.map((skill) => (
                      <Image key={skill} src={`https://skillicons.dev/icons?i=${skill}`} alt={`${skill} icon`} width={48} height={48} title={skill} />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
                  <div className="flex flex-wrap gap-4">
                    {skills.web.map((skill) => (
                      <Image key={skill} src={`https://skillicons.dev/icons?i=${skill}`} alt={`${skill} icon`} width={48} height={48} title={skill}/>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Databases</h3>
                  <div className="flex flex-wrap gap-4">
                    {skills.databases.map((skill) => (
                     <Image key={skill} src={`https://skillicons.dev/icons?i=${skill}`} alt={`${skill} icon`} width={48} height={48} title={skill}/>
                    ))}
                  </div>
                </div>
                 <div>
                  <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-4">
                    {skills.tools.map((skill) => (
                      <Image key={skill} src={`https://skillicons.dev/icons?i=${skill}`} alt={`${skill} icon`} width={48} height={48} title={skill}/>
                    ))}
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
                      <CardDescription className="text-lg">B.S. in Computer Science (GPA: 3.6)</CardDescription>
                    </div>
                    <p className="text-muted-foreground">Expected Dec 2025</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Relevant Coursework:</h4>
                    <p>Data Structures, Algorithms, Discrete Structures, Database Fundamentals, Object-Oriented Programming, System Programming, Operating Systems, Mobile App Development.</p>
                  </div>
                   <div>
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Award />Honors:</h4>
                    <p>President’s List (Spring 2024), Dean’s List (Fall 2023, Spring 2024)</p>
                  </div>
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
                  <form action="mailto:melodygatan@gmail.com" method="post" encType="text/plain" className="space-y-4">
                    <Input type="text" name="name" placeholder="Your Name" required />
                    <Input type="email" name="email" placeholder="Your Email" required />
                    <Textarea name="message" placeholder="Your Message" rows={5} required />
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
