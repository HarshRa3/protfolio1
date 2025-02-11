import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUsCard: React.FC = () => {
  return (
    <div className="w-[100%] bg-gradient-to-r from-[#3f4b60] via-[#2a3649] to-[#1f2b3b] p-6 rounded-xl shadow-xl text-white">
      <h2 className="text-2xl font-extrabold text-center  text-blue-300">
        Get in Touch
      </h2>

      <div className="space-y-6">
        {/* Email Contact */}
        <Link
          href={"mailto:harshrastogi396@gmail.com"}
          className="flex items-center space-x-4"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-blue-600 shadow-lg transform transition-transform hover:scale-105">
            <FaEnvelope className="text-2xl" />
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-200">Email</p>
            <p className="text-sm text-gray-300">harshrastogi396@gmail.com</p>
          </div>
        </Link>

        {/* Phone Contact */}
        <Link
          href={"tel:+917983721010"}
          className="flex items-center space-x-4"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full text-blue-600 shadow-lg transform transition-transform hover:scale-105">
            <FaPhoneAlt className="text-2xl" />
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-200">Mobile</p>
            <p className="text-sm text-gray-300">+91 7983721010</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsCard;
