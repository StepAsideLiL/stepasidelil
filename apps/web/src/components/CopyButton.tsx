"use client";

import Icons from "@workspace/design-system/icons";
import { Button } from "@workspace/design-system/ui/button";
import { useState } from "react";

export default function CopyButton({ copyText }: { copyText: string }) {
  const [copied, setCopied] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopyMessage("Copied!");
      setCopied(true);
      setTimeout(() => {
        setCopyMessage("");
        setCopied(false);
      }, 1500);
    } catch (error) {
      setCopyMessage("Failed to copy!");
      setTimeout(() => {
        setCopyMessage("");
      }, 1500);
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {copyMessage && (
        <span className="text-muted-foreground select-none">{copyMessage}</span>
      )}

      <Button
        variant={"ghost"}
        size={"icon"}
        className="size-5 cursor-pointer rounded-none"
        onClick={() => copyToClipboard()}
      >
        <span className="sr-only">Copy to clipboard</span>
        {copied ? <Icons.Lucide.Check /> : <Icons.Lucide.Copy />}
      </Button>
    </div>
  );
}
