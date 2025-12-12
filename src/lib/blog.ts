import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export function getBlogPosts() {
  // 1. Create directory if it doesn't exist to prevent errors
  if (!fs.existsSync(blogsDirectory)) {
    try {
      fs.mkdirSync(blogsDirectory, { recursive: true });
    } catch (e) {
      return [];
    }
    return [];
  }
  
  const fileNames = fs.readdirSync(blogsDirectory);
  
  const allBlogsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const slug = fileName.replace(/\.mdx$/, '');

    // Read markdown file as string
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      slug,
      ...(matterResult.data as { date: string; title: string; description: string; tags: string[] }),
    };
  });

  // Sort posts by date
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPost(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    metadata: data as { date: string; title: string; description: string; tags: string[] },
    content,
  };
}