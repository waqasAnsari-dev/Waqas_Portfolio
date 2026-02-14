import React, { useState } from 'react';

const Navbar = ({ theme, setTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Waqas Portfolio</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
            <a href="#skills" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
            <a href="#experience" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Experience</a>
            <a href="#contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
            <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
              <svg id="theme-dark-icon" className={`w-5 h-5 text-gray-900 ${theme === 'dark' ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg id="theme-light-icon" className={`w-5 h-5 text-white ${theme === 'dark' ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
              </svg>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">Home</a>
          <a href="#skills" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">Skills</a>
          <a href="#projects" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">Projects</a>
          <a href="#experience" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">Experience</a>
          <a href="#contact" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">Contact</a>
          <button onClick={toggleTheme} className="block px-3 py-2 text-gray-900 dark:text-white">Toggle Theme</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;