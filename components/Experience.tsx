"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="relative px-6 md:px-10 lg:px-14 py-32 scroll-mt-20 diagonal-divider"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <span className="w-6 h-px bg-[var(--accent)]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--accent)]">
            Experience
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-20"
        >
          <span className="text-[var(--text)]">Professional</span>
          <br />
          <span className="text-[var(--text-muted)]">Journey</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="border border-[var(--border)] p-8 md:p-12 hover:border-[var(--accent)]/20 transition-colors duration-500 group"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[var(--accent)]/60 mb-3 block">
                Oct 2025 – Mar 2026
              </span>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-500">
                Junior Full-Stack Engineer
              </h3>

              <p className="text-base text-[var(--accent)]/60 mb-6 font-medium">
                Tyger Media
              </p>

              <ul className="flex flex-col gap-3">
                <li className="text-sm text-[var(--text-muted)] flex items-start gap-3 font-light leading-relaxed">
                  <span className="mt-2.5 w-1 h-px bg-[var(--border)] flex-shrink-0" />
                  Contributed to 5+ internal products used by over 50 employees
                  at the largest byte-sized media platform in Bangladesh.
                </li>
                <li className="text-sm text-[var(--text-muted)] flex items-start gap-3 font-light leading-relaxed">
                  <span className="mt-2.5 w-1 h-px bg-[var(--border)] flex-shrink-0" />
                  Designed and developed an internal monitoring tool and an
                  AI-assisted research system for the editorial team.
                </li>
                <li className="text-sm text-[var(--text-muted)] flex items-start gap-3 font-light leading-relaxed">
                  <span className="mt-2.5 w-1 h-px bg-[var(--border)] flex-shrink-0" />
                  Elevated from Software Engineer Intern to Junior Full-Time on
                  the basis of performance.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
