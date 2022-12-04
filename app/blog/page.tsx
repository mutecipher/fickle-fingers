import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile.jpg";
import moment from "moment";
import Post from "../../interfaces/post";
import { getFrontmatter } from "../../lib/blog";

export default function Page() {
  const posts = getFrontmatter();
  const publishedPosts = posts.filter((post) => post.published);
  const hasPosts = publishedPosts.length > 0;

  return (
    <>
      {hasPosts ?
        <main className="pt-12">
          <h1 className="pb-10 text-5xl font-bold tracking-wide">Blog Posts</h1>
          {posts.map((post: Post, idx: number) => (
            <Link key={idx} href={`/blog/${post.slug}`}>
              <div className="hover:scale-[1.01]">
                <div className="mb-8 flex flex-col justify-start md:flex-row md:justify-between">
                  <div className="flex space-x-2 md:space-x-8">
                    <Image
                      src={profilePic}
                      alt="Profile picture"
                      placeholder="blur"
                      className="h-8 w-8 rounded-full border border-solid object-cover shadow-sm hover:scale-[1.01]"
                    />
                    <div className="flex flex-col">
                      <h1 className="mb-2 text-xl font-bold">{post.title}</h1>
                      <h2 className="text-sm">{post.description}</h2>
                    </div>
                  </div>
                  <div className="flex flex-col self-end">
                    <h1 className="text-sm">
                      {moment(post.date, "YYYYMMDD").fromNow()}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </main>
        :
        <main className="pt-12">
          <h1 className="pb-10 text-5xl font-bold tracking-wide">Blog Posts</h1>
          <h2 className="text-xl">No posts yet!</h2>
        </main>
      }
    </>
  );
}
