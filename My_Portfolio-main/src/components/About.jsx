import React from 'react';
import { motion } from 'framer-motion';
import { aboutText, aboutContent } from '../constants';
import Section from './Section';

const About = () => {
  return (
    <Section
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
      crosses
      id="about"
    >
      <div className="container relative z-2 max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-n-1 mb-6"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-n-3 text-lg md:text-xl max-w-3xl mx-auto"
          >
            {aboutText}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {aboutContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-n-7 rounded-2xl p-8 hover:bg-n-6 transition-colors"
            >
              <h3 className="text-2xl font-bold text-n-1 mb-4">{item.title}</h3>
              <p className="text-n-3">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-gradient-to-r from-[#FF5733] to-[#FF8C69]"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#87CEEB]"
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1 
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default About; 