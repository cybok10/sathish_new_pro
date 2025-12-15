import React from 'react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Blog" subtitle="Thoughts, tutorials, and tech updates" />

        <div className="grid gap-8 mt-12">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p>No posts found yet. Check back soon!</p>
            </div>
          ) : (
            posts.map((post) => (
              <article 
                key={post.slug} 
                className="glass-card p-8 rounded-2xl hover:border-violet-500/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                         <>
                           <span className="w-1 h-1 bg-slate-700 rounded-full" />
                           <span className="text-violet-400">{post.tags[0]}</span>
                         </>
                      )}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all"
                    >
                      Read Article <ArrowRight size={16} />
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