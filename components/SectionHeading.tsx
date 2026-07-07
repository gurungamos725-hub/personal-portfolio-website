import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={clsx("mx-auto max-w-3xl", align === "center" && "text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}
