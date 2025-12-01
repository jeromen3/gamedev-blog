import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export default function LeftSidebar() {
  // Sort newest → oldest
  const posts = allBlogs
    .slice()
    .sort((a, b) => {
      const aDate = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bDate = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bDate - aDate;
    })
    .slice(0, 5); // only show last 5 posts

  return (
    <aside className="left-sidebar">
      <div className="left-sidebar-inner">
        <h3 className="left-sidebar-title">Recent Posts</h3>

        <ul className="left-sidebar-list">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={post.url} className="left-sidebar-link">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/blog" className="left-sidebar-more">
          View all →
        </Link>
      </div>
    </aside>
  );
}
