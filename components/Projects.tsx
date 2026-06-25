"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "VBase",
    subtitle: "Real-Time Collaborative Workspace",
    tags: ["Next.js 16", "Convex", "Liveblocks", "LiveKit", "Clerk", "TypeScript"],
    github: "https://github.com/musaddiq-rafi/vbase",
    description:
      "Engineered a unified team workspace with six room types: rich-text documents (Tiptap + Yjs), multi-file code editor (CodeMirror + Piston/custom RCE), spreadsheets, Kanban boards, Excalidraw whiteboards, and LiveKit video conferencing.",
    highlight:
      "Integrated Google Gemini 2.5 Flash across three surfaces: agent-mode code generation, document writing tools, and NL-to-flowchart diagram generation.",
  },
  {
    id: 2,
    title: "BoiBritto",
    subtitle: "Literary Community Platform",
    tags: ["Next.js 15", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    github: "https://github.com/musaddiq-rafi/boibritto",
    description:
      "Built a full-stack literary platform covering book discovery (Google Books API), reading progress tracking, chapter-based creative writing, community discussions, and blogging — each with granular privacy controls.",
    highlight:
      "Delivered 30+ RESTful endpoints, an AdminJS admin panel, Firebase JWT authentication, and a Vitest integration test suite.",
  },
  {
    id: 3,
    title: "IUTCS Trivia",
    subtitle: "Live Quiz Platform",
    tags: ["Next.js 16", "TypeScript", "Firebase Firestore", "Tailwind CSS"],
    github: "https://github.com/musaddiq-rafi/iutcs-trivia-quiz",
    description:
      "Architected a secure quiz system where answers are stored and scored exclusively server-side (answers.json never reaches the client), with one-time submission enforcement via Firestore document IDs.",
    highlight:
      "Deployed live for 200+ concurrent participants; tuned for Firebase Spark free tier at roughly 2,200 writes/day with 45-second leaderboard polling.",
  },
  {
    id: 4,
    title: "Pose2Word",
    subtitle: "Sign Language Recognition",
    tags: ["Python", "PyTorch", "LSTM", "MediaPipe", "Streamlit"],
    github: "https://github.com/musaddiq-rafi/Pose2Word",
    description:
      "Engineered an end-to-end pipeline covering video preprocessing (ffmpeg, CLAHE), MediaPipe landmark extraction, LSTM/Transformer classifier training, and an upload-and-predict Streamlit app.",
    highlight:
      "15-class WLASL subset (187 videos); delivered as a research-based tool for machine learning course at IUT.",
  },
  {
    id: 5,
    title: "Buddy Allocator",
    subtitle: "Advanced Memory Allocation — x86 Kernel",
    tags: ["C", "x86 Kernel", "Systems Programming"],
    github: "https://github.com/musaddiq-rafi/Advanced-Memory-Allocation",
    description:
      "Designed and built a 7-phase buddy allocator (orders 0–10) for an x86 teaching kernel, superseding a naive circular-scan allocator with O(log n) palloc_n / pfree_n and automatic split-and-coalesce.",
    highlight:
      "Extended the legacy mcertikOS developed by Yale University; added 4 MB super-page support via CR4 register.",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="projects"
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
            Projects
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-20"
        >
          <span className="text-[var(--text)]">Selected</span>
          <br />
          <span className="text-[var(--text-muted)]">Works</span>
        </motion.h2>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative border-b border-[var(--border)] first:border-t py-10 md:py-14 hover:bg-[var(--card-hover)] transition-colors duration-500 px-4 md:px-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <span className="text-[10px] tracking-wider font-mono text-[var(--text-muted)] md:w-8 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-500">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.15em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-1 flex-shrink-0 mt-2"
                    >
                      GitHub <ArrowUpRight className="w-3 h-3 inline" />
                    </a>
                  </div>

                  <p className="text-sm text-[var(--accent)]/60 mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-3 max-w-3xl">
                    {project.description}
                  </p>

                  <p className="text-sm text-[var(--text-muted)]/70 font-light leading-relaxed mb-6 max-w-3xl italic">
                    {project.highlight}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] uppercase tracking-[0.12em] font-medium bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
