'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const SkillLeftCon: React.FC = () => {
  return (
    <motion.div
      className="text-left space-y-4"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 uppercase tracking-wider">
        <Cpu size={14} />
        <span>Technical Arsenal</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        Modern Tech Stack & <span className="gradient-text">Core Competencies</span>
      </h2>
      
      <p className="text-slate-400 text-base leading-relaxed">
        Leveraging modern frameworks, tools, and best practices to build fast, reliable, and scalable web and mobile applications from scratch to deployment.
      </p>

      <div className="pt-2 space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          <span>Frontend Development (React, Next.js, Tailwind CSS)</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          <span>Mobile App Development (React Native)</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          <span>Backend & Database (Node.js, Express, MongoDB)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillLeftCon;

