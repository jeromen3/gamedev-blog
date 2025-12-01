// app/privacy/page.tsx

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3 border-b border-border/60 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          This page explains what information is collected when you use this
          site and how it&apos;s used. This is a small, personal studio site,
          so the data collected is minimal.
        </p>
        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Information collected</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          By default, this site collects:
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-300 space-y-1 max-w-2xl">
          <li>
            <span className="font-semibold">Basic usage data</span> such as
            pages visited, time on site, and referrers, through standard
            analytics tools (if enabled).
          </li>
          <li>
            <span className="font-semibold">Email address</span> if you choose
            to join the email list.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">How your email is used</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          If you subscribe to the email list:
        </p>
        <ul className="list-disc pl-6 text-sm text-slate-300 space-y-1 max-w-2xl">
          <li>Your email is used to send occasional updates about new posts, projects, or resources.</li>
          <li>
            Your email will not be sold or shared with third parties for their
            own marketing.
          </li>
          <li>You can unsubscribe at any time using the link in each email (once the email provider is connected).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Cookies & analytics</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          This site may use cookies and analytics tools to understand how
          content is being used and to improve the experience over time. This
          data is viewed in aggregate and is not used to personally identify
          visitors.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          If you have questions about this policy or how your data is handled,
          you can reach out via the contact information provided on this site
          or through any linked profiles.
        </p>
      </section>

      <section className="space-y-2">
        <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
          This privacy policy is a general explanation and may be updated over
          time as the site evolves or if new features are added. For legal
          requirements in specific jurisdictions, consult a qualified
          professional.
        </p>
      </section>
    </div>
  );
}
