"use client";
import React from "react";
import ContactUsLeftCon from "./ContactUsLeftCon";
import ContactUsForm from "./ContactUsForm";
import { motion } from "framer-motion";

const ContactCon: React.FC = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-5">
          <ContactUsLeftCon />
        </div>
        <div className="lg:col-span-7">
          <ContactUsForm />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCon;

