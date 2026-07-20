"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  value: string;
};

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
      title={copied ? "Copied!" : "Copy code"}
      className="group hover:bg-primary/10 relative overflow-hidden rounded-lg transition-all duration-200 active:scale-95"
    >
      {/* Copy Icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
          copied
            ? "scale-75 rotate-12 opacity-0"
            : "scale-100 opacity-100 group-hover:scale-110"
        }`}
      >
        <Copy className="size-4" />
      </span>

      {/* Check Icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
          copied ? "scale-100 opacity-100" : "scale-75 -rotate-12 opacity-0"
        }`}
      >
        <Check className="size-4 text-emerald-500" />
      </span>
    </Button>
  );
}
