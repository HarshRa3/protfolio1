import React from 'react';
import { FaCode } from 'react-icons/fa';

const FooterLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
      <div
        className="p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:scale-110 transform transition-transform duration-300 animate-pulse"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <FaCode size={28} className="text-white" />
      </div>
      <h2
        className="mt-4 text-lg font-semibold text-gray-200"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        Harsh Rastogi
      </h2>
      <p
        className="text-gray-400 text-sm mt-2"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        Passionate about building clean, efficient, and impactful code.
      </p>
    </div>
  );
};

export default FooterLeft;
