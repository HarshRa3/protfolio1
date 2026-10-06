"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HarshImg from "../../assests/images/harshphoto.jpg";
import ServiceCard from "./aboutCards/ServiceCard";
import ContactUsCard from "./aboutCards/CotactsUsCard";
import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-6 py-16 text-slate-100 flex flex-col gap-12"
    >
      {/* Top Heading */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
          <Sparkles size={14} />
          <span>About My Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Crafting <span className="gradient-text">Innovative Digital Products</span>
        </h2>
        <p className="text-slate-400 text-base leading-relaxed">
          Passionate Full Stack Developer creating responsive web applications, mobile apps, and enterprise software solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Bio & Stats */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Building scalable web & mobile solutions with precision & modern aesthetics.
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              With over 3 years of hands-on experience in full-stack web and mobile development, I specialize in building modern, high-performance applications using React, Next.js, React Native, Node.js, and Express.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              From enterprise document management tools like IDM to seller account platforms like Star Enabler and cloud services platforms like BSquare, I focus on clean code, seamless user experience, and optimized architecture.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="glass-card p-4 rounded-xl border border-slate-800/80 text-center">
              <span className="text-3xl font-extrabold text-indigo-400">3+</span>
              <p className="text-xs text-slate-400 font-medium mt-1">Years Experience</p>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800/80 text-center">
              <span className="text-3xl font-extrabold text-purple-400">10+</span>
              <p className="text-xs text-slate-400 font-medium mt-1">Projects Completed</p>
            </div>
            <div className="glass-card p-4 rounded-xl border border-slate-800/80 text-center col-span-2 sm:col-span-1">
              <span className="text-3xl font-extrabold text-pink-400">100%</span>
              <p className="text-xs text-slate-400 font-medium mt-1">Client Commitment</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <ServiceCard 
              title="Full Stack Web Dev" 
              desc="Next.js, React, Node.js, TypeScript, and MongoDB for high performance web platforms." 
            />
            <ServiceCard 
              title="Mobile App Development" 
              desc="Cross-platform iOS and Android applications with React Native and seamless APIs." 
            />
          </div>

          <div className="pt-2">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2">
                <Mail size={16} />
                <span>Get In Touch With Me</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image & Quick Info */}
        <div className="lg:col-span-5 flex flex-col items-center gap-6">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden glass-card p-2 border border-slate-700/60 shadow-2xl group">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                src={HarshImg}
                alt="Harsh Rastogi"
                priority
              />
            </div>
          </div>
          <ContactUsCard />
        </div>
      </div>
    </motion.section>
  );
};

export default About;

