'use client';
import React from 'react';
import { motion } from 'framer-motion';

const SkillLeftCon: React.FC = () => {
  return (
    <motion.div
      className="text-center md:text-left"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      <motion.h3
        className="text-3xl font-bold text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Dive Into My Expertise
      </motion.h3>
      <motion.h4
        className="text-3xl font-semibold text-pink-500 mt-2"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Skills & Experience
      </motion.h4>
      <motion.p
        className="mt-6 text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        I possess a deep understanding of React, Next.js, JavaScript, and Express, with a focus on creating high-performance, responsive, and scalable web applications.
      </motion.p>
    </motion.div>
  );
};

export default SkillLeftCon;
