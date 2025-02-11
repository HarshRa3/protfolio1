"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardsProps {
  imageSrc: string;
  title: string;
  description: string;
  techStack: string[];
  url: string;
  index: number;
};

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
      className="relative w-[340px] h-[500px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-2xl overflow-hidden group"
      whileHover={{
        scale: 1.07,
        rotateY: 10,
        rotateX: 5,
        boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.6)",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        duration: 0.8,
        delay: index * 0.4,
      }}
    >
      {/* Parallax Image Section */}
      <motion.div
        className="w-full h-[65%] relative overflow-hidden rounded-t-xl"
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 100 },
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
      </motion.div>

      {/* Content Section */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6">
        {/* Title with hover animation */}
        <motion.h2
          className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 mb-3 tracking-wide"
          initial={{ color: "#4B5563" }} // Dark gray color
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h2>

        {/* Description with fade-in effect */}
        <motion.p
          className="text-sm text-gray-300 mb-4 line-clamp-3"
          initial={{ opacity: 0, color: "#9CA3AF" }} // Light gray color for description
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Tech Stack with hover effect */}
        <motion.div
          className="flex flex-wrap gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="text-xs font-medium text-white bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 rounded-full px-3 py-1 shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-600 transform transition duration-300"
              whileHover={{
                scale: 1.2,
                boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.3)",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-6">
          <Link href={url} target="new">
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "#1D4ED8", // blue-600
                boxShadow: "0px 12px 24px rgba(29, 78, 216, 0.5)",
                rotate: 5,
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
            >
              View Project
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
