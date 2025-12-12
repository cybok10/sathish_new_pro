import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="My Blog" subtitle="Thoughts, tutorials, and security research" />
        
        <div className="grid gap-8 mt-12">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-4">No posts found yet.</p>
              <p className="text-sm text-slate-500">Create a .mdx file in content/blogs/ to get started.</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group relative bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  <div>
                     <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                        <Calendar size={14} />
                        {post.date}
                        {post.tags?.map(tag => (
                          <span key={tag} className="bg-violet-500/10 text-violet-500 px-2 py-0.5 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                     </div>
                     <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-violet-500 transition-colors">
                       {post.title}
                     </h2>
                     <p className="text-muted-foreground leading-relaxed max-w-2xl">
                       {post.description}
                     </p>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" className="rounded-full group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 transition-all">
                      Read Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}