"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const awards = [
  {
    id: 1,
    title: "1st Runner-Up, Prompt Engineering",
    event: "Traction — Robotics Club of BRAC University & Affortable.AI",
    date: "Nov 2024",
    details: [
      "Awarded from more than 60 individual participants",
      "Built and deployed a fully functional web app within a 2-hour time limit featuring auth, CRUD, parallax scrolling, and on-scroll animations",
    ],
  },
];

const activities = [
  {
    id: 1,
    role: "Assistant Technical Director",
    org: "IUT Computer Society (IUTCS)",
    period: "2022 – Present",
    details: [
      "Led development of the society's real-time quiz platform, deployed live for 200+ concurrent participants.",
      "Supervised and developed management platform currently holding 500+ active registrations, deployed in 3 different versions.",
      "Organized events like CodeSprint, DevSprint and led development team consisting of talented developers.",
      "Worked as an organizer in the 11th National ICT Fest — one of the largest ICT Fests in Bangladesh.",
      "Managing and mentoring the society's tech team across competitions, events, and internal tooling.",
    ],
  },
];

export function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
      id="awards"
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
            Awards
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-16"
        >
          <span className="text-[var(--text)]">Recognition</span>
        </motion.h2>

        {awards.map((award) => (
          <motion.div
            key={award.id}
            variants={itemVariants}
            className="border border-[var(--border)] p-6 md:p-10 mb-24 hover:border-[var(--accent)]/20 transition-colors duration-500 group"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-500">
                {award.title}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--text-muted)] flex-shrink-0">
                {award.date}
              </span>
            </div>

            <p className="text-sm text-[var(--accent)]/60 mb-5 font-medium">
              {award.event}
            </p>

            <ul className="flex flex-col gap-2">
              {award.details.map((detail, di) => (
                <li
                  key={di}
                  className="text-sm text-[var(--text-muted)] flex items-start gap-3 font-light leading-relaxed"
                >
                  <span className="mt-2.5 w-1 h-px bg-[var(--border)] flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <span className="w-6 h-px bg-[var(--accent)]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--accent)]">
            Activities
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-16"
        >
          <span className="text-[var(--text)]">Co-Curricular</span>
        </motion.h2>

        {activities.map((act) => (
          <motion.div
            key={act.id}
            variants={itemVariants}
            className="border border-[var(--border)] p-6 md:p-10 hover:border-[var(--accent)]/20 transition-colors duration-500 group"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-500">
                  {act.role}
                </h3>
                <p className="text-sm text-[var(--accent)]/60 font-medium mt-1">
                  {act.org}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--text-muted)] flex-shrink-0">
                {act.period}
              </span>
            </div>

            <ul className="flex flex-col gap-2 mt-5">
              {act.details.map((detail, di) => (
                <li
                  key={di}
                  className="text-sm text-[var(--text-muted)] flex items-start gap-3 font-light leading-relaxed"
                >
                  <span className="mt-2.5 w-1 h-px bg-[var(--border)] flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
