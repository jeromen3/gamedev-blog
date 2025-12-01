// components/on-this-page.tsx
"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  level: number; // 2, 3, 4 etc.
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

export function OnThisPage() {
  const [items, setItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const container = document.getElementById("article-content");
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll<HTMLHeadingElement>("h2, h3, h4")
    );

    const tocItems: TocItem[] = headings.map((h) => {
      if (!h.id) {
        h.id = slugify(h.innerText);
      }

      const level = Number(h.tagName.replace("H", "")) || 2;

      return {
        id: h.id,
        text: h.innerText,
        level,
      };
    });

    setItems(tocItems);
  }, []);

  if (items.length === 0) {
    return (
      <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 text-sm text-slate-400">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-1">
          On this page
        </div>
        <p>No headings detected yet.</p>
      </aside>
    );
  }

  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 text-sm">
      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
        On this page
      </div>
      <nav className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              const el = document.getElementById(item.id);
              if (!el) return;
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`block w-full text-left truncate hover:text-sky-300 ${
              item.level === 2
                ? "text-slate-100"
                : item.level === 3
                ? "pl-3 text-slate-300 text-xs"
                : "pl-6 text-slate-400 text-xs"
            }`}
          >
            {item.text}
          </button>
        ))}
      </nav>
    </aside>
  );
}
