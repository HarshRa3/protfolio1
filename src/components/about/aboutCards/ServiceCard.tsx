import React from "react";
import { FaCheck } from "react-icons/fa";

const ServiceCard: React.FC<{ title: string; desc?: string }> = ({ title, desc }) => {
  return (
    <div className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col gap-3 items-start text-left group border border-slate-800/80">
      <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200">
        <FaCheck className="text-lg" />
      </div>
      <h3 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">
        {desc || "Delivering scalable, high-performance digital solutions tailored to modern business requirements."}
      </p>
    </div>
  );
};

export default ServiceCard;

