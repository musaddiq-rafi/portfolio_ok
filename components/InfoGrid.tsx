"use client";
import React from "react";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { IconCode, IconBrain, IconServer, IconDeviceDesktop } from "@tabler/icons-react";
import { AnimatedLine } from "./ui/animated-line";

const features = [
  {
    icon: IconCode,
    title: "Full-Stack Development",
    description: "Building production-ready apps from kernel-level allocators in C to polished Next.js applications.",
  },
  {
    icon: IconBrain,
    title: "AI & Machine Learning",
    description: "End-to-end ML pipelines with PyTorch, LSTM, and Transformers.",
  },
  {
    icon: IconServer,
    title: "System Internals",
    description: "Comfortable across the full stack: system internals, backend APIs, and polished frontends.",
  },
  {
    icon: IconDeviceDesktop,
    title: "Production Experience",
    description: "Contributed to 5+ products at Tyger Media serving 50+ employees.",
  },
];

export function InfoGrid() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <AnimatedLine>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
              Who am I?
            </h4>
          </AnimatedLine>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white mb-4">
              Software Engineer passionate about{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">building impactful technology</span>
            </h2>
            <p className="text-neutral-600 font-medium dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              I&apos;m a Software Engineering student at IUT specializing in full-stack web development 
              and AI/ML systems. I build things from first principles — from kernel-level buddy 
              allocators in C to production Next.js applications. I&apos;m comfortable across the full 
              stack: system internals, backend APIs, and polished frontends.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200/50 dark:border-neutral-800/50 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                      <feature.icon size={18} stroke={2} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {feature.title}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-3xl" />
            <Globe className="relative w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.2, 0.2, 0.25],
      markerColor: [0.1, 0.6, 1],
      glowColor: [0.5, 0.3, 0.8],
      markers: [
        { location: [23.8103, 90.4125], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.04 },
        { location: [51.5074, -0.1278], size: 0.03 },
        { location: [35.6762, 139.6503], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
      className={className}
    />
  );
};

export default InfoGrid;