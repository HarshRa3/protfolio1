'use client';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { navlinks } from '../Header/NavBar';

const FooterLinksSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2
        className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        Quick Links
      </h2>
      <nav
        className="mt-6 flex flex-wrap justify-center gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {navlinks?.map((e) => (
          <Link
            key={e}
            href={e === "Home" ? "/" : e.toLowerCase()}
               className="text-gray-300 hover:text-white transition duration-300"
          >
            {e}
          </Link>
        ))}
      </nav>
      <div
        className="flex gap-6 mt-6 text-2xl"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {[
          { href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', icon: <FaLinkedin /> },
          { href: 'https://github.com/HarshRa3', icon: <FaGithub /> },
          { href: 'mailto:harshrastogi396@gmail.com', icon: <FaEnvelope /> },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-transform transform hover:scale-125"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksSection;
