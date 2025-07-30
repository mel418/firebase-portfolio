'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles, Copy } from 'lucide-react';

import { generateCoverLetter } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  jobDescription: z.string().min(50, 'Job description must be at least 50 characters.'),
  additionalInfo: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function CoverLetterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobDescription: '',
      additionalInfo: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setGeneratedLetter('');

    const response = await generateCoverLetter({
      ...values,
      name: 'Melody',
      email: 'melanie.csulb@example.com',
      github: 'https://github.com/mel418',
    });

    setIsLoading(false);

    if (response.success && response.data) {
      setGeneratedLetter(response.data.coverLetter);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: response.error,
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    toast({
      title: 'Copied!',
      description: 'The cover letter has been copied to your clipboard.',
    });
  };

  return (
    <div className="space-y-8">
      <Card className="bg-card">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Job Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the full job description here..."
                        rows={10}
                        className="text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any other skills or experiences you want to highlight?"
                        rows={4}
                        className="text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                   <>
                    <Sparkles className="mr-2 h-5 w-5" />
                     Generate Cover Letter
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {generatedLetter && (
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold font-headline">Your Generated Cover Letter</h3>
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                <Copy className="h-5 w-5" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <div className="prose prose-invert max-w-none p-4 border rounded-md whitespace-pre-wrap bg-background">
              {generatedLetter}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
