"use client";
import { AnimatedLine } from "./animated-line";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  return (
    <div className="w-full bg-white dark:bg-black font-sans">
      <div className="max-w-7xl mx-auto py-16 px-4 flex flex-col items-center">
        <AnimatedLine>
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center">
            Educational <span className="text-purple-300">Timeline</span>
          </h1>
        </AnimatedLine>
      </div>

      <div className="flex flex-row items-center justify-center gap-8 pb-20 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative z-10 w-full max-w-md flex flex-col items-center"
          >
            <div className="w-full text-center relative">
              <h3 className="text-xl md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 mb-4">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};