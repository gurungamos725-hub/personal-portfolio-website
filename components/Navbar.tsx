"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { ButtonLink } from "@/components/ButtonLink";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Case Studies", "/case-studies"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-24 place-items-center overflow-hidden rounded-lg bg-white p-1.5">
            <img
              src="/images/ag-logo.jpg"
              alt="AG Digital logo"
              className="h-full w-full object-contain"
            />
          </span>
          <span>
            <span className="block text-base font-semibold text-white">AG Digital</span>
            <span className="block text-xs text-slate-400">AI Marketing</span>
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm font-medium transition hover:text-cyan",
                pathname === href ? "text-cyan" : "text-slate-300",
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/contact">Book a Consultation</ButtonLink>
        </div>
        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white lg:hidden"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-lg px-3 py-3 text-base font-medium",
                  pathname === href ? "bg-cyan/10 text-cyan" : "text-slate-200",
                )}
              >
                {label}
              </Link>
            ))}
            <div className="mt-4">
              <ButtonLink href="/contact">Book a Consultation</ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
