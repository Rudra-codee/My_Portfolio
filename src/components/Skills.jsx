import React, { useState, useEffect, useRef } from 'react';
import skill1 from '../assets/github.svg';
import skill2 from '../assets/skill2.svg';
import skill3 from '../assets/skill3.png';
import skill4 from '../assets/skill4.svg';
import skill5 from '../assets/skill5.svg';
import skill6 from '../assets/skill6.svg';
import skill7 from '../assets/skill7.svg';
import skill8 from '../assets/skill8.svg';
import skill9 from '../assets/skill9.svg';
import skill10 from '../assets/skill10.svg';
import skill11 from '../assets/skill11.png';
import skill12 from '../assets/skill12.png';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const autoScrollRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Start auto-scrolling
    startAutoScroll();
    
    return () => {
      // Clean up auto-scroll interval on component unmount
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);
  
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (!isPaused) {
        nextSkill();
      }
    }, 3000); // Change skill every 3 seconds
  };
  
  const pauseAutoScroll = () => {
    setIsPaused(true);
  };
  
  const resumeAutoScroll = () => {
    setIsPaused(false);
  };

  const skills = [
    { 
      id: 1, 
      image: skill1, 
      name: 'Github', 
      category: 'Version Control',
      description: 'Version control and collaboration platform for code repositories'
    },
    { 
      id: 2, 
      image: skill2, 
      name: 'HTML', 
      category: 'Frontend',
      description: 'Standard markup language for creating web pages'
    },
    { 
      id: 3, 
      image: skill3, 
      name: 'CSS', 
      category: 'Frontend',
      description: 'Styling language for designing web interfaces'
    },
    { 
      id: 4, 
      image: skill4, 
      name: 'JavaScript', 
      category: 'Programming',
      description: 'Programming language for interactive web applications'
    },
    { 
      id: 5, 
      image: skill5, 
      name: 'Tailwind CSS', 
      category: 'Frontend',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    { 
      id: 6, 
      image: skill6, 
      name: 'TypeScript', 
      category: 'Programming',
      description: 'Typed superset of JavaScript for large-scale applications'
    },
    { 
      id: 7, 
      image: skill7, 
      name: 'React', 
      category: 'Frontend',
      description: 'JavaScript library for building user interfaces'
    },
    { 
      id: 8, 
      image: skill8, 
      name: 'Python', 
      category: 'Programming',
      description: 'Versatile programming language for various applications'
    },
    { 
      id: 9, 
      image: skill9, 
      name: 'Framer', 
      category: 'Design',
      description: 'Interactive design tool for creating animations and prototypes'
    },
    { 
      id: 10, 
      image: skill10, 
      name: 'Figma', 
      category: 'Design',
      description: 'Collaborative interface design tool'
    },
    { 
      id: 11, 
      image: skill11, 
      name: 'Git', 
      category: 'Version Control',
      description: 'Distributed version control system'
    },
    { 
      id: 12, 
      image: skill12, 
      name: 'Panda', 
      category: 'Design',
      description: 'Data manipulation and analysis library'
    },
  ];

  // Get unique categories
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  
  // Filter skills by category
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const nextSkill = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredSkills.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSkill = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredSkills.length) % filteredSkills.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSkill = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Scroll to the current skill
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const skillWidth = container.querySelector('.skill-card')?.offsetWidth || 0;
      const scrollPosition = currentIndex * skillWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, filteredSkills]);

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-[#0E1016] to-[#0E1016]/90">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0iIzFDMUYyRSIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6">
              Technical Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my technical skills across different domains of software development and design
            </p>
          </div>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[#1C1F2E]/40 text-gray-400 hover:bg-[#1C1F2E]/60 hover:text-white border border-[#2A2F42]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Carousel */}
          <div 
            className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
          >
            {/* Navigation Arrows */}
            <button 
              onClick={prevSkill}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1C1F2E]/80 backdrop-blur-sm border border-[#2A2F42]/50 text-white hover:bg-[#1C1F42]/90 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Previous skill"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSkill}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#1C1F2E]/80 backdrop-blur-sm border border-[#2A2F42]/50 text-white hover:bg-[#1C1F42]/90 hover:border-blue-500/50 hover:scale-110 transition-all duration-300 shadow-lg"
              aria-label="Next skill"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Skills Display - Single Line */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-4 gap-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.id}
                  className={`skill-card flex-shrink-0 w-64 snap-center group relative overflow-hidden rounded-2xl border border-[#2A2F42]/50 bg-[#1C1F2E]/40 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 ${
                    index === currentIndex ? 'ring-2 ring-blue-500/50' : ''
                  }`}
                  onClick={() => setActiveSkill(skill)}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <div className="relative p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-[#2A2F42]/30 rounded-xl group-hover:bg-[#2A2F42]/50 transition-colors duration-300">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-10 h-10 object-contain filter group-hover:brightness-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-white text-xl font-medium">{skill.name}</h3>
                        <span className="text-blue-400/80 text-sm">{skill.category}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm flex-grow">{skill.description}</p>
                    
                    <div className="mt-4 pt-4 border-t border-[#2A2F42]/30">
                      <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {filteredSkills.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSkill(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full' 
                      : 'w-3 h-3 bg-[#2A2F42] rounded-full hover:bg-blue-500/50'
                  }`}
                  aria-label={`Go to skill ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Auto-scroll indicator */}
            <div className="text-center mt-4 text-xs text-gray-500">
              {isPaused ? 'Paused' : 'Auto-scrolling...'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Skill Details Modal */}
      {activeSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setActiveSkill(null)}>
          <div className="bg-[#1C1F2E]/90 backdrop-blur-md rounded-2xl border border-[#2A2F42]/50 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <div className="p-4 bg-[#2A2F42]/30 rounded-xl">
                <img
                  src={activeSkill.image}
                  alt={activeSkill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-white text-2xl font-bold">{activeSkill.name}</h3>
                <span className="text-blue-400/80">{activeSkill.category}</span>
              </div>
              <button 
                className="ml-auto text-gray-400 hover:text-white transition-colors"
                onClick={() => setActiveSkill(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-6">
              <h4 className="text-white text-lg font-medium mb-2">Description</h4>
              <p className="text-gray-300">{activeSkill.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
