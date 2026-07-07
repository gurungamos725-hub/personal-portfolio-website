import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AG Digital to book a consultation with Amos Gurung for AI marketing strategy and execution.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a consultation for your next AI marketing move"
        copy="Tell me what you are building, where your marketing feels stuck, and which systems you want to improve. I will help you identify the clearest next step."
        image="/images/contact-consultation.png"
        imageAlt="AI marketing consultation booking and contact visual"
      />
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <aside className="glass rounded-2xl p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
              AG Digital
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Let us talk about growth.
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-6 text-slate-300">
              <p>
                <span className="block font-semibold text-white">Email</span>
                <a className="hover:text-cyan" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
              <p>
                <span className="block font-semibold text-white">Phone</span>
                <a className="hover:text-cyan" href={`tel:${contact.phone}`}>
                  {contact.phone}
                </a>
              </p>
              <p>
                <span className="block font-semibold text-white">Location</span>
                {contact.location}
              </p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
