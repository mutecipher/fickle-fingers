import moment from "moment";
import Link from "next/link";
import Post from "../interfaces/post";

interface Props {
  post: Post;
}

export default function PostPreview(props: Props) {
  const { title, slug, description, date, published } = props.post;
  return (
    <>
      {published &&
        <div className="overflow-hidden rounded-lg border border-solid shadow-sm transition-all hover:scale-[1.01]">
          <div className="flex h-full flex-col justify-between p-3">
            <div>
              <span className="text-xs">
                {date ? moment(date).fromNow() : undefined}
              </span>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-sm">{description}</p>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-end">
                <Link
                  href={`/blog/${slug}`}
                  className="mt-4 text-xs text-zinc-500 transition-all hover:text-current"
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
