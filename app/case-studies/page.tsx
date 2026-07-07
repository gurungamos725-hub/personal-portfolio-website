import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies } from "@/data/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Sample AI marketing case studies covering content systems, lead generation funnels, and marketing automation.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="AI marketing systems designed around measurable outcomes"
        copy="Explore sample project formats showing how strategy, automation, and analytics can work together to improve marketing performance."
        image="/images/case-studies.png"
        imageAlt="AI marketing case study dashboard showing growth and campaign results"
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Project Examples"
            title="From challenge to growth system"
            copy="These placeholders can be replaced with your real client results when you are ready to publish live case studies."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
