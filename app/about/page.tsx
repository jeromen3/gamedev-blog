// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Intro */}
      <section className="space-y-3 border-b border-border/60 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          About Me
        </h1>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          I developed this site to be my long term vehicle for understanding agricultural science, soil systems, and modern and ancient growing technology.
I don’t come from a traditional academic background. I’m teaching myself the fundamentals one step at a time, documenting everything I learn, and building real projects that prove the knowledge works.
        </p>

        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          Over time, I'm hoping it becomes less of a personal blog and more of a
          structured learning: articles, projects, experiments, and
          eventually tools that sit on top of everything I&apos;ve built and
          written here.
        </p>
      </section>

      {/* Who I am */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Who I am</h2>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          You can call me Rome, short for Jerome.
        </p>

        <h3>My goal is simple:</h3>
        <p>To understand agriculture deeply enough to grow food intelligently, build useful tools for growers, and eventually create my own systems for farms and small-scale production.</p>



        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          I don&apos;t claim to be an expert. The whole point of this
          site is to show the progression from beginner to competent
        </p>
      </section>

      
    </div>
  );
}
