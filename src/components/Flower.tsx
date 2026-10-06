"use client";

import { motion } from "framer-motion";

type FlowerProps = {
  /** Seconds to wait before this flower starts growing. */
  startDelay?: number;
  /** Overall scale of the flower (1 = the hero size). */
  scale?: number;
  className?: string;
  /** Render already in full bloom, skipping the growth animation. */
  instant?: boolean;
};

const PETAL_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

/**
 * A single flower that grows from a seed: stem rises, leaves unfold,
 * then the head opens petal by petal. Pure SVG + framer-motion, no assets.
 */
export default function Flower({
  startDelay = 0,
  scale = 1,
  className = "",
  instant = false,
}: FlowerProps) {
  const t = startDelay;

  // When `instant`, every element's "initial" is just its final state,
  // so it renders fully bloomed with no animation playing.
  const grow = <T extends Record<string, unknown>>(from: T, to: T) => ({
    initial: instant ? to : from,
    animate: to,
  });

  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      style={{ width: `${110 * scale}px`, height: `${165 * scale}px` }}
      aria-hidden="true"
    >
      {/* seed */}
      <motion.ellipse
        cx={50}
        cy={142}
        rx={4.5}
        ry={3.2}
        fill="var(--leaf-deep)"
        {...grow({ opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })}
        transition={{ duration: 0.4, delay: t, ease: "easeOut" }}
        style={{ transformOrigin: "50px 142px" }}
      />

      {/* stem */}
      <motion.path
        d="M50 141 C 49 120, 51 95, 50 62"
        stroke="var(--leaf-deep)"
        strokeWidth={2.6}
        strokeLinecap="round"
        fill="none"
        {...grow({ pathLength: 0, opacity: 0 }, { pathLength: 1, opacity: 1 })}
        transition={{ duration: 0.9, delay: t + 0.3, ease: "easeInOut" }}
      />

      {/* leaves */}
      <motion.path
        d="M49 112 C 34 108, 26 118, 24 128 C 38 128, 47 122, 49 112 Z"
        fill="var(--leaf)"
        {...grow({ opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })}
        transition={{ duration: 0.45, delay: t + 0.85, ease: "backOut" }}
        style={{ transformOrigin: "49px 118px" }}
      />
      <motion.path
        d="M51 95 C 66 90, 75 99, 77 109 C 63 110, 54 105, 51 95 Z"
        fill="var(--leaf)"
        {...grow({ opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })}
        transition={{ duration: 0.45, delay: t + 0.98, ease: "backOut" }}
        style={{ transformOrigin: "51px 101px" }}
      />

      {/* flower head */}
      <g>
        {PETAL_ANGLES.map((angle, i) => (
          <motion.g
            key={angle}
            transform={`rotate(${angle} 50 62)`}
            {...grow({ opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })}
            transition={{
              duration: 0.4,
              delay: t + 1.35 + i * 0.045,
              ease: "backOut",
            }}
            style={{ transformOrigin: "50px 62px" }}
          >
            <ellipse
              cx={50}
              cy={46}
              rx={8.5}
              ry={15}
              fill="var(--sunflower)"
              stroke="var(--sunflower-deep)"
              strokeWidth={0.6}
            />
          </motion.g>
        ))}

        <motion.circle
          cx={50}
          cy={62}
          r={9.5}
          fill="var(--sunflower-deep)"
          {...grow({ opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })}
          transition={{ duration: 0.35, delay: t + 1.25, ease: "backOut" }}
          style={{ transformOrigin: "50px 62px" }}
        />
      </g>
    </svg>
  );
}
