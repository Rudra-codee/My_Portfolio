import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { Button } from "./design/Button";
import robotImage from "../assets/hero/robot.jpeg";
import backgroundImage from "../assets/background.jpeg";

const Hero = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Typing animation with optimized timing
  const roles = ["Frontend Developer", "UI/UX Designer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, currentRole, isDeleting]);

  const tick = useCallback(() => {
    let role = roles[currentRole];
    let updatedText = isDeleting 
      ? text.substring(0, text.length - 1)
      : role.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === role) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setDelta(200);
    }
  }, [text, currentRole, isDeleting]);

  // Floating animation variants
  const floatingAnimation = {
    y: [-5, 5],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <Section
      className="min-h-screen bg-n-8 relative overflow-hidden"
      crosses
      customPaddings
      id="hero"
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic Grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '1px',
                height: '100%',
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `fadeInOut ${3 + Math.random() * 2}s infinite`
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 ? 'rgba(147, 112, 219, 0.3)' : 'rgba(65, 105, 225, 0.3)'
              } 0%, transparent 70%)`
            }}
          />
        ))}
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-n-8/95 via-n-8/50 to-n-8/95" />

      {/* Main Content */}
      <div className="container relative z-1 max-w-[1200px] mx-auto pt-[8rem]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12 relative"
        >
          {/* Decorative Lines */}
          <div className="absolute left-1/2 top-0 h-20 w-[1px] bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform -translate-x-1/2 -translate-y-full" />
          <div className="absolute left-1/2 bottom-0 h-20 w-[1px] bg-gradient-to-t from-transparent via-blue-500/50 to-transparent transform -translate-x-1/2 translate-y-full" />

          <motion.h1 
            className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-n-1 mb-6 flex flex-col md:block relative"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <motion.span 
              className="mb-6 md:mb-0 relative inline-block"
              animate={floatingAnimation}
            >
              Hello, I'm
              <div className="absolute -left-4 -right-4 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform -translate-y-1/2 opacity-50" />
            </motion.span>
            <span className="hidden md:inline">&nbsp;</span>
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Rudraksh
              <div className="absolute -bottom-7 left-0 h-1 w-full bg-gradient-to-r from-[#FFB6C1] via-[#9370DB] to-[#4169E1] animate-shimmer" />
              <div className="absolute -bottom-7 left-0 h-1 w-full bg-gradient-to-r from-[#FFB6C1] via-[#9370DB] to-[#4169E1] animate-shimmer" style={{ animationDelay: '0.5s' }} />
            </motion.span>
          </motion.h1>
          
          <div className="text-n-1/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed backdrop-blur-sm relative">
            <motion.p 
              className="mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science & AI Student
              <div className="absolute -left-10 -right-10 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -translate-y-1/2" />
            </motion.p>
            <div className="h-8 font-mono relative">
              <span className="inline-block">
                {text}
              </span>
              <span className="inline-block w-0.5 h-6 bg-n-1 ml-1 animate-blink"></span>
              <div className="absolute -left-20 -right-20 top-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -translate-y-1/2" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Button 
              href="https://www.canva.com/design/DAGdZ61TyAQ/Si6ZdQuLjDWudBjE-_i_LQ/view?utm_content=DAGdZ61TyAQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65dca02bb4" 
              white 
              className="font-mono tracking-wider text-base relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 inline-block">
                Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20 transition-transform duration-500 ease-out group-hover:-translate-x-full" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 animate-shimmer" />
              </div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Window Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-[1000px] mx-auto"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {/* Light Effects */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[40px] blur-[50px] bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-blue-500/25 rounded-full animate-pulse-slow" />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[70%] h-[30px] blur-[40px] bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 rounded-full animate-pulse-slow" />
          
          {/* Corner Lights */}
          <motion.div 
            className="absolute -top-10 -left-10 w-[100px] h-[100px] blur-[60px] bg-blue-500/20 rounded-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.3 : 0.2,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute -top-10 -right-10 w-[100px] h-[100px] blur-[60px] bg-purple-500/20 rounded-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.3 : 0.2,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-[100px] h-[100px] blur-[60px] bg-purple-500/20 rounded-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.3 : 0.2,
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-[100px] h-[100px] blur-[60px] bg-blue-500/20 rounded-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.3 : 0.2,
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />

          {/* Ambient Light Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
              animate={{
                y: [-20, 20],
                x: [-20, 20],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
              style={{
                top: `${Math.random() * 120 - 10}%`,
                left: `${Math.random() * 120 - 10}%`,
              }}
            />
          ))}
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-blue-500/20 group">
            {/* Edge Glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 blur-sm"
              animate={{
                opacity: isHovered ? 0.4 : 0.2,
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20 p-[1px] rounded-2xl">
              <div className="bg-n-8 rounded-2xl overflow-hidden">
                {/* Window Header with Glowing Border */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#2A2F42]/50 border-b border-[#2A2F42] relative">
                  {/* Header Glow */}
                  <motion.div 
                    className="absolute inset-x-0 -top-4 h-4 bg-gradient-to-b from-blue-500/10 to-transparent"
                    animate={{
                      opacity: isHovered ? 0.6 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500 relative cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-red-500/50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500 relative cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-yellow-500/50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                      />
                    </motion.div>
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500 relative cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-green-500/50"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                      />
                    </motion.div>
                  </div>
                  <div className="flex items-center px-3 py-1 rounded-md bg-[#1C1F2E]/50 relative group cursor-pointer">
                    {/* Title Glow */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0"
                      animate={{
                        opacity: isHovered ? 0.3 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-gray-400 text-sm relative z-10">portfolio.showcase</span>
                  </div>
                </div>
                
                {/* Night Silhouette Image */}
                <div className="aspect-video relative group">
                  <motion.img
                    src={backgroundImage}
                    alt="Night Silhouette"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Image Glow Effects */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"
                    animate={{
                      opacity: isHovered ? 0.4 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none"
                    animate={{
                      opacity: isHovered ? 0.4 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"
                    animate={{
                      opacity: isHovered ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
