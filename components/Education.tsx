"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    id: 1,
    institution: "Islamic University of Technology (IUT)",
    degree: "BSc in Software Engineering",
    period: "2022 – 2027",
    details: [
      "CGPA: 3.96 / 4.00 — top of class through 5th semester",
      "Coursework: Software Engineering, AI/ML, Database Systems, Systems Programming",
    ],
  },
  {
    id: 2,
    institution: "Notre Dame College, Dhaka",
    degree: "Higher Secondary Certificate — Science",
    period: "2020 – 2022",
    details: [
      "GPA: 5.00 — A+ in every subject",
      "Ranked #106 among 2,500+ students",
      "Awarded Perfect Attendance",
    ],
  },
];

export function Education() {
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
      id="education"
      className="relative px-6 md:px-10 lg:px-14 py-32 scroll-mt-20 diagonal-divider--alt"
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
            Education
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-20"
        >
          <span className="text-[var(--text)]">Academic</span>
          <br />
          <span className="text-[var(--text-muted)]">Background</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />

          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative pl-14 pb-20 last:pb-0"
            >
              <div className="absolute left-0 top-[6px] -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[var(--bg)] border-[2px] border-[var(--accent)]" />

              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[var(--accent)]/60 mb-3 block">
                {edu.period}
              </span>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-2">
                {edu.institution}
              </h3>

              <p className="text-base text-[var(--text-muted)] mb-4 font-light">
                {edu.degree}
              </p>

              <ul className="flex flex-col gap-1.5">
                {edu.details.map((detail, di) => (
                  <li
                    key={di}
                    className="text-sm text-[var(--text-muted)] flex items-start gap-3 font-light"
                  >
                    <span className="mt-2.5 w-1 h-px bg-[var(--border)] flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
