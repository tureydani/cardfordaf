"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { messages } from "@/content/messages";

export default function MedicalNote({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="flex h-full w-full flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 14, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full rounded-xl border border-leaf/30 bg-white/70 px-6 py-6 shadow-[0_10px_30px_-10px_rgba(74,65,54,0.2)]"
      >
        <p className="font-serif text-base tracking-wide text-leaf-deep">
          {messages.medical.title}
        </p>
        <p className="mt-0.5 text-xs italic text-ink-soft/70">{messages.medical.hint}</p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-ink-soft">
          {messages.medical.patient}
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          {messages.medical.items.map((item, i) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.22 }}
              className="text-sm text-ink"
            >
              {item}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-5 border-t border-leaf/20 pt-3"
        >
          <p className="text-xs font-medium tracking-wide text-ink-soft">
            {messages.medical.posologyTitle}
          </p>
          <p className="mt-1 text-sm text-ink">{messages.medical.posologyText}</p>
          <p className="mt-1.5 text-xs italic text-ink-soft/70">{messages.medical.posologyHint}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
