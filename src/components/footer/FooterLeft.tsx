import React from 'react';
import { Code2 } from 'lucide-react';

const FooterLeft: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
      <div className="flex items-center gap-2 font-bold text-lg text-white">
        <div className="p-1.5 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 text-white">
          <Code2 size={18} />
        </div>
        <span>Harsh <span className="text-indigo-400">Rastogi</span></span>
      </div>
      <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
        Full Stack Web & Mobile App Developer committed to building clean, scalable, and impactful digital solutions.
      </p>
    </div>
  );
};

export default FooterLeft;

