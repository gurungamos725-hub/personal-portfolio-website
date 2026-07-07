import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, copy, image, imageAlt }: PageHeroProps) {
  return (
    <section className="grid-bg relative overflow-hidden pt-32">
      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{copy}</p>
        </div>
        <Image
          src={image}
          alt={imageAlt}
          width={1300}
          height={850}
          priority
          className="aspect-[16/10] w-full rounded-2xl border border-white/10 object-cover shadow-glow"
        />
      </div>
    </section>
  );
}
