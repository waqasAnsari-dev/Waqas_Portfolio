import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Upwork Inc. Freelancing',
      period: 'Jan 2025 - Present',
      description: 'Developed and maintained multiple MERN stack applications with AI integration. Led frontend architecture decisions and implemented CI/CD pipelines. Specialized in scaling applications and optimizing database performance.',
    },
    {
      title: 'AI Engineer',
      company: 'Upwork Inc Freelancing',
      period: ' Jan 2025 - Present',
      description: 'Created multiple AI solutions for healthcare applications including NLP chatbots for patient interaction and computer vision models for medical imaging analysis. Integrated AI models with web applications using Flask and FastAPI.',
    },
    {
      title: 'Artificial Intelligence',
      company: 'Code Generation',
      period: 'May 2025 - Aug 2025',
      description: 'I have did 3 months online internship at code generation company. Worked on developing AI models for various applications including machine learning and AI integration. Gained hands-on experience with TensorFlow, PyTorch, and HuggingFace libraries.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Professional Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 w-1 h-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2">
            <div className="animate-timeline h-full bg-blue-500 dark:bg-blue-400 origin-top"></div>
          </div>
          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className={`flex flex-col${index % 2 === 1 ? '-reverse' : ''} md:flex-row items-center justify-between`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mb-4 md:mb-0`}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-800 flex items-center justify-center z-10 mx-auto md:mx-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 