"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  LayoutGrid,
  Terminal,
  BookOpen,
  Send,
  ExternalLink,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-[var(--text-muted)]" />,
      href: "#",
    },
    {
      title: "About",
      icon: <LayoutGrid className="h-full w-full text-[var(--text-muted)]" />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <Terminal className="h-full w-full text-[var(--text-muted)]" />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <Terminal className="h-full w-full text-[var(--text-muted)]" />,
      href: "#projects",
    },
    {
      title: "Education",
      icon: <BookOpen className="h-full w-full text-[var(--text-muted)]" />,
      href: "#education",
    },
    {
      title: "Contact",
      icon: <Send className="h-full w-full text-[var(--text-muted)]" />,
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: <LinkedinIcon className="h-full w-full text-[var(--text-muted)]" />,
      href: "https://www.linkedin.com/in/musaddiq-rafi/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "GitHub",
      icon: <GithubIcon className="h-full w-full text-[var(--text-muted)]" />,
      href: "https://github.com/musaddiq-rafi/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
