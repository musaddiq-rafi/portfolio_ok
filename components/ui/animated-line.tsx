"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedLineProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedLine = ({ children, className = "" }: AnimatedLineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      <div className="pb-6">
        {children}
        <motion.div
          className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mt-4"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};
