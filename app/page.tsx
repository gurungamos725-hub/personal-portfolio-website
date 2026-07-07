import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, ChartNoAxesCombined, Sparkles } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { blogPosts, caseStudies, services } from "@/data/content";

export default function Home() {
  return (
    <>
      <section className="grid-bg relative overflow-hidden pt-32">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[1fr_0.92fr] lg:px-8">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan">
              <Sparkles size={16} /> AI Marketing Expert & Consultant
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              AI-Powered Marketing Strategies for Smarter Business Growth
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              AG Digital helps brands use artificial intelligence, automation,
              and data-driven marketing to attract customers, improve campaigns,
              and scale with confidence.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
              {[
                ["AI", "Strategy"],
                ["Lead", "Systems"],
                ["Data", "Growth"],
              ].map(([top, bottom]) => (
                <div className="glass rounded-lg p-4" key={top}>
                  <div className="text-2xl font-semibold text-white">{top}</div>
                  <div className="text-sm text-slate-400">{bottom}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan/10 blur-3xl" />
            <Image
              src="/images/home-hero.png"
              alt="AI marketing dashboard and automation workspace for AG Digital"
              width={1200}
              height={900}
              priority
              className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover shadow-glow"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="AG Digital"
            title="Practical AI systems for real marketing outcomes"
            copy="I combine strategy, execution, and automation so business owners can move from scattered tools to measurable growth systems."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Strategy"
              title="From idea to AI-powered execution"
              copy="Every engagement is built around clarity: identify the growth constraint, design the marketing system, automate repeatable work, and measure what matters."
            />
            <Link
              href="/case-studies"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
            >
              See case studies <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Diagnose", "Audit channels, funnels, content, and customer journeys."],
              ["02", "Design", "Map AI workflows, lead systems, and campaign priorities."],
              ["03", "Deploy", "Build practical automations, assets, and reporting loops."],
              ["04", "Improve", "Use data to optimize messaging, targeting, and conversion."],
            ].map(([step, title, copy]) => (
              <div className="glass rounded-lg p-6" key={step}>
                <div className="mb-8 text-sm font-semibold text-cyan">{step}</div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proof of approach"
            title="Case study snapshots"
            copy="Sample project formats that show how AG Digital turns AI marketing ideas into working growth systems."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [Bot, "AI-ready workflows", "Replace repetitive manual marketing tasks with guided systems."],
              [ChartNoAxesCombined, "Data-led decisions", "Track the numbers that connect campaigns to business growth."],
              [Sparkles, "Premium clarity", "Make complex tools feel useful, simple, and ready for your team."],
            ].map(([Icon, title, copy]) => (
              <div className="rounded-lg border border-white/10 bg-ink/70 p-7" key={String(title)}>
                <Icon className="mb-6 text-cyan" size={28} />
                <h3 className="text-xl font-semibold text-white">{String(title)}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{String(copy)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insights"
            title="AI marketing ideas for growing teams"
            copy="Read practical thinking on automation, lead generation, SEO, content systems, and smarter campaign execution."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
