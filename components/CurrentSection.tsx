"use client";

import { usePathname } from "next/navigation";

const LABELS: { test: (p: string) => boolean; label: string }[] = [
  { test: (p) => p === "/", label: "Welcome" },
  { test: (p) => p.startsWith("/blog"), label: "Blog" },
  { test: (p) => p.startsWith("/projects"), label: "Projects" },
  { test: (p) => p.startsWith("/about"), label: "About" },
  { test: (p) => p.startsWith("/privacy"), label: "Privacy Policy" },
  { test: (p) => p.startsWith("/terms"), label: "Terms of Service" },
  { test: (p) => p.startsWith("/store"), label: "Store" },
];

export function CurrentSection() {
  const pathname = usePathname();

  const match = LABELS.find((item) => item.test(pathname));
  const label = match?.label ?? "Exploring";

  return (
    <span className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
      {label}
    </span>
  );
}
