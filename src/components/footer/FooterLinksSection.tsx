'use client';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { navlinks } from '../Header/NavBar';

const FooterLinksSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Navigation</h3>
      
      <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400">
        {navlinks?.map((e) => {
          const path = e === "Home" ? "/" : `/${e.toLowerCase()}`;
          return (
            <Link
              key={e}
              href={path}
              className="hover:text-indigo-400 transition-colors"
            >
              {e}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 pt-2">
        {[
          { href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
          { href: 'https://github.com/HarshRa3', icon: <FaGithub size={18} />, label: 'GitHub' },
          { href: 'mailto:harshrastogi396@gmail.com', icon: <FaEnvelope size={18} />, label: 'Email' },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all border border-slate-800"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksSection;

