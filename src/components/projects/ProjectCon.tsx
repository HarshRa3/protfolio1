"use client";
import React from "react";
import { motion } from "framer-motion";

import ProjectCards from "./ProjectCards";
import { ProjectsData } from "@/staticData/staticData";

const ProjectCon: React.FC = () => {
  return (
    <div className="px-6 py-16 flex flex-col gap-20">
      <motion.h1
        className="text-center text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 bg-clip-text"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Explore My Popular Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-10">
        {ProjectsData.map((e,i)=>(
            <ProjectCards key={i} index={i}
              imageSrc={e.img}
              title={e.title}
              url={e.url}
              description={e.desc}
            techStack={e.techStack}
            />

        ))}
      </div>
    </div>
  );
};

export default ProjectCon;
