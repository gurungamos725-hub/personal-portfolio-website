import Link from "next/link";
import { contact, services } from "@/data/content";

const quickLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_0.7fr_0.9fr_1fr] lg:px-8">
        <div>
          <div className="flex flex-col items-start gap-2">
            <span className="grid h-12 w-44 place-items-center overflow-hidden">
              <img
                src="/images/ag-digital-logo.png"
                alt="AG Digital logo"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="pl-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">
              AI Marketing
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            AI-powered marketing strategy, consulting, automation, and digital
            growth services by Amos Gurung.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <div className="mt-4 space-y-3">
            {quickLinks.map(([label, href]) => (
              <Link className="block text-sm text-slate-400 hover:text-cyan" href={href} key={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <div className="mt-4 space-y-3">
            {services.slice(0, 5).map((service) => (
              <Link
                className="block text-sm text-slate-400 hover:text-cyan"
                href="/services"
                key={service.title}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a className="block hover:text-cyan" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <a className="block hover:text-cyan" href={`tel:${contact.phone}`}>
              {contact.phone}
            </a>
            <p>{contact.location}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6 text-sm text-slate-500 lg:px-8">
        Copyright {new Date().getFullYear()} AG Digital. All rights reserved.
      </div>
    </footer>
  );
}
