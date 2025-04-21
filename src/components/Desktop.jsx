import React, { useState } from 'react';
import striveImg from '../assets/pro/strive.jpeg';
import teslaxImg from '../assets/pro/teslax.png';
import skySnapImg from '../assets/pro/Skysnap.png';
import spaceXImg from '../assets/pro/spacex.png';
import fitoraImg from '../assets/pro/Fitora.png';
import rishihoodImg from '../assets/pro/Rishihoodfest.png';
// Using teslaxImg as a temporary placeholder for Rishihood
// import rishihoodImg from '../assets/pro/rishihood.png';

const Desktop = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Rishihood Program Fest",
      tech: "React, Tailwind CSS, Framer Motion",
      description: "Official website for Rishihood University's annual program fest. Features event schedules, registration forms, and information about various college events including Neutron, Makers' Fest, Psyphoria, and Design X.",
      preview: rishihoodImg,
      github: "https://github.com/Rudra-codee/rishihood-program-fest",
      live: "https://www.rishihoodprogramfest.com/"
    },
    {
      id: 2,
      name: "Strive - Habit Tracker",
      tech: "React, Tailwind CSS, Node.js",
      description: "A personalized habit tracker app to streamline everyday routines and achieve goals. Features include daily scheduling, productivity guides, and comprehensive habit management.",
      preview: striveImg,
      github: "https://github.com/Rudra-codee/Strive",
      live: "https://strive-wine.vercel.app/"
    },
    {
      id: 3,
      name: "TeslaX Clone",
      tech: "React, Tailwind CSS, Framer Motion",
      description: "A pixel-perfect clone of Tesla's website featuring vehicle showcases, pricing information, and interactive elements. Includes responsive design and smooth animations.",
      preview: teslaxImg,
      github: "https://github.com/Rudra-codee/TeslaX",
      live: "https://tesla-x-zeta.vercel.app/"
    },
    {
      id: 4,
      name: "SkySnap Weather",
      tech: "React, Weather API, Tailwind CSS",
      description: "Real-time weather application providing detailed weather information including temperature, humidity, pressure, and cloud coverage for any location.",
      preview: skySnapImg,
      github: "https://github.com/Rudra-codee/Weather",
      live: "https://weather-six-inky.vercel.app/"
    },
    {
      id: 5,
      name: "SpaceX Clone",
      tech: "React, Tailwind CSS, Animation",
      description: "A detailed recreation of SpaceX's website showcasing launches, missions, and spacecraft. Features dynamic content and smooth transitions.",
      preview: spaceXImg,
      github: "https://github.com/Rudra-codee/SpaceX-Clone",
      live: "https://space-x-clone-nu.vercel.app/"
    },
    {
      id: 6,
      name: "Fitora Health Tracker",
      tech: "React, Node.js, Health APIs",
      description: "A comprehensive health tracking application for monitoring fitness goals, nutrition, and overall wellness. Includes personalized health insights.",
      preview: fitoraImg,
      github: "https://github.com/Rudra-codee/Fitora",
      live: "https://fitora-brown.vercel.app/"
    }
  ];

  return (
    <section id="desktop" className="relative min-h-screen bg-[#0E1016] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Window */}
          <div className="relative bg-[#1C1F2E]/80 backdrop-blur-md rounded-2xl border border-[#2A2F42]/50 overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#2A2F42]/50 border-b border-[#2A2F42]">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center px-3 py-1 rounded-md bg-[#1C1F2E]/50">
                <span className="text-gray-400 text-sm">portfolio.showcase</span>
              </div>
            </div>

            {/* Desktop Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-8">
              {/* Project Explorer */}
              <div className="lg:col-span-4 bg-[#1C1F2E] rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-[#2A2F42]/50 border-b border-[#2A2F42]">
                  <span className="text-gray-400">Project Explorer</span>
                </div>
                <div className="p-4 space-y-3 max-h-[60vh] lg:max-h-[70vh] overflow-y-auto">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeProject?.id === project.id
                          ? 'bg-blue-500/20 border border-blue-500/50'
                          : 'hover:bg-[#2A2F42]/30 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-gray-300 font-medium text-sm lg:text-base">{project.name}</span>
                      </div>
                      <p className="text-blue-400/80 text-xs lg:text-sm mt-2 line-clamp-1">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Preview */}
              <div className="lg:col-span-8 bg-[#1C1F2E] rounded-xl overflow-hidden">
                <div className="px-4 py-2 bg-[#2A2F42]/50 border-b border-[#2A2F42]">
                  <span className="text-gray-400">Project Details</span>
                </div>
                <div className="p-4 lg:p-6">
                  {activeProject ? (
                    <div className="space-y-4 lg:space-y-6">
                      <div className="aspect-video rounded-xl bg-[#2A2F42]/30 overflow-hidden">
                        <img
                          src={activeProject.preview}
                          alt={activeProject.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{activeProject.name}</h3>
                        <p className="text-gray-400 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">{activeProject.description}</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={activeProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 lg:px-6 lg:py-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
                          >
                            <span>Visit Site</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 lg:px-6 lg:py-3 rounded-xl bg-[#2A2F42]/50 text-gray-300 hover:bg-[#2A2F42]/70 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm lg:text-base"
                          >
                            <span>View Code</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-48 lg:h-64 text-gray-500 space-y-4">
                      <svg className="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-sm lg:text-base">Select a project to view details</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Reflection Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Desktop; 