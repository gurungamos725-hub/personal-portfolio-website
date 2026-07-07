import { ButtonLink } from "@/components/ButtonLink";

export function CTASection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/16 via-white/[0.06] to-violet/16 p-8 text-center shadow-glow sm:p-14">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
          Book a Consultation
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to turn AI into a practical marketing advantage?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Share your goals, your current marketing challenges, and the systems
          you want to improve. AG Digital will help you find the clearest path.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/contact">Contact AG Digital</ButtonLink>
        </div>
      </div>
    </section>
  );
}
