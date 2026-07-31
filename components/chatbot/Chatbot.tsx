"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close portfolio assistant"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] sm:hidden"
          />
        )}
      </AnimatePresence>

      <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="portfolio-chatbot"
              initial={{
                opacity: 0,
                y: 16,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="origin-bottom-right"
            >
              <ChatWindow
                messages={messages}
                isLoading={isLoading}
                error={error}
                onSend={sendMessage}
                onStop={stopGeneration}
                onClear={clearMessages}
                onClose={handleClose}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <ChatButton isOpen={isOpen} onClick={handleToggle} />
      </div>
    </>
  );
}
