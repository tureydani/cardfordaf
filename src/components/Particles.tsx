const PARTICLES = [
  { left: "18%", delay: "0s", size: 4 },
  { left: "32%", delay: "1.4s", size: 3 },
  { left: "55%", delay: "0.6s", size: 5 },
  { left: "70%", delay: "2.1s", size: 3 },
  { left: "84%", delay: "1s", size: 4 },
];

/** A handful of slow, faint floating dots — a hint of life, nothing distracting. */
export default function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle absolute rounded-full"
          style={{
            left: p.left,
            bottom: "12%",
            width: p.size,
            height: p.size,
            backgroundColor: "var(--sunflower)",
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
