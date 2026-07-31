"use client";

import { Bot, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function ChatButton({ isOpen, onClick }: Readonly<ChatButtonProps>) {
  return (
    <Button
      type="button"
      size="icon"
      onClick={onClick}
      aria-label={
        isOpen ? "Close portfolio assistant" : "Open portfolio assistant"
      }
      aria-expanded={isOpen}
      aria-controls="portfolio-chatbot"
      className={cn(
        "size-12 rounded-full shadow-lg transition-all duration-300",
        "hover:scale-105 active:scale-95",
        isOpen && "rotate-90"
      )}
    >
      {isOpen ? <X className="size-5" /> : <Bot className="size-5" />}
    </Button>
  );
}
