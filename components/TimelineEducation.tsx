import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "University",
      content: (
        <div className="flex flex-col items-center">
          <img src="/iut.png" alt="IUT" className="w-24 h-24 mb-4 object-cover" />
          <p className="text-xl font-bold text-white">Islamic University of Technology (IUT)</p>
          <p className="text-sm font-light text-white/80">BSc in Software Engineering</p>
          <p className="text-xs font-light text-white/60">2023 - Present</p>
        </div>
      ),
    },
    {
      title: "College",
      content: (
        <div className="flex flex-col items-center">
          <img src="/ndc.png" alt="NDC" className="w-24 h-24 mb-4 object-cover" />
          <p className="text-xl font-bold text-white">Notre Dame College, Dhaka</p>
          <p className="text-xs font-light text-white">Higher Secondary Certificate — Science</p>
          <p className="text-xs font-light text-white/70">GPA: 5.00, A+ in every subject; ranked #106 among 2,500+ students</p>
          <p className="text-xs font-light text-white/70">Awarded Perfect Attendance</p>
          <p className="text-xs font-light text-white/60">2020 - 2022</p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}