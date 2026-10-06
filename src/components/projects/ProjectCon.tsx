import React from "react";
import { FolderGit2 } from "lucide-react";

import ProjectCards from "./ProjectCards";
import { ProjectsData } from "@/staticData/staticData";

const ProjectCon: React.FC = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          <FolderGit2 size={14} />
          <span>Featured Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="gradient-text">Projects & Work</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          A showcase of client & enterprise web applications, mobile platforms, and management systems built with modern technology stacks.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsData.map((e, i) => (
          <ProjectCards
            key={i}
            index={i}
            imageSrc={e.img}
            title={e.title}
            url={e.url}
            description={e.desc}
            techStack={e.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCon;

