import React from 'react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background px-6 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Blog" subtitle="Thoughts, tutorials, and tech updates" />

        <div className="grid gap-8 mt-12">
          {posts.length === 0 ? (
            <div className="glass-card p-12 rounded-2xl text-center border-dashed border-2 border-slate-300 dark:border-slate-700">
              <p className="text-muted-foreground text-lg">No posts found yet.</p>
              <p className="text-sm text-slate-400 mt-2">Add markdown files to <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded">src/content/posts</code> to get started.</p>
            </div>
          ) : (
            posts.map((post) => (
              <article 
                key={post.slug} 
                className="glass-card p-8 rounded-2xl hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-violet-500/0 group-hover:via-blue-500/5 group-hover:to-violet-500/5 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="flex-1">
                    {/* Meta Data Row */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-full">
                        <Calendar size={14} className="text-primary" />
                        {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex items-center gap-1.5">
                           <Tag size={14} className="text-violet-500" />
                           <span className="text-violet-600 dark:text-violet-400 font-medium">
                             {post.tags[0]}
                           </span>
                        </div>
                      )}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 dark:group-hover:from-blue-400 dark:group-hover:to-violet-400 transition-all duration-300">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 text-base">
                      {post.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold group/link hover:gap-3 transition-all duration-300"
                    >
                      Read Article 
                      <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}