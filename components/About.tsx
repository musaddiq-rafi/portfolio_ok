"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const lines = [
  [
    { text: "I believe every product is an", highlight: false },
    { text: "Art.", highlight: true },
  ],
  [
    { text: "And to make the", highlight: false },
    { text: "art", highlight: true },
    { text: "stand out, you need a good", highlight: false },
    { text: "artist.", highlight: true },
  ],
  [
    { text: "Get rid of", highlight: false },
    { text: "mediocrity", highlight: true },
    { text: "and embrace the", highlight: false },
    { text: "exception.", highlight: true },
  ],
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="about" className="relative h-[300vh] scroll-mt-20">
      <div className="sticky top-0 h-screen flex items-center px-6 md:px-10 lg:px-14">
        <div className="w-full max-w-5xl">
          <motion.p className="text-[5vw] md:text-[3.5vw] lg:text-[2.8vw] font-semibold leading-[1.3] tracking-tight">
            {lines.map((words, i) => (
              <ScrollLine
                key={i}
                words={words}
                progress={scrollYProgress}
                index={i}
                total={lines.length}
              />
            ))}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ScrollLine({
  words,
  progress,
  index,
  total,
}: {
  words: { text: string; highlight: boolean }[];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const mid = start + seg / 2;
  const end = start + seg;

  const rawOpacity = useTransform(
    progress,
    [start - 0.05, mid, end],
    [0.1, 1, 0.1]
  );
  const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 30 });

  return (
    <motion.span
      style={{ opacity, display: "inline" }}
      className="text-[var(--text)]"
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className={word.highlight ? "text-[var(--accent)]" : ""}
        >
          {word.text}{" "}
        </span>
      ))}
    </motion.span>
  );
}
