import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="glass group flex h-full flex-col rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyan/40">
      <Icon className="text-cyan" size={28} />
      <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{service.description}</p>
      <p className="mt-5 text-sm font-medium text-slate-100">{service.benefit}</p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
      >
        Book consultation <ArrowRight size={16} />
      </Link>
    </article>
  );
}
