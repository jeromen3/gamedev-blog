// app/page.tsx
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export default function HomePage() {
  const posts = allBlogs
    .slice()
    .sort((a, b) => {
      const aDate = a.publishedAt
        ? new Date(a.publishedAt).getTime()
        : 0;
      const bDate = b.publishedAt
        ? new Date(b.publishedAt).getTime()
        : 0;
      return bDate - aDate;
    });

  const latest = posts.slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Start here / overview */}
      <section className="space-y-3 border-b border-border/60 pb-6">

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          On this website I am documenting what I'm learning about agricultural science, soil systems, and the technology behind modern growing in public.
My goal is to understand the fundamentals deeply, test them through real experiments, build tools and models that solve real problems, and explain everything clearly enough that someone else can follow the same path.
        </p>

        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          Use this page as your map: jump into the latest articles, see
          what&apos;s being built, and explore the long-term projects that
          sit behind the blog posts.
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="home-link px-4 py-2 text-xs shadow-md shadow-black/30"
          >
            Read the blog
          </Link>
          <Link
            href="/projects"
            className="home-link px-4 py-2 text-xs shadow-md shadow-black/20"
          >
            View projects
          </Link>
          <Link
            href="/about"
            className="home-link px-4 py-2 text-xs shadow-md shadow-black/20"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Latest articles */}
      <section className=" space-y-4">
        <div className="LatestArt flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Latest articles:</h2>
          <Link
            href="/blog"
            className="text-[11px] uppercase tracking-[0.18em] text-slate-500 hover:text-emerald-300"
          >
          
          </Link>
        </div>

        {latest.length === 0 ? (
          <p className="text-xs text-slate-500">
            No posts published yet.
          </p>
        ) : (
          <div className="LatestArt-primary space-y-3">
            {latest.map((post) => (
              <Link
                key={post.slug}
                href={post.url}
                className="blogs-man group block rounded-2xl border border-border/70 bg-slate-950/80 px-4 py-4 transition-colors hover:border-emerald-500/80 hover:bg-slate-900/70"
              >
                <article className="space-y-2">

                  <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-300 group-hover:underline">
                    {post.title}
                  </h3>

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
