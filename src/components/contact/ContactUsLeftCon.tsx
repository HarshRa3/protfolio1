import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const ContactUsLeftCon: React.FC = () => {
  return (
    <div className="space-y-6 text-left">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
        <MessageSquare size={14} />
        <span>Get In Touch</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
        Let&apos;s Build Your <span className="gradient-text">Next Digital Idea</span>
      </h2>

      <p className="text-slate-400 text-base leading-relaxed">
        Have a project in mind, need a full-stack developer, or want to discuss technical solutions? I am always open to new opportunities and collaborations.
      </p>

      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-3 text-slate-300 text-sm">
          <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <Mail size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Email</p>
            <p className="text-sm font-semibold text-slate-100">harshrastogi396@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-300 text-sm">
          <div className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
            <Phone size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Phone / Mobile</p>
            <p className="text-sm font-semibold text-slate-100">+91 79837 21010</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-300 text-sm">
          <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Location</p>
            <p className="text-sm font-semibold text-slate-100">India (Available Globally & Remote)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLeftCon;

