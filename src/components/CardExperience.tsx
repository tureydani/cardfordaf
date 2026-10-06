"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import CardShell from "./CardShell";
import CoverScreen from "./CoverScreen";
import FlowerAnimation from "./FlowerAnimation";
import MessageScreen from "./MessageScreen";
import MedicalNote from "./MedicalNote";
import FinalMessage from "./FinalMessage";

type Scene = "cover" | "surprise" | "message" | "medical" | "final";

/**
 * Drives the five scenes in order. Each scene calls back when it's done
 * (either on its own timer, or via a tap), and `replay` resets to the start.
 */
export default function CardExperience() {
  const [scene, setScene] = useState<Scene>("cover");
  const [runId, setRunId] = useState(0);

  const goTo = useCallback((next: Scene) => setScene(next), []);

  const replay = useCallback(() => {
    setRunId((id) => id + 1);
    setScene("cover");
  }, []);

  return (
    <main className="app-shell paper-surface flex w-full items-center justify-center">
      <CardShell>
        <AnimatePresence mode="wait">
          {scene === "cover" && (
            <CoverScreen key={`cover-${runId}`} onOpen={() => goTo("surprise")} />
          )}
          {scene === "surprise" && (
            <FlowerAnimation
              key={`surprise-${runId}`}
              onDone={() => goTo("message")}
            />
          )}
          {scene === "message" && (
            <MessageScreen key={`message-${runId}`} onDone={() => goTo("medical")} />
          )}
          {scene === "medical" && (
            <MedicalNote key={`medical-${runId}`} onDone={() => goTo("final")} />
          )}
          {scene === "final" && (
            <FinalMessage key={`final-${runId}`} onReplay={replay} />
          )}
        </AnimatePresence>
      </CardShell>
    </main>
  );
}
