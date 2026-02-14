import React, { useState } from "react";
import { projects } from "../data/projects.js";
import PrivateAlert from "./PrivateAlert.jsx";
import VideoModal from "./VideoModal.jsx";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAlert, setShowAlert] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);


  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 
              text-gray-900 dark:text-white rounded-l-lg hover:bg-blue-200 
              dark:hover:bg-blue-800/50 transition ${
                filter === "all" ? "ring-2 ring-blue-500" : ""
              }`}
            >
              All Projects
            </button>

            <button
              onClick={() => setFilter("mern")}
              className={`px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 
              text-gray-900 dark:text-white hover:bg-blue-200 
              dark:hover:bg-blue-800/50 transition ${
                filter === "mern" ? "ring-2 ring-blue-500" : ""
              }`}
            >
              MERN Stack
            </button>

            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-2 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 
              text-gray-900 dark:text-white rounded-r-lg hover:bg-blue-200 
              dark:hover:bg-blue-800/50 transition ${
                filter === "ai" ? "ring-2 ring-blue-500" : ""
              }`}
            >
              AI/ML Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform hover:scale-[1.02]"
            >
              {/* Image Section */}
              <div className="relative h-48 group">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  {/* Demo Button */}
                  {/*<a*/}
                  {/*  href={project.demoLink}*/}
                  {/*  className="px-4 py-2 bg-white text-gray-900 font-medium rounded-md mr-2"*/}
                  {/*  target="_blank"*/}
                  {/*  rel="noreferrer"*/}
                  {/*>*/}
                  {/*  View Demo*/}
                          {/*</a>*/}
                          {project.video ? (
                              <button onClick={() => {
                                  setSelectedVideo(project.video);
                                  setShowVideo(true);
                              }}
                              className="px-4 py-2 bg-white text-gray-900 font-medium rounded-md mr-2" >View Video Demo</button>
                          ) : 
                              (
                                  <a href={project.demoLink} className="px-4 py-2 bg-white text-gray-900 font-medium rounded-md mr-2"
                                      target="__blank" rel="noreffer"> View Demo </a>
                          )
               }

                  {/* GitHub Button */}
                  {project.isPrivate ? (
                    <button
                      onClick={() => setShowAlert(true)}
                      className="px-4 py-2 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition"
                    >
                      GitHub
                    </button>
                  ) : (
                    <a
                      href={project.githubLink}
                      className="px-4 py-2 bg-transparent border-2 border-white text-white font-medium rounded-md"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded-full ${
                        project.category === "mern"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                          : "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Private Project Modal */}
      <PrivateAlert
        isOpen={showAlert}
              onClose={() => setShowAlert(false)}

          />
          <VideoModal
              isOpen={showVideo}
              videoSrc={selectedVideo}
              onClose={() => setShowVideo(false)}
          />
    </section>
  );
};

export default Projects;
