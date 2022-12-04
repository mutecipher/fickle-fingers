import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import Post from '../interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostFileNames(): string[] {
  return readdirSync(postsDirectory);
}

export function getFrontmatter(): Post[] {
  const fileNames = getPostFileNames();
  const posts = fileNames.map((fileName) => {
    const fullPath = join(postsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data;
  });

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }) as Post[];
}

export function getFrontmatterBySlug(slug: string): Post {
  const postFrontmatter = getFrontmatter();
  const post = postFrontmatter.find((post) => post.slug === slug);

  return post as Post;
}

export async function getPostContentBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  const data = await remark().use(remarkGfm).use(remarkHtml).process(content);

  return String(data);
}
