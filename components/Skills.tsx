"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  Brain, 
  Terminal, 
  GitBranch,
} from "lucide-react";
import { AnimatedLine } from "./ui/animated-line";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "C", "Java"],
  },
  {
    title: "Frontend",
    icon: Terminal,
    skills: ["Next.js", "React", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Express.js", "Node.js", "Spring Boot", "FastAPI"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["PyTorch", "LSTM", "Transformers", "OpenAI API", "Gemini API"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle 19c", "Redis"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Docker", "Nginx", "Git", "Linux"],
  },
];

export function Skills() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <AnimatedLine>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              Skills
            </h4>
          </AnimatedLine>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="relative flex items-center justify-center w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
            {/* Gradient background ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-cyan-500 opacity-10 blur-xl" />
            
            {/* Orbit 1 - inner */}
            <motion.div
              className="absolute rounded-full border border-purple-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: 120, height: 120 }}
            >
              <div className="absolute w-8 h-8 -top-4 left-[calc(50%-16px)] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-sm shadow-purple-500/20 flex items-center justify-center">
                <Code2 size={14} className="text-white" />
              </div>
              <div className="absolute w-8 h-8 -bottom-4 left-[calc(50%-16px)] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-sm shadow-purple-500/20 flex items-center justify-center">
                <Brain size={14} className="text-white" />
              </div>
            </motion.div>

            {/* Orbit 2 - middle */}
            <motion.div
              className="absolute rounded-full border border-pink-400/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ width: 190, height: 190 }}
            >
              <div className="absolute w-7 h-7 -top-3.5 left-[calc(50%-14px)] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 shadow-sm shadow-pink-500/20 flex items-center justify-center">
                <Server size={12} className="text-white" />
              </div>
              <div className="absolute w-7 h-7 -bottom-3.5 left-[calc(50%-14px)] rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 shadow-sm shadow-pink-500/20 flex items-center justify-center">
                <Database size={12} className="text-white" />
              </div>
            </motion.div>

            {/* Orbit 3 - outer */}
            <motion.div
              className="absolute rounded-full border border-cyan-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              style={{ width: 260, height: 260 }}
            >
              <div className="absolute w-6 h-6 -top-3 left-[calc(50%-12px)] rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 shadow-sm shadow-cyan-500/20 flex items-center justify-center">
                <Terminal size={10} className="text-white" />
              </div>
              <div className="absolute w-6 h-6 -bottom-3 left-[calc(50%-12px)] rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 shadow-sm shadow-cyan-500/20 flex items-center justify-center">
                <GitBranch size={10} className="text-white" />
              </div>
            </motion.div>

            {/* Center badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute z-20 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-sm shadow-purple-500/20 border-2 border-white dark:border-neutral-900"
            >
              <span className="text-white font-bold text-[10px]">SKILLS</span>
            </motion.div>
          </div>

          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="group p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <group.icon size={16} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;