import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Secondary School",
      content: (
        <div>
          <p className="mb-2 text-xl font-bold text-white">
            Phakal Police Lines School and College, Lalmonirhat.
          </p>
          <p className="text-xs font-light text-white">Built a strong foundation in sciences and extracurricular activities.</p>
        </div>
      ),
    },
    {
      title: "Higher Secondary School",
      content: (
        <div>
          <p className="mb-2 text-xl font-bold text-white">
            Cantonment Public School and College, Lalmonirhat.
          </p>
          <p className="text-xs font-light text-white">Focused on advanced coursework and college preparation.</p>
        </div>
      ),
    },
    {
      title: "College",
      content: (
        <div>
          <p className="mb-2 text-xl font-bold text-white">Notre Dame College, Dhaka.</p>
          <p className="text-xs font-light text-white">Participated in clubs and deepened academic interests.</p>
        </div>
      ),
    },
    {
      title: "University",
      content: (
        <div>
          <p className="mb-2 text-xl font-bold text-white">Islamic University of Technology.</p>
          <p className="text-xs font-light text-white">Pursuing higher studies with a focus on engineering and research.</p>
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
