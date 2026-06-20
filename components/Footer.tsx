"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/musaddiq-rafi" },
  { name: "LinkedIn", href: "https://linkedin.com/in/musaddiq-rafi" },
  { name: "Portfolio", href: "https://musaddiq-rafi.vercel.app/" },
];

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [emailCopied, setEmailCopied] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("musaddiq@iut-dhaka.edu");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer
      ref={ref}
      className="relative bg-[var(--bg)] border-t border-[var(--border)] min-h-screen flex flex-col justify-between px-6 md:px-10 lg:px-14 py-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex-1 flex flex-col"
      >
        {/* Giant Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-[13vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.85] tracking-tight uppercase">
            <span className="text-[var(--text)]">Musaddiq</span>
            <br />
            <span className="text-[var(--text-muted)]">Rafi</span>
          </h2>
        </motion.div>

        {/* Social Links Bar */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 border-y border-[var(--border)] mb-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-4 py-3 border-r border-[var(--border)] last:border-r-0 hover:bg-[var(--card-hover)] transition-colors duration-300"
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.12em] font-medium text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {link.name}
              </span>
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:rotate-45 transition-all duration-300" />
            </a>
          ))}
        </motion.div>

        {/* Three Columns */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-px bg-[var(--border)] flex-1"
        >
          {/* Navigation Links */}
          <div className="bg-[var(--card-bg)] grid grid-cols-2">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2.5 text-[11px] md:text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card-hover)] transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex flex-col">
              {["Email Me", "GitHub", "Resume", "LinkedIn"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-4 py-2.5 text-[11px] md:text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card-hover)] transition-all duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-[var(--card-bg)] px-5 py-4 flex flex-col justify-center">
            <h3 className="text-sm font-bold text-[var(--text)] mb-2">
              Keep in the know!
            </h3>
            <p className="text-[10px] md:text-[11px] text-[var(--text-muted)] font-light leading-relaxed mb-3">
              Get updates on my latest projects and tech explorations by signing
              up for my newsletter!
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 bg-transparent border border-[var(--border)] px-3 py-2 text-[11px] text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300"
              />
              <button className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 flex-shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[var(--card-bg)] px-5 py-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span className="text-[10px] uppercase tracking-[0.12em] font-medium text-[var(--text-muted)]">
                Location
              </span>
            </div>

            <p className="text-[10px] md:text-[11px] text-[var(--text-muted)] leading-relaxed mb-3">
              Islamic University of Technology<br />
              Boardbazar, Gazipur-1704<br />
              Dhaka, Bangladesh
            </p>

            <div className="space-y-2">
              <a href="tel:+8801791751468" className="block text-[10px] md:text-[11px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-300">
                +880 1791751468
              </a>
              <div className="flex items-center justify-between">
                <a href="mailto:musaddiq@iut-dhaka.edu" className="text-[10px] md:text-[11px] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300">
                  musaddiq@iut-dhaka.edu
                </a>
                <button
                  onClick={copyEmail}
                  className="text-[10px] uppercase tracking-[0.1em] font-medium text-[var(--text-muted)] border border-[var(--border)] px-3 py-1.5 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                >
                  {emailCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex justify-between items-center pt-4 flex-shrink-0"
      >
        <p className="text-[10px] tracking-[0.08em] font-medium text-[var(--text-muted)] uppercase">
          &copy; {new Date().getFullYear()} Abdullah Al Musaddiq Rafi
        </p>
        <p className="text-[10px] tracking-[0.08em] font-medium text-[var(--text-muted)] uppercase">
          Built with Next.js
        </p>
      </motion.div>
    </footer>
  );
}
