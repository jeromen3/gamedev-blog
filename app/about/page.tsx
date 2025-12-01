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
          I developed this site to be my long term vehicle for understanding game development,
          coding, and the math behind interactive worlds. It&apos;s a public
          workspace where I learn in the open, document the process, and
          build things that actually run.
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
          You can call me Rome, short for Jerome. I&apos;m teaching myself how to design and build
          interactive systems, games, tools, and educational content
          while also getting serious about the fundamentals: math, code,
          and disciplined problem solving.
        </p>

        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          I don&apos;t claim to be an expert. The whole point of this
          site is to show the progression from beginner to competent to
          genuinely skilled with receipts: shipped projects, clear
          explanations, and working code.
        </p>
      </section>

      {/* What this site is for */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What this site is for</h2>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          The website has three main jobs:
        </p>

        <ul className="list-disc pl-6 text-sm text-slate-300 space-y-1 max-w-2xl">
          <li>
            <span className="font-semibold">Build a resume</span>{" "}
            Clean write ups of what I&apos;m learning in game dev, coding, etc. 
            Not just wins, but the dead-ends and fixes too.
          </li>
          <li>
            <span className="font-semibold">Ship small, real things.</span>{" "}
            Playable prototypes, tools, and experiments that actually run
            on a real machine.
          </li>
          <li>
            <span className="font-semibold">Teach as I go.</span>{" "}
            Articles and explanations aimed at the version of me that
            didn&apos;t understand this stuff yet.
          </li>
        </ul>
      </section>

     

      {/* What to expect over time */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">What to expect over time</h2>

        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          This is a long term project. The plan is not to rush out
          random posts, but to build something that compounds:
        </p>

        <ul className="list-disc pl-6 text-sm text-slate-300 space-y-1 max-w-2xl">
          <li>
            More structured guides that group related articles into clear
            learning paths.
          </li>
          <li>
            Breakdowns that connect finished projects back to
            the concepts behind them.
          </li>
          <li>
            Small tools and utilities that grow out of the problems I have
            to solve along the way.
          </li>
        </ul>

        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          If you stick around, you&apos;ll see the entire evolution:
          notes → articles → systems → finished work.
        </p>
      </section>
    </div>
  );
}
