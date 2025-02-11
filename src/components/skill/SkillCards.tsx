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
      className="bg-gradient-to-r from-[#161c25] to-[#19137f] p-6 rounded-lg shadow-xl flex flex-col items-center justify-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.4 }}
    >
      <div className="text-6xl mb-3">
        <Image width={90} height={90} alt={name} src={icon} />
      </div>
      <h3 className="text-xl font-semibold text-white text-center">{name}</h3>
    </motion.div>
  );
};

export default SkillCards;
