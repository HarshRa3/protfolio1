'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type SkillCardProps = {
  index: number;
  icon: string;
  name: string;
};

const SkillCards: React.FC<SkillCardProps> = ({ index, icon, name }) => {
  return (
    <motion.div
      className="glass-card glass-card-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 text-center border border-slate-800/80 group transition-all duration-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: (index % 6) * 0.05 }}
    >
      <div className="w-12 h-12 relative flex items-center justify-center transition-transform group-hover:scale-110 duration-200">
        <Image width={44} height={44} alt={name} src={icon} className="object-contain" />
      </div>
      <h3 className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">{name}</h3>
    </motion.div>
  );
};

export default SkillCards;

