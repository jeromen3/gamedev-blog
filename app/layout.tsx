import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import DiscordWidget from "@/components/DiscordWidget";
import EmailWidget from "@/components/EmailWidget";
import LeftSidebar from "@/components/LeftSidebar";
import { CurrentSection } from "@/components/CurrentSection";
import { Analytics } from "@vercel/analytics/next"

<Analytics/>
// src/lib/site.ts (or just at top of layout.tsx)
export const SITE_URL = "https://example.com"; // <- CHANGE THIS ONCE
export const SITE_NAME = "Game Dev · Coding · Math Dojo";
export const SITE_DESCRIPTION =
  "A long-term learning dojo for game development, coding, and the math behind interactive worlds.";



export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s · Game Dev · Coding · Math Dojo",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="app-shell">
          {/* Header */}
          <header className="app-header">
            <div className="app-header-left">
              <Link href="/" className="app-logo">
                <span className="app-logo-main">RomesDev</span>
                <span className="app-logo-sub"> Studio</span>
              </Link>

              <nav className="app-header-nav">
                <Link href="/blog">Blog</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
              </nav>
            </div>

            <div className="app-header-right">
              <span className="app-version"></span>
            </div>
          </header>

          {/* HERO – full width, under navbar, above 3-column layout */}
          <section className="app-hero">
            <div className="app-hero-inner">
              <div className="app-her-content">
              <CurrentSection />
              </div>
              
              
            </div>
          </section>

          {/* Main 3-column layout */}
          <main className="app-main">
            <div className="app-main-inner">
              {/* Left sidebar */}
              <LeftSidebar />

              {/* Center content */}
              <section className="app-content">
                <div>{children}</div>
              </section>

              {/* Right column */}
              <aside className="app-sidebar">
                <div className="app-sidebar-section">
                  <EmailWidget />
                </div>

                <div className="app-sidebar-section small">
                  <DiscordWidget />
                </div>
              </aside>
            </div>
          </main>

          {/* Footer */}
          <footer className="app-footer">
  <div className="app-footer-inner">
    <span>© {new Date().getFullYear()} Game Dev · Coding · Math</span>

    <div className="app-footer-links">
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Service</Link>
    </div>
  </div>
</footer>

        </div>
      </body>
    </html>
  );
}
