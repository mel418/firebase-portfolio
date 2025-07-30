import { Bot } from 'lucide-react';

import { AppSidebar } from '@/components/layout/AppSidebar';
import { Header } from '@/components/layout/Header';
import { CoverLetterForm } from './CoverLetterForm';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function CoverLetterGeneratorPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <AppSidebar />
      <div className="lg:pl-72">
        <Header />
        <main className="p-4 sm:p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
             <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <Bot className="h-10 w-10 text-primary" />
                  <CardTitle className="text-5xl font-headline">AI Cover Letter Generator</CardTitle>
                </div>
                <CardDescription className="text-lg text-muted-foreground">
                  Paste a job description below and let our AI craft a tailored cover letter for you using your profile information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CoverLetterForm />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
