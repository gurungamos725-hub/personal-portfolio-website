import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "AI marketing insights on automation, lead generation, SEO, content systems, and digital growth.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical AI marketing insights for modern businesses"
        copy="Ideas and guides for using AI, automation, content, SEO, and data to improve your marketing systems."
        image="/images/blog-insights.png"
        imageAlt="AI marketing insights and digital publishing workspace"
      />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Thinking"
            title="Helpful reads for smarter growth"
            copy="Use these sample articles as a starting point for your thought leadership library."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
