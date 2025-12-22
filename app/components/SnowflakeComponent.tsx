"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Expanded SVG snowflake shapes
const snowflakeShapes = [
  (color: string) => (
    <svg viewBox="0 0 64 64" fill={color} className="w-full h-full">
      <path
        d="M32 2v60M2 32h60M12 12l40 40M52 12L12 52"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 64 64" fill={color} className="w-full h-full">
      <circle cx="32" cy="32" r="4" fill={color} />
      <path
        d="M32 2v60M2 32h60M10 10l44 44M54 10L10 54"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 64 64" fill={color} className="w-full h-full">
      <path
        d="M32 2l6 12-6 12-6-12 6-12zm0 36l6 12-6 12-6-12 6-12zM62 32l-12 6-12-6 12-6 12 6zM14 32l-12 6 12 6 12-6-12-6z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 64 64" fill={color} className="w-full h-full">
      <path
        d="M32 2v60M2 32h60M16 16l32 32M48 16L16 48M8 24l48 16M24 8l16 48"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  ),
  (color: string) => (
    <svg viewBox="0 0 64 64" fill={color} className="w-full h-full">
      <path
        d="M32 2v60M2 32h60M12 20l40 24M20 12l24 40"
        stroke={color}
        strokeWidth="2"
      />
      <circle cx="32" cy="32" r="3" fill={color} />
    </svg>
  ),
];

// Tailwind color palette for icy variation
const colors = ["#ffffff", "#bbdefb", "#e0f7fa", "#cfd8dc"];

type Snowflake = {
  id: number;
  size: number;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
  zIndex: number;
  shapeIndex: number;
  color: string;
  glow: string;
  twinkle: boolean;
};

function generateFlakes(count: number, offset: number = 0): Snowflake[] {
  return Array.from({ length: count }).map((_, i) => {
    const glowIntensity = Math.floor(Math.random() * 8) + 4; // 4–12px blur radius
    const glowOpacity = (Math.random() * 0.5 + 0.3).toFixed(2); // 0.3–0.8 opacity
    return {
      id: i + offset,
      size: Math.floor(Math.random() * 12) + 12, // 12px–24px
      left: `${Math.random() * 100}vw`,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5,
      zIndex: Math.random() > 0.5 ? 10 : 20,
      shapeIndex: Math.floor(Math.random() * snowflakeShapes.length),
      color: colors[Math.floor(Math.random() * colors.length)],
      glow: `drop-shadow(0 0 ${glowIntensity}px rgba(255,255,255,${glowOpacity}))`,
      twinkle: Math.random() > 0.5, // 50% chance to twinkle
    };
  });
}

export default function SnowflakesComponent() {
  const [flakes, setFlakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const set1 = generateFlakes(15, 0);
    const set2 = generateFlakes(15, 100);
    const set3 = generateFlakes(15, 200);
    setFlakes([...set1, ...set2, ...set3]);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute top-0"
          style={{
            left: flake.left,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            zIndex: flake.zIndex,
            filter: flake.glow,
          }}
          initial={{ y: -50, rotate: 0, opacity: flake.opacity }}
          animate={{
            y: "100vh",
            rotate: [0, 360],
            x: [0, -10, 10, -5, 5, 0],
            opacity: flake.twinkle
              ? [flake.opacity, 0.2, flake.opacity] // twinkle pulse
              : flake.opacity,
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
            rotate: {
              duration: flake.duration / 2,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: flake.twinkle
              ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined,
          }}
        >
          {snowflakeShapes[flake.shapeIndex](flake.color)}
        </motion.div>
      ))}
    </div>
  );
}
