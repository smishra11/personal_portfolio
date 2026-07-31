"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { ChatButton } from "@/components/chatbot/ChatButton";
import { ChatWindow } from "@/components/chatbot/ChatWindow";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { useChat } from "@/hooks/useChat";
import { trackChatEvent } from "@/lib/chatAnalytics";

export function Chatbot() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const {
    messages,
    isLoading,
    error,
    sendMessage,
    stopGeneration,
    clearMessages,
  } = useChat();

  function handleOpen() {
    if (!isOpen) {
      trackChatEvent({
        event: "chat_opened",
        pathname,
      });
    }

    setIsOpen(true);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        id="portfolio-chatbot"
        showCloseButton={false}
        initialFocus={() => inputRef.current}
        className="inset-x-0 top-auto bottom-0 h-[85dvh] w-full max-w-none translate-x-0 translate-y-0 gap-0 overflow-hidden rounded-t-2xl rounded-b-none border border-b-0 p-0 sm:inset-x-auto sm:top-auto sm:right-6 sm:bottom-20 sm:h-[min(680px,calc(100dvh-7rem))] sm:w-97.5 sm:max-w-[calc(100vw-3rem)] sm:translate-x-0 sm:translate-y-0 sm:rounded-2xl sm:border"
      >
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          error={error}
          inputRef={inputRef}
          onSend={sendMessage}
          onStop={stopGeneration}
          onClear={clearMessages}
        />
      </DialogContent>

      <div className="fixed right-4 bottom-4 z-30 sm:right-6 sm:bottom-6">
        <ChatButton isOpen={false} onClick={handleOpen} />
      </div>
    </Dialog>
  );
}
