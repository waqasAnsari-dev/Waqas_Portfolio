import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">MERN & AI Developer</h3>
            <p className="text-gray-400">Building innovative web applications with MERN stack and AI solutions.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/" className="text-gray-400 hover:text-white transition">Skills</a>
            <a href="/" className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="/" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2023 MERN & AI Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;