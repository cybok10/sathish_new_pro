import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function BlogPage() {
  // Temporarily removed getBlogPosts call to fix deployment
  // const posts = getBlogPosts(); 

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Blog" subtitle="Thoughts, tutorials, and tech updates" />

        <div className="glass-card p-12 rounded-2xl text-center border-dashed border-2 border-slate-300 dark:border-slate-700 mt-12">
          <p className="text-muted-foreground text-lg">Blog is currently under maintenance.</p>
          <p className="text-sm text-slate-400 mt-2">Check back soon for updates!</p>
        </div>
      </div>
    </main>
  );
}