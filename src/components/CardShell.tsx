import { ReactNode } from "react";

/**
 * The physical "card" every scene is rendered inside — consistent size,
 * paper texture and shadow across the whole experience.
 */
export default function CardShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[min(680px,92dvh)] w-[88%] max-w-[380px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-black/5 paper-surface px-6 py-8 shadow-[0_20px_60px_-15px_rgba(74,65,54,0.25)]">
      {children}
    </div>
  );
}
