// app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "@/components/mdx";
import { OnThisPage } from "@/components/on-this-page";

type BlogPageProps = {
  params: { slug: string };
};

// TODO: change to your real domain once it's final
const SITE_URL = "https://example.com";

export const generateStaticParams = () =>
  allBlogs.map((post) => ({ slug: post.slug }));

export function generateMetadata({ params }: BlogPageProps) {
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

// Estimate reading time by word count
function getReadingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200)); // 200 wpm
  return { words, minutes };
}

function formatLevel(level?: string | null) {
  if (!level) return null;
  const normalized = level.toLowerCase();

  if (normalized.startsWith("beg")) return { label: "Beginner" };
  if (normalized.startsWith("int")) return { label: "Intermediate" };
  if (normalized.startsWith("adv")) return { label: "Advanced" };

  return { label: level };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);
  const { words, minutes } = getReadingTime(post.body.raw);

  const sortedPosts = [...allBlogs].sort((a, b) => {
    const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return bTime - aTime;
  });

  const index = sortedPosts.findIndex((p) => p._id === post._id);
  const prevPost = index > 0 ? sortedPosts[index - 1] : null;
  const nextPost = index < sortedPosts.length - 1 ? sortedPosts[index + 1] : null;

  const url = `${SITE_URL}${post.url}`;
  const publishedTime = post.publishedAt ?? new Date().toISOString();
  const updatedTime = (post as any).updatedAt ?? publishedTime;
  const levelInfo = formatLevel((post as any).level);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: publishedTime,
    dateModified: updatedTime,
    url,
    mainEntityOfPage: url,
    wordCount: words,
    author: {
      "@type": "Person",
      name: "Rome",
    },
    keywords: post.tags ?? [],
  };

  return (
    <>
      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="blog-layout grid gap-8 lg:grid-cols-[minmax(0,1.8fr)_260px]">
        {/* Main article */}
        <article
          id="article-content"
          className="blog-article-card prose prose-invert max-w-none"
        >
          {/* Breadcrumbs */}
          <nav className="blog-breadcrumbs">
            <a href="/" className="blog-breadcrumb-link">
              Home
            </a>
            <span className="blog-breadcrumb-separator">/</span>
            <a href="/blog" className="blog-breadcrumb-link">
              Blog
            </a>
            <span className="blog-breadcrumb-separator">/</span>
            <span className="blog-breadcrumb-current">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="blog-header">
            <div className="blog-label-row">
              <span className="blog-label-pill">Agriculture · Plant Science</span>
              {levelInfo && (
                <span className="blog-level-pill">{levelInfo.label}</span>
              )}
            </div>

            <h1 className="blog-title">{post.title}</h1>

            {post.summary && (
              <p className="blog-subtitle">
                {post.summary}
              </p>
            )}

            <div className="blog-meta-row">
              {post.publishedAt && (
                <time
                  dateTime={post.publishedAt}
                  className="blog-meta-pill"
                >
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              )}

              <span className="blog-meta-separator" />

              <span className="blog-meta-pill">
                {minutes} min read · {words.toLocaleString()} words
              </span>

              {post.tags && post.tags.length > 0 && (
                <>
                  <span className="blog-meta-separator" />
                  <div className="blog-tag-row">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag-pill">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Body */}
          <div className="blog-body">
            <MDXContent components={mdxComponents} />
          </div>

          {/* Divider */}
          <hr className="blog-divider" />

          {/* Footer: author + share */}
          <section className="blog-footer">
            <div className="blog-author-card">
              <div className="blog-author-avatar">R</div>
              <div className="blog-author-text">
                <p className="blog-author-name">Rome</p>
                <p className="blog-author-bio">
                  Student of plant science, documenting the journey from first grow
                  to long-term mastery.
                </p>
              </div>
            </div>

            <div className="blog-share">
              <span className="blog-share-label">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  url
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noreferrer"
                className="blog-share-pill"
              >
                X / Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  url
                )}`}
                target="_blank"
                rel="noreferrer"
                className="blog-share-pill"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  post.title
                )}&body=${encodeURIComponent(url)}`}
                className="blog-share-pill"
              >
                Email
              </a>
            </div>
          </section>

          {/* Prev / Next */}
          <section className="blog-nav-section">
            <div className="blog-nav-grid">
              {prevPost && (
                <a href={prevPost.url} className="blog-nav-card blog-nav-card-prev">
                  <span className="blog-nav-label">Previous</span>
                  <span className="blog-nav-title">{prevPost.title}</span>
                  {prevPost.publishedAt && (
                    <span className="blog-nav-date">
                      {new Date(prevPost.publishedAt).toLocaleDateString(
                        undefined,
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </span>
                  )}
                </a>
              )}

              {nextPost && (
                <a href={nextPost.url} className="blog-nav-card blog-nav-card-next">
                  <span className="blog-nav-label">Next</span>
                  <span className="blog-nav-title">{nextPost.title}</span>
                  {nextPost.publishedAt && (
                    <span className="blog-nav-date">
                      {new Date(nextPost.publishedAt).toLocaleDateString(
                        undefined,
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </span>
                  )}
                </a>
              )}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="blog-sidebar hidden lg:block">
          <div className="blog-toc-container sticky top-24 space-y-4">
            <OnThisPage />
          </div>
        </aside>
      </div>
    </>
  );
}
