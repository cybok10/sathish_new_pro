import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  content: string;
  tags?: string[];
  [key: string]: any;
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx?$/, '');
  let fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  }

  if (!fs.existsSync(fullPath)) {
     return {
        slug: realSlug,
        title: 'Post Not Found',
        date: new Date().toISOString(),
        content: 'This post could not be found.',
        excerpt: '',
     };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || 'Untitled Post',
    date: data.date ? data.date.toString() : new Date().toISOString(),
    excerpt: data.excerpt || '',
    coverImage: data.coverImage || '',
    tags: data.tags || [],
    content,
    ...data,
  };
}

// THIS IS THE FUNCTION CAUSING THE ERROR - IT MUST BE EXPORTED
export function getBlogPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
  return posts;
}