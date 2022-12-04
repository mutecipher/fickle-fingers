import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/profile.jpg";
import LatestPosts from "../components/LatestPosts";

export default function Home() {
  return (
    <>
      <main className="pt-12">
        <div className="flex items-center justify-between pb-10">
          <div className="flex flex-col">
            <h1 className="pb-2 text-5xl font-bold tracking-wide">
              Cory Hutchison
            </h1>
            <h2 className="tracking-wider text-zinc-500">
              Software Engineer III at{" "}
              <Link
                href="https://www.weedmaps.com"
                className="hover:underline hover:underline-offset-4"
              >
                Weedmaps
              </Link>
            </h2>
          </div>
          <Image
            src={profilePic}
            alt="Profile picture"
            placeholder="blur"
            className="w-16 self-start rounded-full border border-solid object-cover shadow-sm hover:scale-[1.01] md:w-32 md:self-center"
          />
        </div>

        <p className="pb-4">
          I&apos;m passionate about the open web and learning new
          front-end/back-end technologies. For the past 5 years I&apos;ve been
          working extensively with{" "}
          <Link
            href="https://rubyonrails.org"
            className="hover:underline hover:underline-offset-4"
          >
            Ruby on Rails
          </Link>{" "}
          at my current position at{" "}
          <Link
            href="https://www.weedmaps.com"
            className="hover:underline hover:underline-offset-4"
          >
            Weedmaps
          </Link>
          , as well as my former position at{" "}
          <Link
            href="https://shopify.com"
            className="hover:underline hover:underline-offset-4"
          >
            Shopify
          </Link>
          .
        </p>

        <p>
          In the last while, I&apos;ve been focusing on developing my front-end
          skills and trying to learn newer front-end technologies.
        </p>
      </main>

      <LatestPosts />
    </>
  );
}
