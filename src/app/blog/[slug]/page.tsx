import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
export async function generateStaticParams() { const posts = getBlogPosts(); return posts.map((post) => ({ slug: post.slug, })); }
export default function BlogPost({ params }) {
  const { metadata, content } = getBlogPost(params.slug);
  return (
    <main className="min-h-screen pt-32 pb-20 bg-background px-6">
      <div className="container mx-auto max-w-3xl">
        <Link href="/blog"><Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-violet-500 text-muted-foreground"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog</Button></Link>
        <header className="mb-12"><div className="flex items-center gap-3 text-sm text-muted-foreground mb-4"><Calendar size={16} />{metadata.date}</div><h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{metadata.title}</h1><div className="flex gap-2">{metadata.tags?.map((tag) => (<span key={tag} className="bg-violet-500/10 text-violet-500 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>))}</div></header>
        <article className="prose prose-lg dark:prose-invert prose-headings:text-foreground prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-a:text-violet-500 max-w-none"><MDXRemote source={content} /></article>
      </div>
    </main>
  );
}