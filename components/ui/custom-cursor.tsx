"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);

      // Add to trail
      setTrail((prev) => {
        const newTrail = [
          ...prev,
          { x: e.clientX, y: e.clientY, timestamp: Date.now() },
        ];
        // Keep only last 8 points for a short tail
        return newTrail.slice(-8);
      });

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup old trail points
    const interval = setInterval(() => {
      setTrail((prev) => {
        const now = Date.now();
        return prev.filter((point) => now - point.timestamp < 150);
      });
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Tail particles */}
      {trail.map((point, index) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 150);
        const scale = 0.3 + (index / trail.length) * 0.7;
        const colors = [
          "rgba(168, 85, 247, ", // purple
          "rgba(236, 72, 153, ", // pink
          "rgba(59, 130, 246, ", // blue
        ];
        const colorIndex = index % colors.length;

        return (
          <motion.div
            key={`${point.timestamp}-${index}`}
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] blur-[2px]"
            style={{
              width: 8 * scale,
              height: 8 * scale,
              background: `radial-gradient(circle, ${colors[colorIndex]}${opacity}), ${colors[(colorIndex + 1) % colors.length]}${opacity * 0.5}))`,
              boxShadow: `0 0 ${10 * scale}px ${colors[colorIndex]}${opacity * 0.8})`,
            }}
            initial={{
              x: point.x - (4 * scale),
              y: point.y - (4 * scale),
              opacity: opacity,
              scale: scale,
            }}
            animate={{
              opacity: 0,
              scale: scale * 0.5,
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          background: "linear-gradient(135deg, #a855f7, #ec4899, #3b82f6)",
          boxShadow: "0 0 15px rgba(168, 85, 247, 0.6), 0 0 30px rgba(236, 72, 153, 0.4)",
        }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer ring with glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-[9998]"
        style={{
          borderColor: "rgba(168, 85, 247, 0.5)",
          boxShadow: "0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 10px rgba(236, 72, 153, 0.2)",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.8 : 1,
          opacity: isPointer ? 0.6 : 0.8,
          rotate: isPointer ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      />

      {/* Futuristic pulse ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9996]"
        style={{
          border: "1px solid rgba(59, 130, 246, 0.3)",
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isPointer ? 1.2 : [1, 1.1, 1],
          opacity: isPointer ? 0.4 : [0.3, 0.5, 0.3],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          x: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
          y: {
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        }}
      />
    </>
  );
};
