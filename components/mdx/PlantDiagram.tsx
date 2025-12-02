// components/mdx/PlantDiagram.tsx

export default function PlantDiagram() {
  return (
    <div className="not-prose my-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 px-4 py-4 md:px-5 md:py-5">
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-300 mb-2">
        Plant Energy Map
      </p>
      <div className="grid gap-4 md:grid-cols-[1.2fr_minmax(0,1.6fr)]">
        <div className="flex flex-col gap-2 text-xs text-emerald-100/90">
          <p>
            This is a simplified mental model of what&apos;s happening inside a
            leaf:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Roots pull water and minerals into the xylem.</li>
            <li>Leaves capture light inside chloroplasts.</li>
            <li>
              Chloroplasts turn CO₂ + water into sugars (chemical energy).
            </li>
            <li>Phloem moves sugars to the rest of the plant.</li>
          </ul>
          <p className="text-[11px] text-emerald-200/80 mt-1">
            When you change light, water, or nutrients, you&apos;re changing
            this whole flow.
          </p>
        </div>

        <div className="relative rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/60 via-slate-950 to-slate-950 px-4 py-4 text-[11px] text-emerald-100/90">
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),transparent_55%)] pointer-events-none" />
          <div className="relative grid gap-2">
            <div className="rounded-lg border border-emerald-500/40 bg-slate-950/70 px-3 py-2">
              <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-300 mb-0.5">
                Leaf
              </div>
              <div className="text-xs text-emerald-100/90">
                Chloroplasts capturing light → sugars
              </div>
            </div>

            <div className="rounded-lg border border-emerald-500/30 bg-slate-950/60 px-3 py-2">
              <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-300 mb-0.5">
                Roots
              </div>
              <div className="text-xs text-emerald-100/90">
                Water + minerals pulled into xylem
              </div>
            </div>

            <div className="rounded-lg border border-emerald-500/30 bg-slate-950/60 px-3 py-2">
              <div className="text-[10px] uppercase tracking-[0.16em] text-emerald-300 mb-0.5">
                Transport
              </div>
              <div className="text-xs text-emerald-100/90">
                Xylem moves water up · Phloem moves sugars down
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
