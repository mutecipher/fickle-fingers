import Link from "next/link";

export default function Tag({ tag }: { tag: string }) {
  return (
    <div className="font-light text-xs rounded-full bg-zinc-900 p-2">
      <Link href={`/blog/tags/${tag}`}>
        <h3>{tag}</h3>
      </Link>
    </div>
  );
}
