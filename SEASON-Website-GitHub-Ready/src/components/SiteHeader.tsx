"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site-config";
import { MobileNavigation } from "@/components/MobileNavigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-midnight/60 backdrop-blur-xl">
      <div className="editorial-container flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="SEASON® — Home"
          className="font-sans text-lg font-bold tracking-[-0.04em] text-glacial"
        >
          {siteConfig.brand.wordmark}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-sans text-xs font-medium tracking-[0.06em] transition-colors ${
                      isActive ? "text-glacial" : "text-silver hover:text-glacial"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/35 hover:bg-white/10 md:inline-flex"
          >
            Get in Touch
          </Link>

          <MobileNavigation
            isOpen={mobileMenuOpen}
            onToggle={handleToggle}
            onClose={handleClose}
            navigation={siteConfig.navigation}
            socials={siteConfig.socials}
            wordmark={siteConfig.brand.wordmark}
          />
        </div>
      </div>
    </header>
  );
}
