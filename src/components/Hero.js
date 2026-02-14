import React from 'react';
import img from "../assets/img.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hi, I'm a MERN Stack & AI Developer</h1>
            <p className="text-xl text-white/90 mb-8">Passionate about building full-stack applications with MongoDB, Express, React, Node.js and implementing AI solutions with Machine Learning, Deep Learning and NLP.</p>
            <div className="flex space-x-4">
              <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition">Hire Me</a>
              <a href="#projects" className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition">View Work</a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
                      <img src={img} alt="Developer workspace" className="rounded-xl shadow-2xl border-4 border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
