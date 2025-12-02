// app/store/layout.tsx

import type { ReactNode } from "react";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <section className="store-page">
      <div className="store-page-inner">{children}</div>
    </section>
  );
}
