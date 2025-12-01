// app/terms/page.tsx

export default function TermsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3 border-b border-border/60 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          These terms describe the basic rules for using this site and its
          content.
        </p>
        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Use of content</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Unless otherwise noted, all content on this site—articles, code
          snippets, examples, and other material—is owned by the creator of the
          site.
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-300 space-y-1 max-w-2xl">
          <li>
            You may read and use the material for personal learning and
            reference.
          </li>
          <li>
            You may not copy large portions of content and republish it as your
            own.
          </li>
          <li>
            Code examples may be adapted for your own projects, but attribution
            is appreciated where reasonable.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">No guarantees</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          The information on this site is provided &quot;as is&quot; with no
          guarantees. While the goal is to be accurate and helpful, there may
          be mistakes, omissions, or changes over time.
        </p>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          You are responsible for how you use any information, code, or ideas
          from this site in your own projects.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Third-party links</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          This site may link to external sites, tools, or resources. These are
          provided for convenience and do not imply endorsement or control over
          their content or policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Changes to these terms</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          These terms may be updated over time as the site evolves. If you
          continue using the site after changes are posted, you accept the
          updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          If you have questions about these terms, you can reach out through
          the contact information provided on the site.
        </p>
      </section>

      <section className="space-y-2">
        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          These terms are a simple, general guideline and are not a substitute
          for professional legal advice. If you need legally enforceable terms
          for a business or commercial product, consult a qualified attorney.
        </p>
      </section>
    </div>
  );
}
