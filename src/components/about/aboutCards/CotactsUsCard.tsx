import Link from "next/link";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUsCard: React.FC = () => {
  return (
    <div className="w-full glass-card p-6 rounded-2xl border border-slate-800/80 text-white space-y-4">
      <h3 className="text-lg font-bold text-slate-200">Quick Contact</h3>

      <div className="space-y-3">
        <Link
          href="mailto:harshrastogi396@gmail.com"
          className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors group"
        >
          <div className="p-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <FaEnvelope size={18} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Me</p>
            <p className="text-sm font-medium text-slate-200 group-hover:text-indigo-300">harshrastogi396@gmail.com</p>
          </div>
        </Link>

        <Link
          href="tel:+917983721010"
          className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors group"
        >
          <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            <FaPhoneAlt size={18} />
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call / WhatsApp</p>
            <p className="text-sm font-medium text-slate-200 group-hover:text-emerald-300">+91 7983721010</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsCard;

