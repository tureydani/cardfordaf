"use client";

import { motion } from "framer-motion";
import { useId, useState } from "react";

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

/** Roughly when the last petal finishes opening, used to time the idle sway. */
const GROWTH_SETTLE_TIME = 1.35 + PETAL_ANGLES.length * 0.045 + 0.4;

/**
 * A single flower that grows from a seed: stem rises, leaves unfold,
 * then the head opens petal by petal. Once settled it sways gently like
 * it's caught in a light breeze, and a tap makes it dance for a moment.
 * Pure SVG + framer-motion, no assets.
 */
export default function Flower({
  startDelay = 0,
  scale = 1,
  className = "",
  instant = false,
}: FlowerProps) {
  const t = startDelay;
  const uid = useId();
  const petalGradientId = `petal-${uid}`;
  const shadowBlurId = `shadow-${uid}`;

  const [mood, setMood] = useState<"idle" | "dance">("idle");

  // When `instant`, every element's "initial" is just its final state,
  // so it renders fully bloomed with no animation playing.
  const grow = <T extends Record<string, unknown>>(from: T, to: T) => ({
    initial: instant ? to : from,
    animate: to,
  });

  // Slightly different cadence per flower (derived from its own props, not
  // random) so a cluster doesn't sway perfectly in sync.
  const swayDuration = 3.6 + scale * 0.9;
  const swayAngle = 2.2;
  const swayDelay = instant ? 0.4 : t + GROWTH_SETTLE_TIME + 0.3;

  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      style={{ width: `${110 * scale}px`, height: `${165 * scale}px`, overflow: "visible" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={petalGradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbd97a" />
          <stop offset="55%" stopColor="var(--sunflower)" />
          <stop offset="100%" stopColor="var(--sunflower-deep)" />
        </linearGradient>
        <filter id={shadowBlurId} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* soft contact shadow */}
      <motion.ellipse
        cx={50}
        cy={143}
        rx={15}
        ry={4}
        fill="rgba(74, 65, 54, 0.16)"
        filter={`url(#${shadowBlurId})`}
        {...grow({ opacity: 0 }, { opacity: 1 })}
        transition={{ duration: 0.5, delay: t, ease: "easeOut" }}
      />

      <motion.g
        animate={mood}
        variants={{
          idle: {
            rotate: [0, swayAngle, 0, -swayAngle, 0],
            transition: {
              duration: swayDuration,
              delay: swayDelay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
          dance: {
            rotate: [0, 11, -9, 7, -5, 2, 0],
            transition: { duration: 0.7, ease: "easeInOut" },
          },
        }}
        onAnimationComplete={() => {
          if (mood === "dance") setMood("idle");
        }}
        onTap={() => setMood("dance")}
        whileTap={{ scale: 0.97 }}
        style={{ transformOrigin: "50px 141px", cursor: "pointer" }}
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
            // Static rotation lives on a plain <g> — nesting it under the
            // sway/dance motion.g means framer-motion owns the `transform`
            // on any motion element inside, so a literal transform="rotate(...)"
            // attribute on a motion.g would silently be ignored.
            <g key={angle} transform={`rotate(${angle} 50 62)`}>
              <motion.g
                {...grow({ opacity: 0, scale: 0 }, { opacity: 1, scale: 1 })}
                transition={{
                  duration: 0.4,
                  delay: t + 1.35 + i * 0.045,
                  ease: "backOut",
                }}
                style={{ transformOrigin: "50px 62px" }}
              >
                <path
                  d="M50 30 C 58 34, 60 48, 54 58 C 52 61, 48 61, 46 58 C 40 48, 42 34, 50 30 Z"
                  fill={`url(#${petalGradientId})`}
                  stroke="var(--sunflower-deep)"
                  strokeWidth={0.5}
                  strokeOpacity={0.4}
                />
              </motion.g>
            </g>
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
      </motion.g>
    </svg>
  );
}
