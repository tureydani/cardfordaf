"use client";

import Flower from "./Flower";

type FlowerGardenProps = {
  /** Render the smaller companion flowers around the hero flower. */
  showCompanions?: boolean;
  /** Skip the growth animation and render everything already in bloom. */
  instant?: boolean;
  className?: string;
};

/**
 * The hero flower grows first; a few smaller ones bloom around it right after,
 * forming a small garden. Everything is SVG, so it keeps growing identically
 * every time the scene remounts.
 */
export default function FlowerGarden({
  showCompanions = true,
  instant = false,
  className = "",
}: FlowerGardenProps) {
  return (
    <div
      className={`flex items-end justify-center gap-1 ${className}`}
      aria-hidden="true"
    >
      {showCompanions && (
        <Flower scale={0.55} startDelay={2.1} instant={instant} className="-mb-1 translate-y-2" />
      )}
      <Flower scale={0.78} startDelay={1.85} instant={instant} className="-mb-1" />
      <Flower scale={1} startDelay={0} instant={instant} />
      <Flower scale={0.78} startDelay={2.0} instant={instant} className="-mb-1" />
      {showCompanions && (
        <Flower scale={0.5} startDelay={2.25} instant={instant} className="-mb-1 translate-y-3" />
      )}
    </div>
  );
}
