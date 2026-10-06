import React from 'react';
import FooterLeft from './FooterLeft';
import FooterLinksSection from './FooterLinksSection';
import FooterRight from './FooterRight';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 text-slate-100 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <FooterLeft />
        <FooterLinksSection />
        <FooterRight />
      </div>
      <div className="max-w-7xl mx-auto border-t border-slate-800/60 mt-10 pt-6 text-center text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} Harsh Rastogi. Built with Next.js & Tailwind CSS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

