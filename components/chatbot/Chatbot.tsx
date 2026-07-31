"use client";

import { useEffect, useState } from "react";

import { ChatButton } from "@/components/chatbot/ChatButton";
import { ChatWindow } from "@/components/chatbot/ChatWindow";

import { useChat } from "@/hooks/useChat";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    messages,
    isLoading,
    error,
    sendMessage,
    stopGeneration,
    clearMessages,
  } = useChat();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {isOpen && (
        <div id="portfolio-chatbot">
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            error={error}
            onSend={sendMessage}
            onStop={stopGeneration}
            onClear={clearMessages}
            onClose={handleClose}
          />
        </div>
      )}

      <ChatButton isOpen={isOpen} onClick={handleToggle} />
    </div>
  );
}
