import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-6 px-4 flex flex-col items-center justify-center relative">
      <div className="flex space-x-6">
        <a href="https://facebook.com/abdullahalmusaddiq.rafi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.linkedin.com/in/musaddiq-rafi/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/musaddiq-rafi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
          <FaGithub size={24} />
        </a>
      </div>
      <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Musaddiq Rafi. All rights reserved.</p>
      <div className="h-28" /> {/* Blank space for the dock */}
    </footer>
  );
};

export default Footer;
