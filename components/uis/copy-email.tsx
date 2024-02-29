"use client";

import { cn } from "@/lib/utils";
import { email } from "@/components/portfolio-infos/infos";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div
      className={cn("flex cursor-pointer items-center gap-2", className)}
      onClick={() => copyToClipboard()}
    >
      <p>{email}</p>
      <span>{!copied ? <Copy size={16} /> : <Check size={16} />}</span>
    </div>
  );
}
