import React, { useState } from 'react';
import upwork from '../assets/upwork.svg';
import freelancer from '../assets/freelancer.svg';
import gmail from '../assets/gmail.svg';
import whatsapp from '../assets/whatsapp.svg';
import github from '../assets/github.svg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError('Please fill out all fields.');
      return;
    }

    // Construct a cleaner WhatsApp message
    const whatsappMessage = `New Contact Form Submission:👤 Name: ${name}📧 Email: ${email}📋 Subject: ${subject}💬 Message: ${message}`;
    const whatsappUrl = `https://wa.me/+923180414751?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mwaqas.com@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={gmail} alt="Gmail" className="w-12 h-12" />
                  </a>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mwaqas.com@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    mwaqas.com@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <a href="https://wa.me/+923180414751" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" className="w-12 h-12" />
                  </a>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">WhatsApp</h4>
                  <a
                    href="https://wa.me/+923180414751"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +92-3180414751
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Lahore City, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <a
                    href="https://github.com/waqasansariii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github} alt="GitHub" className="w-12 h-12" />
                  </a>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h4>
                  <a
                    href="https://github.com/waqasansariii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    waqasansariii
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.upwork.com/freelancers/~0110e1e92bf6693e02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition"
                  >
                    <img src={upwork} alt="Upwork" className="w-12 h-12" />
                  </a>
                  <a
                    href="https://www.freelancer.com/u/mwaqasm5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/50 transition"
                  >
                    <img src={freelancer} alt="Freelancer" className="w-12 h-12" />
                  </a>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Freelance Profiles</h4>
                  <p className="text-gray-600 dark:text-gray-300">waqasansariii</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6">
              {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;