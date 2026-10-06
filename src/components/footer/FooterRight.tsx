import React from 'react';

const FooterRight: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-2">
      <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Direct Contact</h3>
      <div className="text-xs text-slate-400 space-y-1">
        <p>Email: <a href="mailto:harshrastogi396@gmail.com" className="hover:text-indigo-400 transition-colors">harshrastogi396@gmail.com</a></p>
        <p>Phone: <a href="tel:+917983721010" className="hover:text-indigo-400 transition-colors">+91 79837 21010</a></p>
      </div>
    </div>
  );
};

export default FooterRight;

