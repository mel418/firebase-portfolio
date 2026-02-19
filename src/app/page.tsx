import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Play, GraduationCap, Code, Briefcase, User, Send, Award, Users } from 'lucide-react';

import { AppSidebar } from '@/components/layout/AppSidebar';
import { Header } from '@/components/layout/Header';
import { ProjectCard } from '@/components/ProjectCard';
import { Section } from '@/components/Section';
import { AnimateIn } from '@/components/AnimateIn';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NowPlaying } from '@/components/NowPlaying';
import { getNowPlaying } from '@/lib/spotify';

const projects = [
  {
    title: 'Modo Matcha × Sega KDS',
    description: "Enterprise-grade kitchen display system built for Modo Matcha's official Sega × Demon Slayer collab event, processing 145+ concurrent orders with sub-second latency and 100% uptime.",
    imageUrl: '/Modo Matcha menu.png',
    href: 'https://modomatcha.com',
    tags: ['TypeScript', 'Next.js', 'Firebase', 'Firestore'],
    dataAiHint: 'kitchen display system',
  },
  {
    title: 'Cafinity☕',
    description: 'A location-based café discovery platform with secure authentication, role-based access, and real-time search for over 200 cafes.',
    imageUrl: '/cafinity.png',
    href: 'https://github.com/mel418/cafinity',
    tags: ['React', 'Firebase', 'Google Maps API', 'TailwindCSS'],
    dataAiHint: 'coffee shop map',
  },
  {
    title: 'PennySprout 🌱',
    description: 'AI-powered personal finance analyzer. Upload bank statement CSVs to get spending breakdowns, trend analysis, a financial health score, and personalized saving recommendations — all powered by Claude.',
    imageUrl: '/pennysprout_dash.png',
    href: 'https://github.com/mel418/PennySprout-v1',
    tags: ['Next.js', 'Claude AI', 'Recharts', 'Clerk'],
    dataAiHint: 'finance dashboard charts',
  },
  {
    title: 'Discord Music Recommendation Bot',
    description: 'A Discord bot that provides personalized music recommendations using the Spotify API. Won 2nd place at MarinaHacks 3.0.',
    imageUrl: '/serTibbles.png',
    href: 'https://github.com/mel418/Discord-Music-Rec-Bot',
    tags: ['Node.js', 'Spotify API'],
    dataAiHint: 'music bot interface',
  },
];

