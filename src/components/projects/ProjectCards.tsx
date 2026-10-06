"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardsProps {
  imageSrc: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
  index: number;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imageSrc,
  title,
  description,
  techStack,
  index,
  url,
}) => {
  return (
    <motion.div
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800/80 group transition-all duration-200"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: (index % 3) * 0.08 }}
    >
      {/* Project Image Header */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-900/90 text-indigo-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Link */}
          <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
            >
              <span>View Project Live</span>
              <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;

