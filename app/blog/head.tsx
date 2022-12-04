export default function Head() {
  return (
    <>
      <title>Blog | mutecipher</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Personal blog of Cory Hutchison" />
      <link rel="icon" href="/favicon.ico" />

      {/* opengraph meta tags */}
      <meta property="og:title" content="Blog" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://fickle-fingers.vercel.app/blog" />
      <meta property="og:image" content="https://fickle-fingers.vercel.app/api/og?title=Blog" />
      <meta property="og:description" content="Personal blog of mutecipher" />

      {/* twitter meta tags */}
      <meta name="twitter:title" content="Blog" />
      <meta name="twitter:card" content="https://fickle-fingers.vercel.app/api/og?title=Blog" />
      <meta name="twitter:site" content="@mutecipher" />
      <meta name="twitter:creator" content="@mutecipher" />
    </>
  )
}
