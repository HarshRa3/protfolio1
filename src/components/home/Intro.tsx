"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Intro:React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center" id="home">

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Hi There! 👋
        </h2>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-white text-xl md:text-3xl font-light md:font-medium mb-8">
            <Typewriter
              options={{
                strings: [
                  "I'm a Creative Thinker",
                  "Passionate Coder",
                  "Full Stack Developer 🚀",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-6"
        >
          <button className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform transition-transform hover:scale-110">
            Learn More About Me
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
