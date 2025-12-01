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

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = allBlogs.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  // --- SEO: JSON-LD structured data for this post ---
  const url = `${SITE_URL}${post.url}`;
  const publishedTime = post.publishedAt ?? new Date().toISOString();
  const updatedTime = (post as any).updatedAt ?? publishedTime;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: publishedTime,
    dateModified: updatedTime,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: "Rome",
    },
  };

  return (
    <>
      {/* JSON-LD for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="app-content-card grid gap-8 lg:grid-cols-[minmax(0,1.8fr)_260px]">
        {/* Main article */}
        <article
          id="article-content"
          className="prose prose-invert prose-slate max-w-none rounded-3xl border border-border/70 bg-slate-950/80 px-6 py-6 md:px-8 md:py-8"
        >
          {/* Top meta */}
          <header className="not-prose mb-4 space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-50">
              {post.title}
            </h1>

            {post.summary && (
              <p className="text-sm text-slate-400 max-w-2xl">
                {post.summary}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              )}

              {/* optional: show reading time if you have it in your schema */}
              {"readingTime" in post && (post as any).readingTime && (
                <span>• {(post as any).readingTime} min read</span>
              )}

              {/* optional: show tags if present */}
           
            </div>
          </header>

          {/* MDX body */}
          <MDXContent components={mdxComponents} />
        </article>

        {/* Right-hand TOC / sidebar */}
        <aside className="hidden lg:block space-y-4">
          <OnThisPage />
          {/* You can add small cards below if you want: email / discord / next-article, etc. */}
        </aside>
      </div>
    </>
  );
}
