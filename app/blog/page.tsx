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
    <div className="blog-index">
      {/* Header copy (optional, can fill later) */}

      {/* Search + filters card */}
      <section className="blog-index-filters-card">
        {/* Top row: stats + clear button */}
        <div className="blog-index-stats-row">
          <div className="blog-index-stats-text">
            <h2 className="blog-index-filter-state">
              {activeTag === "all" ? (
                <>Browsing all topics</>
              ) : (
                <>
                  Filtering by{" "}
                  <span className="blog-index-filter-tag">
                    {activeTag}
                  </span>
                </>
              )}
            </h2>
            <p className="blog-index-count">
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
              className="blog-index-clear-button"
            >
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Search input */}
        <div className="blog-index-search">
          <input
            type="search"
            placeholder="Search by topic, concept, or keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="blog-index-search-input"
          />
        </div>

        {/* Tag filter pills */}
        {tags.length > 0 && (
          <div className="blog-index-tag-row">
            <button
              type="button"
              onClick={() => setActiveTag("all")}
              className={
                "blog-index-tag-pill" +
                (activeTag === "all" ? " blog-index-tag-pill--active" : "")
              }
            >
              All topics
            </button>

            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={
                  "blog-index-tag-pill" +
                  (activeTag === tag ? " blog-index-tag-pill--active" : "")
                }
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Results list */}
      <section className="blog-index-results">
        {filtered.length === 0 ? (
          <div className="blog-index-empty">
            No posts match that search yet. Try a different keyword or clear
            filters.
          </div>
        ) : (
          <div className="blog-index-list">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={post.url}
                className="blog-index-post-card"
              >
                <article className="blog-index-post-inner">
                  {/* Meta line */}
                  <div className="blog-index-post-meta">
                    {post.publishedAt && (
                      <time
                        className="blog-index-post-date"
                        dateTime={post.publishedAt}
                      >
                        {new Date(post.publishedAt).toLocaleDateString(
                          undefined,
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </time>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="blog-index-post-title">
                    {post.title}
                  </h2>

                  {/* Summary */}
                  {post.summary && (
                    <p className="blog-index-post-summary">
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
