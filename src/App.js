import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';
import Certificates from './components/Certificates.js';
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('color-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Skills />
      <Projects />
       <Experience />
        <Certificates />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;