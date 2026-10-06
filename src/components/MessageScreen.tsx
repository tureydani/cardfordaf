"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { messages } from "@/content/messages";
import FlowerGarden from "./FlowerGarden";

export default function MessageScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2 text-center">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-xl leading-snug text-ink"
        >
          {messages.reveal.line1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="font-serif text-base leading-snug text-ink"
        >
          {messages.reveal.line2}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="font-serif text-base leading-snug text-ink"
        >
          {messages.reveal.line3}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-2 text-xs italic text-ink-soft/70"
        >
          {messages.reveal.hint}
        </motion.p>
      </div>

      <div className="h-[150px] w-full shrink-0 opacity-90">
        <FlowerGarden instant />
      </div>
    </motion.div>
  );
}
