import Link from "next/link";
import Post from "../interfaces/post";
import { getFrontmatter } from "../lib/blog";
import PostPreview from "./PostPreview";

export default function LatestPosts() {
  const posts: Post[] = getFrontmatter();
  const publishedPosts = posts.filter((post) => post.published);
  const hasPosts = publishedPosts.length > 0;

  return (
    <>
      {hasPosts ?
        <section className="pt-12">
          <h2 className="pb-8 text-2xl font-semibold"> Latest Posts</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {posts.slice(0, 3).map((post, index) => (
              <PostPreview key={index} post={post} />
            ))}
          </div>
          <div className="flex items-center justify-end pt-4">
            <Link
              href="/blog"
              className="flex items-center text-xs text-zinc-500 transition-all hover:text-current"
            >
              See all
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </section>
        : null}
    </>
  );
}
