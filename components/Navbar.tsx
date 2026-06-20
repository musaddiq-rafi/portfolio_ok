"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUpRight } from "lucide-react";

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

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="flex items-stretch">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center px-6 md:px-10 lg:px-14 py-4 border-r border-[var(--border)] text-lg font-bold tracking-wide text-[var(--text)]"
        >
          Musaddiq<span className="text-[var(--accent)]">.</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex flex-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center px-6 border-r border-[var(--border)] text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social + Theme Toggle */}
        <div className="hidden md:flex items-center">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 border-l border-[var(--border)] text-[10px] uppercase tracking-[0.15em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
            >
              {link.name}
              <ArrowUpRight className="w-3 h-3 text-[var(--text-muted)]/40" />
            </a>
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
  );
}
