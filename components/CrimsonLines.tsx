"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CrimsonLines() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const line1 = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  const line2 = useTransform(scrollYProgress, [0.15, 0.45], ["0%", "100%"]);
  const line3 = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);
  const line4 = useTransform(scrollYProgress, [0.25, 0.55], ["0%", "100%"]);
  const line5 = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative py-8 md:py-12">
      <div className="flex flex-col gap-2 md:gap-3">
        <motion.div className="h-[4px] md:h-[6px] bg-[#e63946] origin-left" style={{ width: line1 }} />
        <motion.div className="h-[4px] md:h-[6px] bg-[#e63946] origin-left" style={{ width: line2 }} />
        <motion.div className="h-[4px] md:h-[6px] bg-[#e63946] origin-left" style={{ width: line3 }} />
        <motion.div className="h-[4px] md:h-[6px] bg-[#e63946] origin-left" style={{ width: line4 }} />
        <motion.div className="h-[4px] md:h-[6px] bg-[#e63946] origin-left" style={{ width: line5 }} />
      </div>
    </div>
  );
}
