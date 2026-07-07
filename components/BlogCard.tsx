import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan/40 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
        <span>{post.category}</span>
        <time dateTime={post.date}>{post.dateLabel}</time>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{post.excerpt}</p>
      <Link
        href="/blog"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
      >
        Read More <ArrowRight size={16} />
      </Link>
    </article>
  );
}
