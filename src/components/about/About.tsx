"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HarshImg from "../../assests/images/harshphoto.jpg";
import ServiceCard from "./aboutCards/ServiceCard";
import ContactUsCard from "./aboutCards/CotactsUsCard";
import Link from "next/link";

const About:React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative   w-[100%] flex flex-col gap-16 items-center px-10 py-20 text-white overflow-hidden"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[100%] inset-0 bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] opacity-80" />
        <div className="absolute w-[100%] inset-0 animate-pulse bg-gradient-to-r from-[#0e52c2] via-[#0e2557] to-[#1b1708b5] blur-2xl opacity-30" />
      </div>

      {/* Top Heading */}
      <motion.h1
        className="relative z-10 text-5xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        About Me
      </motion.h1>

      <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center w-full">
        <motion.div
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
              Innovative Solutions
            </span>
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl leading-relaxed opacity-90"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            I am a passionate full-stack developer specializing in Next.js,
            React Native, and Express, with over 2 years of experience. I thrive
            on creating exceptional digital experiences while embracing new
            challenges.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <ServiceCard title="Web Development" />
            <ServiceCard title="Mobile Development" />
          </motion.div>
          <Link           href={"mailto:harshrastogi396@gmail.com"} >
          <motion.button
            className="mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            
            >
            Get in Touch
          </motion.button>
            </Link>
        </motion.div>


        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          <div className="relative rounded-full overflow-hidden w-80 h-80 shadow-2xl mb-8 border-4 border-gradient-to-r from-green-400 to-blue-600 hover:shadow-green-400 transition-shadow duration-300">
            <Image
              className="rounded-full w-full h-full transform hover:scale-105 hover:rotate-1 transition-transform duration-500"
              src={HarshImg}
              alt="Harsh Image"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-60 hover:opacity-40 transition-opacity duration-500" />
          </div>
          <ContactUsCard />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
