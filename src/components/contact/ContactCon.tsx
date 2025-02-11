"use client";
import React from "react";
import ContactUsLeftCon from "./ContactUsLeftCon";
import ContactUsForm from "./ContactUsForm";
import { motion } from "framer-motion";

const ContactCon: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative   w-[100%]  text-white overflow-hidden px-6 py-16 flex flex-col gap-20"
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 ">
        <div className="absolute w-[100%] inset-0 bg-gradient-to-br from-[#141e30] via-[#243b55] to-[#141e30] opacity-80" />
        <div className="absolute w-[100%] inset-0 animate-pulse bg-gradient-to-r from-[#0e52c2] via-[#0e2557] to-[#1b1708b5] blur-2xl opacity-30" />
      </div>
      <motion.h1
        className="relative z-10 text-5xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Conact Us
      </motion.h1>
      <div className="flex  z-10   flex-col md:flex-row justify-center items-center gap-12">
        <motion.div
          className="w-full md:w-1/3 lg:w-[50%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ContactUsLeftCon />
        </motion.div>
        <motion.div
                  className="w-full md:w-2/3 lg:w-3/4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
        <ContactUsForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactCon;
