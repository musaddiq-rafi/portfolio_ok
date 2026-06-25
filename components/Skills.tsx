"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "Java", "Go"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "Backend",
    skills: ["Express.js", "Node.js", "Spring Boot", "FastAPI"],
  },
  {
    title: "AI / ML",
    skills: ["PyTorch", "LSTM", "Transformers", "OpenAI API", "Claude API"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle 19c", "Redis"],
  },
  {
    title: "DevOps & Infra",
    skills: ["Docker", "Nginx", "Git", "Linux"],
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="relative px-6 md:px-10 lg:px-14 py-32 scroll-mt-20"
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
            Skills
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-20"
        >
          <span className="text-[var(--text)]">Technical</span>
          <br />
          <span className="text-[var(--text-muted)]">Arsenal</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="bg-[var(--card-bg)] p-6 hover:bg-[var(--card-hover)] transition-colors duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 bg-[var(--accent)] rotate-45" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--text-muted)]">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)]/30 hover:text-[var(--accent)] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
