"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

const Intro: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center relative px-6 py-12" id="home">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Freelance & Full-Time Opportunities</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Hi, I&apos;m <span className="gradient-text">Harsh Rastogi</span> 👋
        </h1>

        {/* Dynamic Typewriter Roles */}
        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 h-12 flex items-center justify-center">
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "React & Next.js Specialist",
                "Mobile App Developer (React Native)",
                "Scalable UI & Backend Architect",
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30,
            }}
          />
        </div>

        {/* Bio summary */}
        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed">
          Crafting high-performance web applications, responsive mobile experiences, and modern digital platforms with 3+ years of full-stack expertise.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link href="/projects">
            <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </button>
          </Link>

          <Link href="/Harsh_Rastogi_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold text-sm tracking-wide flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
              <FileText size={16} />
              <span>View Resume</span>
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;

