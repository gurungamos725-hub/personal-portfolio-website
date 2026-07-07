import type { CaseStudy } from "@/data/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="glass h-full rounded-lg p-6">
      <p className="text-sm font-semibold text-cyan">{study.industry}</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{study.title}</h3>
      <dl className="mt-6 space-y-5">
        {[
          ["Challenge", study.challenge],
          ["Strategy", study.strategy],
          ["Solution", study.solution],
          ["Results", study.results],
          ["Methods", study.methods],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {label}
            </dt>
            <dd className="mt-2 text-sm leading-6 text-slate-300">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
