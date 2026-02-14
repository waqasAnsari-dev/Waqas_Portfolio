import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      title: 'MERN Stack',
      icon: (
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      categories: [
        { name: 'Frontend', skills: ['React.js',  'Redux', 'Tailwind CSS'] },
        { name: 'Backend', skills: ['Node.js', 'Express.js', 'GraphQL', 'REST API'] },
        { name: 'Database', skills: ['MongoDB', 'Mongoose'] },
      ],
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      textColor: 'text-blue-800 dark:text-blue-400',
    },
    {
      title: 'AI & Machine Learning',
      icon: (
        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      categories: [
        { name: 'Frameworks', skills: ['TensorFlow', 'PyTorch', 'HuggingFace', 'scikit-learn'] },
        { name: 'Specializations', skills: ['Machine Learning', 'Deep Learning', 'NLP', 'RAG', 'XAI'] },
        { name: 'Data', skills: ['Vector DBs', 'Pandas', 'NumPy'] },
        {name:'Python Automation',skills:['Selenium','BeautifulSoup','Requests'] }
      ],
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      textColor: 'text-purple-800 dark:text-purple-400',
    },
    {
      title: 'DevOps & Deployment',
      icon: (
        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      ),
      categories: [
        { name: 'Platforms', skills: ['Vercel', 'Netlify', 'Render', 'Railway'] },
        { name: 'Tools', skills: ['Docker', 'CI/CD', 'Git','GitHub','GitLab', 'AWS'] },
        { name: 'Testing', skills: ['Jest', ] },
      ],
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      textColor: 'text-green-800 dark:text-green-400',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className={`p-3 ${skill.bgColor} rounded-lg`}>{skill.icon}</div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
              </div>
              <div className="space-y-4">
                {skill.categories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{category.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skillName, skillIndex) => (
                        <span key={skillIndex} className={`px-3 py-1 ${skill.bgColor} ${skill.textColor} rounded-full text-sm`}>
                          {skillName}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;