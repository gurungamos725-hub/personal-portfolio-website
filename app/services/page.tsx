import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI marketing strategy, automation, lead generation, content, SEO, ads, CRM, and analytics consulting by AG Digital.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consulting and execution for AI-powered marketing growth"
        copy="Choose focused support across strategy, automation, content, lead generation, paid media, CRM, analytics, and AI workflow integration."
        image="/images/services-ai.png"
        imageAlt="AI marketing services command center with dashboards and automation workflows"
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Services built for smarter execution"
            copy="Each service is designed to help your business move faster, market more intelligently, and create systems that continue improving."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
