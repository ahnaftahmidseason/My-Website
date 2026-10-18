"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Send, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function ContactComposer() {
  const { contact } = siteConfig;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [inquiryType, setInquiryType] = useState(
    contact.inquiryTypes[0] || "AI Tool Sponsorship (@Ai_Spoiler)"
  );
  const [messageBody, setMessageBody] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [sentFeedback, setSentFeedback] = useState<string | null>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback if clipboard blocked
    }
  };

  const buildMailPayload = () => {
    const subject = `SEASON® Inquiry — ${inquiryType}${senderName.trim() ? ` (${senderName.trim()})` : ""}`;
    const body = [
      `Name: ${senderName.trim() || "Not provided"}`,
      `Email: ${senderEmail.trim() || "Not provided"}`,
      `Topic: ${inquiryType}`,
      "",
      "Message:",
      messageBody.trim(),
    ].join("\n");
    return { subject, body };
  };

  const handleSendViaGmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageBody.trim()) {
      setValidationError("Please write your message in the box above before sending.");
      return;
    }
    setValidationError(null);
    const { subject, body } = buildMailPayload();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      contact.email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    setSentFeedback("Gmail compose opened with your message ready to send.");
    window.setTimeout(() => setSentFeedback(null), 5000);
  };

  const handleSendViaMailApp = () => {
    if (!messageBody.trim()) {
      setValidationError("Please write your message in the box above before sending.");
      return;
    }
    setValidationError(null);
    const { subject, body } = buildMailPayload();
    window.location.href = `mailto:${encodeURIComponent(
      contact.email
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentFeedback("Opening your default email app...");
    window.setTimeout(() => setSentFeedback(null), 4000);
  };

  const darkInputStyle: React.CSSProperties = {
    backgroundColor: "#040814",
    color: "#FFFFFF",
    caretColor: "#60A5FA",
  };

  return (
    <div className="space-y-6">
      {/* Direct Email Card */}
      <div
        className="relative overflow-hidden rounded-card border border-white/12 p-6 sm:p-7"
        style={{
          background:
            "linear-gradient(145deg, rgba(11, 25, 56, 0.55) 0%, rgba(5, 10, 24, 0.95) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-electric/15 blur-3xl"
        />

        <div className="relative z-10 flex flex-col justify-between gap-5">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_10px_#3B82F6]" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ice">
                DIRECT EMAIL // OFFICIAL INBOX
              </p>
            </div>

            <a
              href={`mailto:${contact.email}`}
              className="mt-2.5 block break-all font-sans text-lg font-bold tracking-[-0.02em] text-glacial transition-colors hover:text-ice sm:break-normal sm:text-xl md:text-2xl"
            >
              {contact.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                contact.email
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full bg-glacial px-5 py-2 font-sans text-xs font-semibold text-midnight transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Open in Gmail</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/15 bg-midnight/80 px-4 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-electric/60 hover:text-ice"
            >
              <span>Mail App</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/15 bg-midnight/80 px-4 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-3.5 w-3.5 text-ice" aria-hidden="true" />
                  <span className="text-ice">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-silver" aria-hidden="true" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Dark Message Composer */}
      <form
        onSubmit={handleSendViaGmail}
        noValidate
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setSpotlight({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
          });
        }}
        onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
        className="relative overflow-hidden rounded-card border border-white/12 p-6 sm:p-8"
        style={{
          backgroundColor: "#060B19",
        }}
      >
        {spotlight.active && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(520px circle at ${spotlight.x}px ${spotlight.y}px, rgba(37, 99, 235, 0.12), transparent 70%)`,
            }}
          />
        )}

        <div className="relative z-10">
          <div className="mb-6 flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-ice" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-glacial">
                WRITE A MESSAGE
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-silver">
              DIRECT TO SEASON®
            </span>
          </div>

          {/* Topic Selector Pills */}
          <div>
            <label className="block font-mono text-[11px] uppercase tracking-[0.16em] text-silver">
              01 / SELECT TOPIC
            </label>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {contact.inquiryTypes.map((type) => {
                const isSelected = inquiryType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInquiryType(type)}
                    style={{
                      backgroundColor: isSelected ? "rgba(37, 99, 235, 0.22)" : "#040814",
                      borderColor: isSelected
                        ? "rgba(96, 165, 250, 0.7)"
                        : "rgba(255, 255, 255, 0.12)",
                      color: isSelected ? "#FFFFFF" : "#8E96AA",
                    }}
                    className="rounded-full border px-3.5 py-2 font-sans text-xs font-medium transition-all hover:border-white/35 hover:text-glacial"
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email Inputs */}
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="inquiry-name"
                className="block font-mono text-[11px] uppercase tracking-[0.16em] text-silver"
              >
                02 / YOUR NAME
              </label>
              <input
                id="inquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Enter your name"
                style={darkInputStyle}
                className="mt-2 w-full rounded-card border border-white/15 px-4 py-3 font-sans text-sm font-medium text-glacial placeholder:text-silver/50 transition-all focus:border-electric focus:shadow-[0_0_20px_rgba(37,99,235,0.25)] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-email"
                className="block font-mono text-[11px] uppercase tracking-[0.16em] text-silver"
              >
                03 / YOUR EMAIL
              </label>
              <input
                id="inquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="you@example.com"
                style={darkInputStyle}
                className="mt-2 w-full rounded-card border border-white/15 px-4 py-3 font-sans text-sm font-medium text-glacial placeholder:text-silver/50 transition-all focus:border-electric focus:shadow-[0_0_20px_rgba(37,99,235,0.25)] focus:outline-none"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <label
                htmlFor="inquiry-message"
                className="block font-mono text-[11px] uppercase tracking-[0.16em] text-silver"
              >
                04 / PROJECT OR SPONSORSHIP DETAILS
              </label>
              <span className="font-mono text-[10px] text-silver/70">
                {messageBody.length > 0 ? `${messageBody.length} chars` : "Required"}
              </span>
            </div>
            <textarea
              id="inquiry-message"
              name="message"
              rows={5}
              required
              value={messageBody}
              onChange={(e) => {
                setMessageBody(e.target.value);
                if (validationError) setValidationError(null);
              }}
              placeholder="Write your message, collaboration idea, or sponsorship inquiry here..."
              style={darkInputStyle}
              className="mt-2 w-full resize-y rounded-card border border-white/15 px-4 py-3.5 font-sans text-sm font-medium leading-relaxed text-glacial placeholder:text-silver/50 transition-all focus:border-electric focus:shadow-[0_0_24px_rgba(37,99,235,0.25)] focus:outline-none"
            />
          </div>

          {validationError && (
            <p
              role="alert"
              className="mt-3 rounded-editorial border border-electric/40 bg-electric/10 px-3.5 py-2 font-sans text-xs font-medium text-ice"
            >
              {validationError}
            </p>
          )}

          {sentFeedback && (
            <p
              role="status"
              className="mt-3 rounded-editorial border border-ice/40 bg-electric/15 px-3.5 py-2 font-sans text-xs font-medium text-glacial"
            >
              {sentFeedback}
            </p>
          )}

          {/* Submit Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-glacial px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-midnight transition-transform hover:scale-[1.02]"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Send via Gmail</span>
            </button>

            <button
              type="button"
              onClick={handleSendViaMailApp}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 bg-midnight px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-glacial transition-colors hover:border-electric/60 hover:text-ice"
            >
              <span>Send via Mail App</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
