"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/musaddiq-rafi" },
  { name: "LinkedIn", href: "https://linkedin.com/in/musaddiq-rafi" },
];

export function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      ref={containerRef}
      style={{ y, opacity }}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[var(--bg)] to-[var(--bg-elevated)]" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-1/2 -right-1/4 w-[60vw] h-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)",
          scale,
        }}
      />
      <motion.div
        className="absolute -bottom-1/3 -left-1/4 w-[40vw] h-[40vw] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(230,57,70,0.04) 0%, transparent 70%)",
          scale,
        }}
      />

      {/* Hero image with parallax */}
      <motion.div
        style={{ y: imageParallax }}
        className="absolute right-0 top-0 h-full w-[65%] md:w-[60%] lg:w-[55%]"
      >
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <Image
            src="/musadiq_rafi_hero_section.png"
            alt="Abdullah Al Musaddiq Rafi"
            fill
            className="object-contain object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent via-60% to-[var(--bg)]" />
        </motion.div>
      </motion.div>

      {/* Boxy Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="flex items-stretch border-b border-[var(--border)]">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center px-6 md:px-10 lg:px-14 py-4 border-r border-[var(--border)] text-lg font-bold tracking-wide text-[var(--text)]"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Musaddiq<span className="text-[var(--accent)]">.</span>
          </motion.a>

          {/* Nav links */}
          <div className="hidden md:flex flex-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="flex items-center px-6 border-r border-[var(--border)] text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social + Theme Toggle */}
          <div className="hidden md:flex items-center">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 border-l border-[var(--border)] text-[10px] uppercase tracking-[0.15em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.05 }}
              >
                {link.name}
                <span className="text-[var(--text-muted)]/40">↗</span>
              </motion.a>
            ))}
            <div className="border-l border-[var(--border)]">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center px-6 ml-auto"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-5 h-px bg-[var(--text-muted)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`w-5 h-px bg-[var(--text-muted)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[var(--bg-elevated)] border-b border-[var(--border)]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            {[...navLinks, ...socialLinks].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={"href" in link && link.href.startsWith("http") ? "_blank" : undefined}
                className="block px-8 py-4 text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] border-b border-[var(--border)] last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-8 py-4">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero content */}
      <div className="absolute bottom-0 left-0 z-10 px-6 md:px-10 lg:px-14 pb-14 md:pb-18 lg:pb-22 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-medium text-[var(--accent)]">
            <span className="w-4 h-px bg-[var(--accent)]" />
            Software Engineer &middot; Full-Stack &middot; AI/ML
          </span>
        </motion.div>

        <motion.h1
          className="font-bold text-[13vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.85] text-[var(--text)] uppercase tracking-tighter"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>Musaddiq</span>
          <br />
          <motion.span
            className="text-[var(--accent)]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1.2, delay: 2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Rafi
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-sm md:text-base text-[var(--text-muted)] max-w-md font-light leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          Third-year Software Engineering student at IUT. Building scalable
          systems, exploring AI/ML, and crafting meaningful digital experiences.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[var(--accent)]/30 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          style={{ transformOrigin: "top" }}
        />
        <span className="text-[7px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)]">
          Scroll
        </span>
      </motion.div>
    </motion.header>
  );
}
