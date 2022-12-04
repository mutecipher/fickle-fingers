import Post from "../../../interfaces/post";
import { getFrontmatterBySlug } from "../../../lib/blog";

export default function Head({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post: Post = getFrontmatterBySlug(slug);

  return (
    <>
      <title>{`${post.title} | mutecipher`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Personal blog of Cory Hutchison" />
      <link rel="icon" href="/favicon.ico" />

      {/* opengraph meta tags */}
      <meta property="og:title" content={post.title} />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content={`https://fickle-fingers.vercel.app/blog/${post.slug}`}
      />
      <meta
        property="og:image"
        content={`https://fickle-fingers.vercel.app/api/og?title=${post.title}`}
      />
      <meta property="og:description" content={post.description} />

      {/* twitter meta tags */}
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:card" content={`https://fickle-fingers.vercel.app/api/og?title=${post.title}`} />
      <meta name="twitter:site" content="@mutecipher" />
      <meta name="twitter:creator" content="@mutecipher" />
    </>
  );
}
