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
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm transition-all duration-300 animate-fadeIn">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-xl font-semibold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-200 cursor-pointer">
                            Waqas Portfolio
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {["home", "skills", "projects", "experience", "certificates", "contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-200"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full focus:outline-none transition-transform duration-500 hover:rotate-180"
                        >
                            {/* Dark Icon */}
                            <svg
                                className={`w-5 h-5 text-gray-900 ${theme === 'dark' ? 'hidden' : 'block'
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>

                            {/* Light Icon */}
                            <svg
                                className={`w-5 h-5 text-white ${theme === 'dark' ? 'block' : 'hidden'
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className={`p-2 rounded-md text-gray-700 dark:text-gray-300 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                                }`}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Animated */}
            <div
                className={`md:hidden bg-white dark:bg-gray-800 transform transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen
                        ? 'max-h-96 opacity-100 scale-100'
                        : 'max-h-0 opacity-0 scale-95 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    {["home", "skills", "projects", "experience", "certificates", "contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-200 hover:scale-105"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        className="block w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-all duration-200"
                    >
                        Toggle Theme
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
