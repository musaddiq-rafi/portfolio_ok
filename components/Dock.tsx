"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSend,
  IconHome,
  IconTerminal2,
  IconLayout,
  IconBook,
} from "@tabler/icons-react";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-[var(--text-muted)]" />,
      href: "#",
    },
    {
      title: "About",
      icon: <IconLayout className="h-full w-full text-[var(--text-muted)]" />,
      href: "#about",
    },
    {
      title: "Skills",
      icon: <IconTerminal2 className="h-full w-full text-[var(--text-muted)]" />,
      href: "#skills",
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-[var(--text-muted)]" />,
      href: "#projects",
    },
    {
      title: "Education",
      icon: <IconBook className="h-full w-full text-[var(--text-muted)]" />,
      href: "#education",
    },
    {
      title: "Contact",
      icon: <IconSend className="h-full w-full text-[var(--text-muted)]" />,
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-[var(--text-muted)]" />,
      href: "https://www.linkedin.com/in/musaddiq-rafi/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-[var(--text-muted)]" />,
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
