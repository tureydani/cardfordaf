"use client";

import { motion } from "framer-motion";
import { messages } from "@/content/messages";

export default function CoverScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-[1.6rem] leading-snug text-ink"
      >
        {messages.cover.title}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-sm text-ink-soft"
      >
        {messages.cover.subtitle}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-xs italic text-ink-soft/70"
      >
        {messages.cover.hint}
      </motion.p>

      <motion.button
        type="button"
        onClick={onOpen}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 rounded-full bg-sunflower px-8 py-3 text-sm font-medium tracking-wide text-ink shadow-[0_8px_20px_-6px_rgba(224,165,38,0.6)] active:shadow-none"
      >
        {messages.cover.button}
      </motion.button>
    </motion.div>
  );
}
