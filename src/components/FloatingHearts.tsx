import type { CSSProperties } from "react";

interface HeartParticle {
  id: number;
  left: string;
  top: string;
  size: number;
  blur: number;
  opStart: number;
  opMid: number;
  dur: number;
  delay: number;
  driftX: number;
  driftY: number;
  rot: number;
  color: string;
}

const HEARTS: HeartParticle[] = [
  { id: 1, left: "14%", top: "10%", size: 32, blur: 2.5, opStart: 0.22, opMid: 0.36, dur: 9.5, delay: 0, driftX: 10, driftY: -22, rot: -8, color: "#ffb9c5" },
  { id: 2, left: "80%", top: "14%", size: 22, blur: 2, opStart: 0.18, opMid: 0.3, dur: 11, delay: -2.2, driftX: -12, driftY: -18, rot: 10, color: "#ffc4cf" },
  { id: 3, left: "86%", top: "36%", size: 42, blur: 3.5, opStart: 0.2, opMid: 0.34, dur: 12.5, delay: -4.1, driftX: -10, driftY: -28, rot: 6, color: "#ffbcc8" },
  { id: 4, left: "54%", top: "48%", size: 20, blur: 2, opStart: 0.16, opMid: 0.28, dur: 10, delay: -1.4, driftX: 8, driftY: -20, rot: -5, color: "#ffc7d1" },
  { id: 5, left: "10%", top: "64%", size: 34, blur: 3, opStart: 0.18, opMid: 0.32, dur: 11.5, delay: -5.3, driftX: 14, driftY: -24, rot: -12, color: "#ffb7c4" },
  { id: 6, left: "88%", top: "82%", size: 44, blur: 3.5, opStart: 0.24, opMid: 0.38, dur: 10.8, delay: -3.0, driftX: -14, driftY: -26, rot: 9, color: "#ffbac6" },
  { id: 7, left: "18%", top: "86%", size: 24, blur: 2.2, opStart: 0.16, opMid: 0.3, dur: 9.2, delay: -6.2, driftX: 11, driftY: -18, rot: 4, color: "#ffc8d2" },
  { id: 8, left: "44%", top: "24%", size: 26, blur: 3, opStart: 0.14, opMid: 0.26, dur: 13, delay: -2.8, driftX: -9, driftY: -24, rot: -7, color: "#ffc2ce" },
  { id: 9, left: "72%", top: "66%", size: 28, blur: 2.8, opStart: 0.17, opMid: 0.3, dur: 10.4, delay: -4.7, driftX: 9, driftY: -22, rot: 11, color: "#ffbeca" },
];

export function FloatingHearts() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {HEARTS.map((h) => {
        const style = {
          left: h.left,
          top: h.top,
          width: `${h.size}px`,
          height: `${h.size}px`,
          filter: `blur(${h.blur}px)`,
          "--heart-op-start": h.opStart,
          "--heart-op-mid": h.opMid,
          "--heart-dur": `${h.dur}s`,
          "--heart-delay": `${h.delay}s`,
          "--heart-drift-x": `${h.driftX}px`,
          "--heart-drift-y": `${h.driftY}px`,
          "--heart-rot": `${h.rot}deg`,
        } as CSSProperties;

        return (
          <svg
            key={h.id}
            viewBox="0 0 32 30"
            fill={h.color}
            style={style}
            className="floating-heart absolute"
          >
            <path d="M16 28.4C15.4 28.4 14.8 28.2 14.3 27.8C10.9 25 2 17.5 2 9.8C2 4.8 5.9 1 10.7 1C13.1 1 15.1 2.2 16 3.9C16.9 2.2 18.9 1 21.3 1C26.1 1 30 4.8 30 9.8C30 17.5 21.1 25 17.7 27.8C17.2 28.2 16.6 28.4 16 28.4Z" />
          </svg>
        );
      })}
    </div>
  );
}
