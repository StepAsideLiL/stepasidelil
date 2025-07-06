"use client";

import Icons from "@workspace/design-system/icons";
import { cn } from "@workspace/design-system/lib/utils";
import { useState } from "react";

export default function CopyEmail({
  className,
  email,
}: {
  className?: string;
  email: string;
}) {
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
      <span>
        {!copied ? (
          <Icons.Lucide.Copy size={16} />
        ) : (
          <Icons.Lucide.Check size={16} />
        )}
      </span>
    </div>
  );
}
