// app/projects/page.tsx
import Link from "next/link";

type Project = {
  title: string;
  summary: string;
  status: "Planning" | "In Progress" | "Shipped";
  focus: string;
  href?: string;
};

const featured: Project[] = [
  {
    title: "Schedule-1 Inspired Game Prototype",
    summary:
      "A top-down simulation game where you manage a small operation, automate systems, and make tradeoffs under pressure. Focused on core loops and feel before content bloat.",
    status: "In Progress",
    focus: "Game Dev · Systems Design",
    href: "#",
  },
  {
    title: "Code & Math Dojo Infrastructure",
    summary:
      "The underlying blog, MDX components, and layout system that power this site. Built to become a long-term learning archive for game dev, coding, and math.",
    status: "In Progress",
    focus: "Web Dev · Knowledge Systems",
    href: "/blog",
  },
  {
    title: "Audio Pipeline for Games & Content",
    summary:
      "A clean pipeline using Ableton, Shure SM7B, and a proper interface to record voice lines, ambient soundscapes, and SFX for future prototypes.",
    status: "Planning",
    focus: "Audio · Tooling",
  },
];

const experiments: Project[] = [
  {
    title: "AI-Assisted Trading Sandbox",
    summary:
      "A low-frequency, risk-managed trading sandbox where AI assists with idea generation while human rules control execution and risk.",
    status: "Planning",
    focus: "Automation · Risk",
  },
  {
    title: "Math Visualizations for Game Dev",
    summary:
      "Small interactive demos that show how vectors, transforms, and probability actually show up inside games.",
    status: "Planning",
    focus: "Math · Visualization",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="space-y-3 border-b border-border/60 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          This is my build log. It tracks prototypes, tools,
          and systems.
        </p>

        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          Some projects are small experiments that ship fast. Others are
          slow, multi-year builds. This page keeps them in one place so you
          can see what&apos;s moving.
        </p>
      </section>

      

      {/* Call to action */}
      <section className="rounded-2xl border border-border/60 bg-slate-950/70 px-4 py-4">
        <h2 className="text-sm font-semibold">
          Want to follow the builds?
        </h2>
        <p className="mt-1 text-xs text-slate-400 max-w-lg leading-relaxed">
          The blog goes deeper into the thinking, math, and code behind
          these projects. Over time there will also be devlogs and playable
          prototypes linked directly from here.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="home-link px-4 py-2 text-xs shadow-md shadow-black/20"
          >
            Read the blog
          </Link>
        </div>
      </section>
    </div>
  );
}
