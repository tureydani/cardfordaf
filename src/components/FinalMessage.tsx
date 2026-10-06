"use client";

import { motion } from "framer-motion";
import { messages } from "@/content/messages";
import FlowerGarden from "./FlowerGarden";

export default function FinalMessage({ onReplay }: { onReplay: () => void }) {
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
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-xl text-ink"
        >
          {messages.final.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-xs italic text-ink-soft/70"
        >
          {messages.final.titleHint}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-3 max-w-[260px] text-sm text-ink"
        >
          {messages.final.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-4 max-w-[260px] font-serif text-base text-ink"
        >
          {messages.final.ps}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.75 }}
          className="text-xs italic text-ink-soft/70"
        >
          {messages.final.psHint}
        </motion.p>

        <motion.button
          type="button"
          onClick={onReplay}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 rounded-full border border-sunflower-deep/50 px-6 py-2.5 text-sm font-medium text-ink-soft"
        >
          {messages.final.replay}
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-[140px] w-full shrink-0"
      >
        <FlowerGarden instant />
      </motion.div>
    </motion.div>
  );
}
