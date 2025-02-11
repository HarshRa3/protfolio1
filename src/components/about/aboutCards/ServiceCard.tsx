import React from "react";
import { FaCheck } from "react-icons/fa";

const ServiceCard: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="p-6 flex flex-col items-center justify-center gap-6 text-xl font-semibold border-2 border-gray-700 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 text-white transition-all duration-300 ease-in-out transform">
      {/* Icon Circle */}
      <div className="bg-white text-yellow-600 p-6 rounded-full shadow-lg flex items-center justify-center">
        <FaCheck className="text-4xl" />
      </div>

      {/* Title */}
      <h1 className="text-center font-bold text-xl text-white">{title}</h1>

      {/* Optional description */}
      <p className="text-center text-sm text-white opacity-80">
        Providing high-quality services tailored to your needs, ensuring
        satisfaction and excellence.
      </p>
    </div>
  );
};

export default ServiceCard;
