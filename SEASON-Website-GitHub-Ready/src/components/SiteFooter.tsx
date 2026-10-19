import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight py-12 text-glacial">
      <div className="editorial-container flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-sans text-lg font-bold tracking-[-0.04em] text-glacial"
          >
            {siteConfig.brand.wordmark}
          </Link>
          <span className="font-mono text-xs text-silver">
            &copy; {currentYear}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-xs font-medium text-silver transition-colors hover:text-glacial"
            >
              {item.label}
            </Link>
          ))}

          {siteConfig.socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-sans text-xs font-medium text-glacial transition-colors hover:text-silver"
            >
              <span>{social.handle}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-silver" aria-hidden="true" />
            </a>
          ))}

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-1 font-mono text-xs text-silver transition-colors hover:text-glacial"
          >
            <span>{siteConfig.contact.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
