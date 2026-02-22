import React from "react";
import img from "../assets/img2.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center animated-bg
      bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    {/* Left Content */}
                    <div className="md:w-1/2 mb-12 md:mb-0">

                        {/* Animated Gradient Text */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight fade-up">
                            <span className="gradient-text">
                                <TypeAnimation
                                    sequence={[
                                        "Hi, I'm a MERN Stack Developer",
                                        1000,
                                        "Hi, I'm an AI Developer",
                                        1000,
                                        "Hi, I'm a MERN Stack & AI Developer",
                                        2000,
                                    ]}
                                    speed={20}
                                    repeat={Infinity}
                                    wrapper="span"
                                />
                            </span>
                        </h1>

                        <p className="text-xl text-white/90 mb-8 fade-up-delay-1">

                            Passionate about building full-stack applications with MongoDB,
                            Express, React, Node.js and implementing AI solutions with
                            Machine Learning, Deep Learning and NLP.
                        </p>

                        <div className="flex space-x-6">

                            {/* 🔥 Hire Me - Animated Gradient Border */}
                            <a
                                href="#contact"
                                className="relative inline-block p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x group"
                            >
                                <span className="block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-300 group-hover:scale-105">
                                    Hire Me
                                </span>
                            </a>

                            {/* 🔥 View Work - Glass Border Hover Effect */}
                            <a
                                href="#projects"
                                className="relative px-8 py-3 font-semibold text-white rounded-xl border border-white/40 backdrop-blur-md overflow-hidden group transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10">View Work</span>

                                {/* Hover Shine Effect */}
                                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                            </a>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 float-animation">
                        <img
                            src={img}
                            alt="Developer workspace"
                            className="rounded-xl shadow-2xl border-4 border-white/20"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
