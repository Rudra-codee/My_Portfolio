// import React from 'react';
// import { motion } from 'framer-motion';
import profileImg from '../assets/hero/robot.jpeg';

const Resume = () => {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-8">
            {/* Profile Image and Name */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-500/20">
                <img 
                  src={profileImg}
                  alt="Rudraksh Rathod" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-center mb-1">Rudraksh</h1>
              <h2 className="text-3xl font-bold text-center mb-4">Rathod</h2>
              <p className="text-gray-600 text-center">Frontend Developer</p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">📞</span> Contact
              </h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="text-blue-600">📱</span>
                  <span className="ml-2">9699771571</span>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600">📧</span>
                  <a href="mailto:web.developer9697@gmail.com" className="ml-2 text-blue-600 hover:underline">
                    web.developer9697@gmail.com
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-600">📍</span>
                  <span className="ml-2">Rishihood University,Delhi NCR</span>
                </p>
              </div>
            </div>

            {/* About Me */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">👤</span> About Me
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I am a first-year BTech student in Computer Science and Artificial Intelligence at Newton School of Technology. I have a strong foundation in web development, having completed HTML, CSS, JavaScript, React, and Python. With a passion for building creative and functional web applications, I have worked on several projects, including a Tesla clone, a portfolio website, and mini projects with Js.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">⚙️</span> Skills
              </h3>
              <ul className="list-none space-y-2">
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Critical Thinking</li>
                <li>Python</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center border-b pb-2">
                <span className="mr-2">🎓</span> Education
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">High School (12th)</h4>
                    <span className="text-gray-600 text-sm">2022-2024</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Tirupati Higher Secondary School</p>
                  <p className="text-sm text-gray-600">
                    Studied Science with a focus on Mathematics, Physics, and Computer Science also developed a keen interest in technology and programming.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">BTech in Computer Science and Artificial Intelligence</h4>
                    <span className="text-gray-600 text-sm">2024-2028</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Newton School of Technology</p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium">Key Coursework:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Web Development: HTML, CSS, JavaScript, React,Tailwind</li>
                      <li>Programming Fundamentals: Python</li>
                      <li>Data Structures and Algorithms (ongoing)</li>
                      <li>UI/UX Design Principles (ongoing)</li>
                    </ul>
                    <p className="font-medium mt-2">Activities:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Member of Finanza - The Finance & Investment Club</li>
                      <li>Member of the Dev Club, contributing to team projects and hackathons</li>
                      <li>POC for Gamru, focusing on event coordination and Gamru Arena</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center border-b pb-2">
                <span className="mr-2">💼</span> Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Web Development Projects (Self-Initiated)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>Tesla Clone Website: Built a fully responsive clone of Tesla's website using HTML and CSS.</li>
                    <li>Mini Social Media Platform: Designed and developed a platform for college students using React and JavaScript, including features like user authentication and post creation.</li>
                    <li>Dynamic Expense Tracker App: Created an interactive expense tracker with dynamic charts and JavaScript-based functionalities.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Member of</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 italic">Rishihood University</p>
                      <p className="text-sm text-gray-600">Dev Club, Newton School of Technology</p>
                      <p className="text-sm text-gray-600 pl-4">Collaborated with peers on innovative web development projects, focusing on problem-solving and modern technologies like React and JavaScript</p>
                    </div>
                    <div>
                      <p className="text-gray-600 italic">Finanza: The Finance & Investment Club</p>
                      <p className="text-sm text-gray-600 pl-4">Assisted in organizing finance-related workshops and events, such as Trading Arena, which had over 100 participants.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center border-b pb-2">
                <span className="mr-2">📚</span> Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Portfolio</h4>
                  <p className="text-sm text-gray-600">
                    Designed and developed a personal portfolio website to showcase my projects, skills, and achievements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">TeslaX</h4>
                  <p className="text-sm text-gray-600">
                    Developed a fully responsive clone of Tesla's official website to replicate the UI/UX and improve front-end development skills.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Rishihood Fest</h4>
                  <p className="text-sm text-gray-600">
                    Official website for Rishihood University's annual program fest. Features event schedules, registration forms, and information about various college events including Neutron, Makers' Fest, Psyphoria, and Design X.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Strive</h4>
                  <p className="text-sm text-gray-600">
                    Strive helps you develop and maintain good habits by tracking progress, setting reminders, and analyzing streaks for better consistency and self-improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 