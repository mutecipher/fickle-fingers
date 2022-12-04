import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/mutecipher",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/mutecipher",
    },
    {
      name: "Mastodon",
      url: "https://ruby.social/@mutecipher",
    }
  ];

  return (
    <footer className="pt-16 pb-4">
      <div className="flex flex-col justify-between items-center text-sm md:flex-row md:text-start">
        <p>mutecipher &copy; {year}</p>
        <div className="flex flex-col divide-solid items-center md:items-start md:flex-row md:space-x-4">
          {socialLinks.map((link, idx) => (
            <div key={idx}>
              <Link
                href={link.url}
                className="text-zinc-500 hover:text-zinc-200"
                target="_blank"
                rel={link.name === "Mastodon" ? "me" : undefined}
              >
                <div className="flex space-x-2 items-center">
                  {link.name}
                </div>
              </Link>
            </div>
          ))}
          {/*
            <div>
              <Link
                href="/api/rss"
                className="text-zinc-500 hover:text-zinc-200"
              >
                <div className="flex space-x-2 items-center">
                  <span>RSS</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          */}
        </div>
      </div >
    </footer >
  );
}
