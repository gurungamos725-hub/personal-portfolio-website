import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition",
        variant === "primary"
          ? "bg-cyan text-ink hover:bg-white"
          : "border border-white/15 bg-white/5 text-white hover:border-cyan/60 hover:text-cyan",
      )}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
