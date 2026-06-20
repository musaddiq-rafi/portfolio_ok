"use client";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      className="relative w-10 h-10 flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[var(--text-muted)]" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--text-muted)]" />
      )}
    </motion.button>
  );
}
