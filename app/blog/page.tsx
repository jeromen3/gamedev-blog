// app/blog/page.tsx
"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { allBlogs } from "contentlayer/generated";

type TagFilter = "all" | string;

export default function BlogPage() {
  const router = useRouter();
  const pathname = usePathname();

  // Newest → oldest
  const posts = useMemo(
    () =>
      allBlogs
        .slice()
        .sort((a, b) => {
          const aDate = a.publishedAt
            ? new Date(a.publishedAt).getTime()
            : 0;
          const bDate = b.publishedAt
            ? new Date(b.publishedAt).getTime()
            : 0;
          return bDate - aDate;
        }),
    []
  );

  // Unique tags
  const tags: string[] = useMemo(() => {
    const set = new Set<string>();
    for (const post of posts) {
      if (Array.isArray(post.tags)) {
        for (const t of post.tags) set.add(t);
      }
    }
    return Array.from(set).sort();
  }, [posts]);

  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<TagFilter>("all");

  // Keep URL in sync with search + tag (for sharable filters)
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (activeTag !== "all") params.set("tag", activeTag);

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [query, activeTag, pathname, router]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return posts.filter((post) => {
      // tag filter
      if (
        activeTag !== "all" &&
        (!post.tags || !post.tags.includes(activeTag))
      ) {
        return false;
      }

      if (!q) return true;

      const title = (post.title ?? "").toLowerCase();
      const summary = (post.summary ?? "").toLowerCase();
      const tagText = Array.isArray(post.tags)
        ? post.tags.join(" ").toLowerCase()
        : "";

      return (
        title.includes(q) ||
        summary.includes(q) ||
        tagText.includes(q)
      );
    });
  }, [posts, query, activeTag]);

  return (
    <div className="space-y-8">
      {/* Header copy */}
      <header className="space-y-3">
      </header>

      {/* Search + filters card */}
      <section className="iportant rounded-2xl border border-border/70 bg-slate-950/80 px-4 py-4 space-y-4 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
        {/* Top row: stats */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="space-y-1">
            <h1 className="text-xs text-slate-400">
              {activeTag === "all" ? (
                <>Browsing all topics</>
              ) : (
                <>
                  Filtering by{" "}
                  <span className="font-semibold capitalize">
                    {activeTag}
                  </span>
                  
                </>
              )}
            </h1>
            <p className="text-[11px] text-slate-500">
              Showing {filtered.length} of {posts.length} posts
            </p>
          </div>

          {query || activeTag !== "all" ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveTag("all");
              }}
              className="text-[11px] text-slate-400 hover:text-emerald-300 underline-offset-2 hover:underline"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Search input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          </div>
          <input
            type="search"
            placeholder="Search by topic"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-full border border-slate-700 bg-slate-950 pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 focus:border-emerald-500/80"
          />
        </div>

        {/* Tag filter pills */}
        {tags.length > 0 && (
          <div className="tag-filters flex flex-wrap gap-2 text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTag("all")}
              className={`rounded-full border px-3 py-1 transition ${
                activeTag === "all"
                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                  : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
              }`}
            >
              All topics
            </button>

            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-3 py-1 capitalize transition ${
                  activeTag === tag
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-300"
                    : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Results list */}
      <section className="space-y-4">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-border/60 bg-slate-950/70 px-4 py-4 text-xs text-slate-400">
            No posts match that search yet. Try a different keyword or
            clear filters.
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={post.url}
                className="group block rounded-2xl border border-border/70 bg-slate-950/70 px-4 py-4 transition-colors hover:border-emerald-500/80 hover:bg-slate-900/70"
              >
                <article className="space-y-2">
                  {/* Meta line */}
                  <div className="time flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </time>
                    )}
                 
                    
                  </div>

                  {/* Title */}
                  <h2 className="text-base font-semibold text-slate-50 group-hover:text-emerald-300 group-hover:underline">
                    {post.title}
                  </h2>

                  {/* Summary */}
                  {post.summary && (
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  )}

                 
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
