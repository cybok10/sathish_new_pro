import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the path to your blog posts directory
// This assumes your posts are in 'src/content/posts' or just 'posts' at the root
// Adjust this path if your markdown files are stored elsewhere
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

/**
 * Gets all post slugs (filenames) from the posts directory
 */
export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
}

/**
 * Gets a single post by its slug
 */
export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx?$/, '');
  
  // Try to find the file as .md or .mdx
  let fullPath = path.join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
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

/**
 * Gets all posts, sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1));
  return posts;
}