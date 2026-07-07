import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Amos Gurung",
  description:
    "Learn about Amos Gurung, AI Marketing Expert and Consultant at AG Digital.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Amos Gurung"
        title="Marketing strategy, sharpened by AI and grounded in execution"
        copy="I help businesses turn AI from a confusing set of tools into practical marketing systems that save time, improve targeting, and support measurable growth."
        image="/images/about-amos.png"
        imageAlt="Professional AI marketing consultant portrait visual for Amos Gurung"
      />
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <Image
            src="/images/about-amos.png"
            alt="AI marketing consultant in a premium digital strategy setting"
            width={900}
            height={1100}
            className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
              AI Marketing Expert & Consultant
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              I build clear marketing systems for ambitious businesses.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
              <p>
                AG Digital is led by Amos Gurung, a consultant focused on
                AI-driven marketing, digital strategy, automation, content
                systems, lead generation, campaign optimization, and business
                growth.
              </p>
              <p>
                My work is designed for business owners who want practical
                execution, not vague technology talk. The goal is simple: turn
                AI into workflows, campaigns, and decision systems that your
                business can actually use.
              </p>
            </div>
            <div className="mt-9">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">Why Work With Me?</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["Innovation", "Use modern AI tools with business discipline."],
              ["Clarity", "Translate complex systems into clear next steps."],
              ["Growth", "Prioritize measurable marketing outcomes."],
              ["Execution", "Build campaigns, workflows, and reporting you can use."],
            ].map(([title, copy]) => (
              <div className="glass rounded-lg p-6" key={title}>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