const skills = {
  languages: [
    { id: 'js', name: 'JavaScript' },
    { id: 'ts', name: 'TypeScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
    { id: 'cs', name: 'C#' },
    { id: 'kotlin', name: 'Kotlin' },
    { id: 'mysql', name: 'SQL' },
  ],
  web: [
    { id: 'react', name: 'React' },
    { id: 'nextjs', name: 'Next.js' },
    { id: 'nodejs', name: 'Node.js' },
    { id: 'express', name: 'Express' },
    { id: 'tailwind', name: 'Tailwind CSS' },
    { id: 'html', name: 'HTML5' },
    { id: 'css', name: 'CSS3' },
    { id: 'php', name: 'PHP' },
  ],
  databases: [
    { id: 'mysql', name: 'MySQL' },
    { id: 'firebase', name: 'Firebase' },
    { id: 'mongodb', name: 'MongoDB' },
  ],
  tools: [
    { id: 'git', name: 'Git' },
    { id: 'vscode', name: 'VS Code' },
    { id: 'aws', name: 'AWS' },
    { id: 'linux', name: 'Linux' },
  ],
};

export default async function Home() {
  const song = await getNowPlaying();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <AppSidebar />
      <div className="lg:pl-72">
        <Header />
        <main className="p-4 sm:p-6 lg:p-12">
          <div className="max-w-7xl mx-auto space-y-24">

            {/* PROFILE */}
            <Section id="profile" icon={User} title="Profile">
              <div className="relative">
                {/* Floating matcha ambient blobs */}
                <div className="pointer-events-none absolute -top-16 -right-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl animate-float" />
                <div className="pointer-events-none absolute -bottom-16 -left-8 h-44 w-44 rounded-full bg-primary/10 blur-3xl animate-float-slow" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
                  <AnimateIn direction="left" className="md:col-span-1 flex justify-center">
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
                      <Image
                        src="/PFP2.JPG"
                        data-ai-hint="professional portrait"
                        alt="Melody Gatan"
                        width={250}
                        height={250}
                        className="relative z-10 rounded-full shadow-lg border-4 border-primary"
                      />
                    </div>
                  </AnimateIn>

                  <AnimateIn direction="right" delay={100} className="md:col-span-2 space-y-4">
                    <h1 className="text-3xl sm:text-5xl font-headline font-bold">Melody Gatan</h1>
                    <p className="text-base sm:text-xl font-semibold animate-shimmer-text">
                      Software Engineer | Full-Stack Dev | Matcha Connoisseur
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      I build full-stack apps by day and drink way too much matcha by night. Fresh CS grad from CSULB, 2nd place at MarinaHacks, and always looking for the next thing to build. Open to work! 👋
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        🎓 CSULB CS Grad &apos;25
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        ☕ Matcha Connoisseur
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <span>Long Beach, CA</span>
                    </div>
                    <div className="flex space-x-3 pt-1">
                      <a href="https://github.com/mel418" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary transition-colors">
                          <Github />
                        </Button>
                      </a>
                      <a href="https://linkedin.com/in/melody-gatan" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary transition-colors">
                          <Linkedin />
                        </Button>
                      </a>
                      <a href="mailto:melodygatan@gmail.com">
                        <Button variant="outline" size="icon" className="hover:border-primary hover:text-primary transition-colors">
                          <Mail />
                        </Button>
                      </a>
                    </div>
                    <NowPlaying song={song} />
                  </AnimateIn>
                </div>
              </div>
            </Section>

            {/* EXPERIENCE */}
            <Section id="experience" icon={Briefcase} title="Experience">
              <div className="space-y-6">
                <AnimateIn delay={0}>
                  <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <CardTitle className="text-lg sm:text-2xl text-primary">Software Engineer (Contract)</CardTitle>
                          <CardDescription className="text-sm sm:text-base">Modo Matcha</CardDescription>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground shrink-0">July 2025</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>Engineered an enterprise-grade kitchen display system using TypeScript and Next.js, processing 145+ concurrent orders with sub-second latency and achieving 100% system uptime during the official Sega × Demon Slayer collab event.</li>
                        <li>Architected real-time order management platform utilizing distributed Firestore database, enabling seamless coordination between front-of-house and kitchen operations with automatic order archiving.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateIn>

                <AnimateIn delay={100}>
                  <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <CardTitle className="text-lg sm:text-2xl text-primary">Web Developer</CardTitle>
                          <CardDescription className="text-sm sm:text-base">CSULB Esports Association</CardDescription>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground shrink-0">Sept 2023 – July 2024</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>Reduced database query response time by 60% through PHP/MySQL optimization, serving 500+ users with 99.2% uptime.</li>
                        <li>Decreased manual registration processing time by 75% by engineering automated player tryouts system with PHP/MySQL, successfully processing 200+ signups per season with zero data loss.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateIn>

                <AnimateIn delay={200}>
                  <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <CardTitle className="text-lg sm:text-2xl text-primary">Secretary</CardTitle>
                          <CardDescription className="text-sm sm:text-base">Women in Computing (WiC) – CSULB</CardDescription>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground shrink-0">Aug 2023 – Apr 2024</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>Increased member engagement by 35% by automating weekly newsletter delivery to 150+ members using MailChimp with targeted content strategy.</li>
                        <li>Boosted workshop attendance by 45% coordinating 8 technical workshops with 35+ attendees each.</li>
                        <li>Maintained digital archives for 20+ organization documents and meeting notes.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateIn>

                <AnimateIn delay={300}>
                  <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <CardTitle className="text-lg sm:text-2xl text-primary">Fulfillment Expert</CardTitle>
                          <CardDescription className="text-sm sm:text-base">Target</CardDescription>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground shrink-0">Aug 2021 – Present</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                        <li>Process 100+ daily orders while maintaining 98% accuracy rate and trained 3 new team members.</li>
                        <li>Troubleshoot inventory management software issues for team of 8.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </AnimateIn>
              </div>
            </Section>

            {/* PROJECTS */}
            <Section id="projects" icon={Play} title="Projects">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {projects.map((project, i) => (
                  <AnimateIn key={project.title} delay={i * 120} className="h-full">
                    <ProjectCard {...project} />
                  </AnimateIn>
                ))}
              </div>
            </Section>

            {/* SKILLS */}
            <Section id="skills" icon={Code} title="Technical Skills">
              <TooltipProvider>
                <div className="space-y-10">
                  <AnimateIn>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold mb-4">Languages</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {skills.languages.map((skill) => (
                          <Tooltip key={skill.id}>
                            <TooltipTrigger>
                              <img
                                src={`https://skillicons.dev/icons?i=${skill.id}`}
                                alt={`${skill.name} icon`}
                                className="h-14 w-14 sm:h-20 sm:w-20 transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                              />
                            </TooltipTrigger>
                            <TooltipContent><p>{skill.name}</p></TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={100}>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold mb-4">Web Development</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {skills.web.map((skill) => (
                          <Tooltip key={skill.id}>
                            <TooltipTrigger>
                              <img
                                src={`https://skillicons.dev/icons?i=${skill.id}`}
                                alt={`${skill.name} icon`}
                                className="h-14 w-14 sm:h-20 sm:w-20 transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                              />
                            </TooltipTrigger>
                            <TooltipContent><p>{skill.name}</p></TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={200}>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold mb-4">Databases</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {skills.databases.map((skill) => (
                          <Tooltip key={skill.id}>
                            <TooltipTrigger>
                              <img
                                src={`https://skillicons.dev/icons?i=${skill.id}`}
                                alt={`${skill.name} icon`}
                                className="h-14 w-14 sm:h-20 sm:w-20 transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                              />
                            </TooltipTrigger>
                            <TooltipContent><p>{skill.name}</p></TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>

                  <AnimateIn delay={300}>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-semibold mb-4">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {skills.tools.map((skill) => (
                          <Tooltip key={skill.id}>
                            <TooltipTrigger>
                              <img
                                src={`https://skillicons.dev/icons?i=${skill.id}`}
                                alt={`${skill.name} icon`}
                                className="h-14 w-14 sm:h-20 sm:w-20 transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
                              />
                            </TooltipTrigger>
                            <TooltipContent><p>{skill.name}</p></TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </AnimateIn>
                </div>
              </TooltipProvider>
            </Section>

            {/* EDUCATION */}
            <Section id="education" icon={GraduationCap} title="Education">
              <div className="space-y-6">
                <AnimateIn>
                  <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <CardTitle className="text-lg sm:text-2xl text-primary">California State University, Long Beach</CardTitle>
                          <CardDescription className="text-sm sm:text-base">B.S. in Computer Science (GPA: 3.66)</CardDescription>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground shrink-0">Graduated December 2025</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base mb-2">Relevant Coursework:</h4>
                        <p className="text-sm sm:text-base">Data Structures, Algorithms, Discrete Structures, Database Fundamentals, Object-Oriented Programming, System Programming, Operating Systems, Mobile App Development.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4" />Honors:
                        </h4>
                        <p className="text-sm sm:text-base">President's List (3x) | Dean's List (2x)</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimateIn>

                <AnimateIn delay={150}>
                  <Card className="bg-card hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <h4 className="font-semibold text-sm sm:text-base flex items-center gap-2">
                        <Users className="h-4 w-4" />Affiliations:
                      </h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base">WiC (Women in Computing), ACM (Association for Computing Machinery), SWE (Society of Women Engineers)</p>
                    </CardContent>
                  </Card>
                </AnimateIn>
              </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact" icon={Mail} title="Contact Me">
              <AnimateIn>
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
              </AnimateIn>
            </Section>

          </div>
        </main>
        <footer className="text-center p-4 text-xs text-muted-foreground">
          © 2025 Melody Gatan. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
