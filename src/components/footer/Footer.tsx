import React from 'react';
import FooterLeft from './FooterLeft';
import FooterLinksSection from './FooterLinksSection';
import FooterRight from './FooterRight';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 justify-self-end  via-gray-800 to-black text-white py-12 px-6">
      <div
        className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <FooterLeft />
        <FooterLinksSection />
        <FooterRight />
      </div>
      <div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        &copy; {new Date().getFullYear()} Harsh Rastogi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
