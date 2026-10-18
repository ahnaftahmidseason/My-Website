"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { NavItem, SocialLink } from "@/data/site-config";

interface MobileNavigationProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  navigation: NavItem[];
  socials: SocialLink[];
  wordmark: string;
}

export function MobileNavigation({
  isOpen,
  onToggle,
  onClose,
  navigation,
  socials,
  wordmark,
}: MobileNavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="season-mobile-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex min-h-[42px] min-w-[42px] items-center justify-center rounded-full border border-ice/25 bg-midnight/80 px-3 text-glacial backdrop-blur-md transition-colors hover:border-ice"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="season-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-midnight/95 px-6 py-6 text-glacial backdrop-blur-2xl"
        >
          <div className="flex items-center justify-between border-b border-ice/15 pb-5">
            <Link
              href="/"
              onClick={onClose}
              className="font-sans text-xl font-semibold tracking-[-0.04em] text-glacial"
            >
              {wordmark}
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="inline-flex min-h-[42px] min-w-[42px] items-center justify-center rounded-full border border-ice/25 px-3 text-glacial"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile primary" className="my-auto py-8">
            <ul className="space-y-4">
              {navigation.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href} className="border-b border-ice/10 pb-3">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? "page" : undefined}
                      className="group flex min-h-[48px] items-baseline justify-between py-1"
                    >
                      <span
                        className={`font-serif text-4xl tracking-tight transition-colors ${
                          isActive
                            ? "italic text-ice"
                            : "text-glacial/85 group-hover:text-glacial"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="font-sans text-xs uppercase tracking-[0.22em] text-silver">
                        0{idx + 1}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-ice/15 pt-5">
            <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-ice">
              INDEPENDENT DIGITAL CREATOR
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-ice/20 bg-cobalt/40 px-4 py-1.5 font-sans text-xs uppercase tracking-[0.14em] text-glacial"
                >
                  <span>{social.handle}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ice" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
