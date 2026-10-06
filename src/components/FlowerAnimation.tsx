"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { messages } from "@/content/messages";
import FlowerGarden from "./FlowerGarden";
import Particles from "./Particles";

type Step = 0 | 1 | 2 | 3;

/**
 * Pantalla 2 — intro lines build anticipation, then the copy swaps to
 * "Cultivando algo..." while a seed grows into a small garden below.
 * Advances itself; calls `onDone` once the garden has settled.
 */
export default function FlowerAnimation({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState<Step>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 150);
    const t2 = setTimeout(() => setStep(2), 1000);
    const t3 = setTimeout(() => setStep(3), 1750);
    const t4 = setTimeout(onDone, 1750 + 4200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="relative flex h-full w-full flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Particles />

      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2 text-center">
        <AnimatePresence mode="wait">
          {step < 3 ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              {step >= 1 && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-serif text-lg leading-snug text-ink"
                >
                  {messages.intro.line1}
                </motion.p>
              )}
              {step >= 2 && (
                <>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-serif text-lg leading-snug text-ink"
                  >
                    {messages.intro.line2}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="mt-1 text-xs italic text-ink-soft/70"
                  >
                    {messages.intro.hint}
                  </motion.p>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="growing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="font-serif text-lg text-ink">{messages.growing.label}</p>
              <p className="text-xs italic text-ink-soft/70">{messages.growing.hint}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-[170px] w-full shrink-0">{step >= 3 && <FlowerGarden />}</div>
    </motion.div>
  );
}
