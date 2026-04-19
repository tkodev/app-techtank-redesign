"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

interface ContactCardProps {
  context?: string;
}

export function ContactCard({
  context = "For hosting, sponsorship, speaking, and community inquiries.",
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);
  const email = "techtankto@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl border border-border bg-white p-6 lg:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
          <Mail className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-muted mb-2">{context}</p>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="font-display text-lg font-semibold text-foreground hover:text-teal transition-colors"
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-background hover:bg-teal/10 text-muted hover:text-teal transition-colors"
              aria-label={copied ? "Copied" : "Copy email"}
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
