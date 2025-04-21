import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Section from "./Section";
import { Button } from "./design/Button";
import robotImage from "../assets/hero/robot.jpeg";

const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Simplified particle state with static values
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 0.3 + 0.1,
    opacity: 0.2,
  }));

  // Memoized mouse move handler
  const handleMouseMove = useCallback((event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x * 15);
    mouseY.set(y * 15);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Simplified spring animations
  const springConfig = { damping: 20, stiffness: 100 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latest) => {
      rotateY.set(latest);
    });
    const unsubscribeY = mouseY.on("change", (latest) => {
      rotateX.set(-latest);
    });
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, []);

  // Optimized scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Typing animation
  const roles = ["Frontend Developer", "UI/UX Designer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);

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
      setDelta(100);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setDelta(150);
    }
  }, [text, currentRole, isDeleting]);

  return (
    <Section
      className="min-h-screen bg-n-8 relative overflow-hidden perspective-1000"
      crosses
      customPaddings
      id="hero"
      ref={containerRef}
    >
      {/* Simplified Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-n-1"
            style={{
              transform: `translate(${particle.x}%, ${particle.y}%)`,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
            animate={{
              y: [particle.y, particle.y - 100],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 3D Animated Background Elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity, perspective: 1000 }}
      >
        {/* 3D Animated Decorative Circles */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.6, 0.8, 0.6],
              rotateX: [0, 45, 0],
              rotateY: [0, 45, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-gradient-to-r from-[#FF5733] to-[#FF8C69]" 
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.6, 0.8, 0.6],
              rotateX: [0, -45, 0],
              rotateY: [0, -45, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
            className="absolute top-1/3 right-20 w-4 h-4 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#87CEEB]" 
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
              rotateZ: [0, 360, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-gradient-to-r from-[#50E3C2] to-[#7FFFD4]" 
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
        
        {/* 3D Animated Background Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotateX: [0, 10, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[140%] h-[140%] border border-n-2/10 rounded-full absolute"
            style={{ transformStyle: "preserve-3d" }}
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotateX: [0, -10, 0],
              rotateY: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="w-[120%] h-[120%] border border-n-2/10 rounded-full absolute"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="container relative z-1 max-w-[1200px] mx-auto pt-[8rem]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: "1000px",
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-n-1 mb-6 flex flex-col md:block"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            <span className="mb-6 md:mb-0">Hello, I'm</span>
            <span className="hidden md:inline">&nbsp;</span>
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Rudraksh
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-7 left-0 h-1 bg-gradient-to-r from-[#FFB6C1] via-[#9370DB] to-[#4169E1]" 
              />
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-n-1/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p 
              className="mb-2"
              whileHover={{ scale: 1.02, z: 20 }}
            >
              Computer Science & AI Student
            </motion.p>
            <motion.div 
              className="h-8 font-mono"
              style={{ perspective: 1000 }}
            >
              <motion.span 
                className="inline-block"
                animate={{ rotateX: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {text}
              </motion.span>
              <span className="inline-block w-0.5 h-6 bg-n-1 ml-1 animate-blink"></span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button 
              href="https://www.canva.com/design/DAGdZ61TyAQ/Si6ZdQuLjDWudBjE-_i_LQ/view?utm_content=DAGdZ61TyAQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65dca02bb4" 
              white 
              className="font-mono tracking-wider text-base relative overflow-hidden group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                className="relative z-10 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Resume
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20"
                initial={{ x: "100%" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Laptop Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative max-w-[1000px] mx-auto perspective-1000"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02, rotateX: -5 }}
        >
          <div className="relative rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <motion.div 
              className="bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20 p-[1px] rounded-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="bg-n-8 rounded-2xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Laptop Top Bar */}
                <motion.div 
                  className="h-[2rem] bg-[#1B1B1F] rounded-t-2xl flex items-center px-4"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.2, z: 20 }}
                      className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-pointer" 
                      style={{ transformStyle: "preserve-3d" }}
                    />
                    <motion.div 
                      whileHover={{ scale: 1.2, z: 20 }}
                      className="w-3 h-3 rounded-full bg-[#FFBD2E] cursor-pointer" 
                      style={{ transformStyle: "preserve-3d" }}
                    />
                    <motion.div 
                      whileHover={{ scale: 1.2, z: 20 }}
                      className="w-3 h-3 rounded-full bg-[#28C840] cursor-pointer" 
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </div>
                </motion.div>
                
                {/* Laptop Content */}
                <motion.div 
                  className="aspect-[16/9] relative overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.img
                    src={robotImage}
                    alt="Robot Hero"
                    className="w-full h-full object-cover object-center"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.5 }}
                    style={{ transformStyle: "preserve-3d" }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
