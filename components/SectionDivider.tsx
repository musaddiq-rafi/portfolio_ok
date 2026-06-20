"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const gap = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 6, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0.3, 1, 1, 0.3]);

  return (
    <div ref={ref} className="relative py-4 md:py-6 px-8 md:px-14 lg:px-18">
      <motion.div
        className="flex flex-col items-center"
        style={{ gap, opacity }}
      >
        <div className="w-full h-px bg-[#e63946]/40" />
        <div className="w-full h-px bg-[#e63946]" />
        <div className="w-full h-px bg-[#e63946]/40" />
      </motion.div>
    </div>
  );
}
