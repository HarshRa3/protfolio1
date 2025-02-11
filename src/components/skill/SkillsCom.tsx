"use client";
import React from "react";
import SkillLeftCon from "./SkillLeftCon";
import SkillRightCon from "./SkillRightCon";
import { motion } from "framer-motion";

const SkillsCom: React.FC = () => {
  return (
    <div className=" bg-gradient-to-b overflow-hidden  from-[#07076f57] via-[#0c0c1d61] to-[#19137f] px-6 py-16 flex flex-col gap-20">
      <motion.h1
        className="text-center text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 bg-clip-text"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        My Skills & Expertise
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <motion.div
          className="w-full md:w-1/3 lg:w-1/4 text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SkillLeftCon />
        </motion.div>
        <motion.div
          className="w-full md:w-2/3 lg:w-3/4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SkillRightCon />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsCom;
