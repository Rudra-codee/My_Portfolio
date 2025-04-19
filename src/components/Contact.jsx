import React, { useState, useEffect, useRef } from 'react';
import galaxyVideo from '../assets/galaxy (1).mp4';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import ScrollAnimation from './ScrollAnimation';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [showQuickActions, setShowQuickActions] = useState(false);
  const formRef = useRef(null);
  
  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowQuickActions(true);
        } else {
          setShowQuickActions(false);
        }
      },
      { threshold: 0.1 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };
  
  const handleBlur = () => {
    setActiveField(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormErrors({});
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  const quickActions = [
    { icon: <FaEnvelope />, label: 'Email', action: () => window.location.href = 'mailto:rudraksh.dev@gmail.com' },
    { icon: <FaGithub />, label: 'GitHub', action: () => window.open('https://github.com/Rudra-codee', '_blank') },
    { icon: <FaLinkedin />, label: 'LinkedIn', action: () => window.open('https://linkedin.com/in/rudraksh-dev', '_blank') },
    { icon: <FaMapMarkerAlt />, label: 'Location', action: () => window.open('https://maps.google.com/?q=Delhi+NCR,+India', '_blank') }
  ];
  
  return (
    <section id="contact" className={`relative min-h-screen ${isDarkMode ? 'bg-[#0E1016]' : 'bg-gray-50'} py-20 transition-colors duration-500`}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={galaxyVideo} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isDarkMode 
            ? 'from-[#0E1016]/90 via-[#0E1016]/50 to-[#0E1016]/90' 
            : 'from-white/90 via-white/50 to-white/90'
        }`} />
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <ScrollAnimation className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-6xl font-bold mb-6">
              <TypeAnimation
                sequence={[
                  'Get In Touch',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className={`bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-blue-500 via-purple-500 to-pink-500' 
                    : 'from-blue-600 via-purple-600 to-pink-600'
                }`}
              />
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </ScrollAnimation>
          
          <div className="max-w-4xl mx-auto" ref={formRef}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <ScrollAnimation delay={0.2}>
                <div className="space-y-8">
                  <div className={`${
                    isDarkMode ? 'bg-[#1C1F2E]/40' : 'bg-white/80'
                  } backdrop-blur-sm rounded-2xl border ${
                    isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                  } p-8 hover:border-blue-500/30 transition-all duration-300 group`}>
                    <h3 className={`text-2xl font-semibold mb-6 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    } group-hover:text-blue-400 transition-colors`}>Contact Information</h3>
                    
                    <div className="space-y-6">
                      <ScrollAnimation delay={0.2}>
                        <div className="flex items-start space-x-4 group/item">
                          <div className={`w-10 h-10 rounded-xl ${
                            isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                          } flex items-center justify-center flex-shrink-0 group-hover/item:bg-blue-500/30 transition-colors`}>
                            <MdEmail className={`w-5 h-5 ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                          </div>
                          <div>
                            <h4 className={`${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            } font-medium group-hover/item:text-blue-400 transition-colors`}>Email</h4>
                            <a href="mailto:rudraksh.dev@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                              rudraksh.dev@gmail.com
                            </a>
                          </div>
                        </div>
                      </ScrollAnimation>
                      
                      <ScrollAnimation delay={0.4}>
                        <div className="flex items-start space-x-4 group/item">
                          <div className={`w-10 h-10 rounded-xl ${
                            isDarkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                          } flex items-center justify-center flex-shrink-0 group-hover/item:bg-purple-500/30 transition-colors`}>
                            <FaMapMarkerAlt className={`w-5 h-5 ${
                              isDarkMode ? 'text-purple-400' : 'text-purple-600'
                            }`} />
                          </div>
                          <div>
                            <h4 className={`${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            } font-medium group-hover/item:text-purple-400 transition-colors`}>Location</h4>
                            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Delhi NCR, India</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                      
                      <ScrollAnimation delay={0.6}>
                        <div className="flex items-start space-x-4 group/item">
                          <div className={`w-10 h-10 rounded-xl ${
                            isDarkMode ? 'bg-pink-500/20' : 'bg-pink-100'
                          } flex items-center justify-center flex-shrink-0 group-hover/item:bg-pink-500/30 transition-colors`}>
                            <FaClock className={`w-5 h-5 ${
                              isDarkMode ? 'text-pink-400' : 'text-pink-600'
                            }`} />
                          </div>
                          <div>
                            <h4 className={`${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            } font-medium group-hover/item:text-pink-400 transition-colors`}>Availability</h4>
                            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Open for freelance opportunities</p>
                          </div>
                        </div>
                      </ScrollAnimation>
                    </div>
                  </div>
                  
                  <ScrollAnimation delay={0.8}>
                    <div className={`${
                      isDarkMode ? 'bg-[#1C1F2E]/40' : 'bg-white/80'
                    } backdrop-blur-sm rounded-2xl border ${
                      isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                    } p-8 hover:border-purple-500/30 transition-all duration-300 group`}>
                      <h3 className={`text-2xl font-semibold mb-6 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                      } group-hover:text-purple-400 transition-colors`}>Connect With Me</h3>
                      
                      <div className="flex space-x-4">
                        <ScrollAnimation delay={0.2}>
                          <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/Rudra-codee" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`w-12 h-12 rounded-xl ${
                              isDarkMode ? 'bg-[#2A2F42]/50' : 'bg-gray-100'
                            } flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300`}
                          >
                            <FaGithub className={`w-6 h-6 ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            }`} />
                          </motion.a>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.4}>
                          <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://linkedin.com/in/rudraksh-dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`w-12 h-12 rounded-xl ${
                              isDarkMode ? 'bg-[#2A2F42]/50' : 'bg-gray-100'
                            } flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300`}
                          >
                            <FaLinkedin className={`w-6 h-6 ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            }`} />
                          </motion.a>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.6}>
                          <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://twitter.com/rudraksh_dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`w-12 h-12 rounded-xl ${
                              isDarkMode ? 'bg-[#2A2F42]/50' : 'bg-gray-100'
                            } flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300`}
                          >
                            <FaTwitter className={`w-6 h-6 ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            }`} />
                          </motion.a>
                        </ScrollAnimation>
                        <ScrollAnimation delay={0.8}>
                          <motion.a 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://instagram.com/rudraksh.dev" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`w-12 h-12 rounded-xl ${
                              isDarkMode ? 'bg-[#2A2F42]/50' : 'bg-gray-100'
                            } flex items-center justify-center hover:bg-pink-500/30 transition-all duration-300`}
                          >
                            <FaInstagram className={`w-6 h-6 ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            }`} />
                          </motion.a>
                        </ScrollAnimation>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
              
              {/* Contact Form */}
              <ScrollAnimation delay={0.4}>
                <div className={`${
                  isDarkMode ? 'bg-[#1C1F2E]/40' : 'bg-white/80'
                } backdrop-blur-sm rounded-2xl border ${
                  isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                } p-8`}>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className={`text-2xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>Send Me a Message</h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={toggleDarkMode}
                      className={`w-10 h-10 rounded-full ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                      } flex items-center justify-center transition-colors duration-300`}
                    >
                      {isDarkMode ? (
                        <FaSun className="w-5 h-5 text-yellow-400" />
                      ) : (
                        <FaMoon className="w-5 h-5 text-gray-600" />
                      )}
                    </motion.button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label 
                          htmlFor="name" 
                          className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                            activeField === 'name' 
                              ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                              : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          Your Name
                        </label>
                        <ScrollAnimation delay={0.2}>
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className={`relative transition-all duration-300 ${
                              activeField === 'name' ? 'scale-105' : ''
                            }`}
                          >
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => handleFocus('name')}
                              onBlur={handleBlur}
                              required
                              className={`w-full px-4 py-3 ${
                                isDarkMode ? 'bg-[#2A2F42]/30' : 'bg-gray-50'
                              } border rounded-xl ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                              } placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all ${
                                activeField === 'name' 
                                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                                  : isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                              }`}
                              placeholder="John Doe"
                            />
                            {activeField === 'name' && (
                              <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              />
                            )}
                            {formErrors.name && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-6 left-0 text-sm text-red-500"
                              >
                                {formErrors.name}
                              </motion.p>
                            )}
                          </motion.div>
                        </ScrollAnimation>
                      </div>
                      
                      <div className="relative">
                        <label 
                          htmlFor="email" 
                          className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                            activeField === 'email' 
                              ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                              : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          Your Email
                        </label>
                        <ScrollAnimation delay={0.4}>
                          <motion.div 
                            whileHover={{ scale: 1.02 }}
                            className={`relative transition-all duration-300 ${
                              activeField === 'email' ? 'scale-105' : ''
                            }`}
                          >
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => handleFocus('email')}
                              onBlur={handleBlur}
                              required
                              className={`w-full px-4 py-3 ${
                                isDarkMode ? 'bg-[#2A2F42]/30' : 'bg-gray-50'
                              } border rounded-xl ${
                                isDarkMode ? 'text-white' : 'text-gray-800'
                              } placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all ${
                                activeField === 'email' 
                                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                                  : isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                              }`}
                              placeholder="john@example.com"
                            />
                            {activeField === 'email' && (
                              <motion.div 
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              />
                            )}
                            {formErrors.email && (
                              <motion.p 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-6 left-0 text-sm text-red-500"
                              >
                                {formErrors.email}
                              </motion.p>
                            )}
                          </motion.div>
                        </ScrollAnimation>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="subject" 
                        className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                          activeField === 'subject' 
                            ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        Subject
                      </label>
                      <ScrollAnimation delay={0.6}>
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className={`relative transition-all duration-300 ${
                            activeField === 'subject' ? 'scale-105' : ''
                          }`}
                        >
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={() => handleFocus('subject')}
                            onBlur={handleBlur}
                            required
                            className={`w-full px-4 py-3 ${
                              isDarkMode ? 'bg-[#2A2F42]/30' : 'bg-gray-50'
                            } border rounded-xl ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            } placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all ${
                              activeField === 'subject' 
                                ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                                : isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                            }`}
                            placeholder="Project Inquiry"
                          />
                          {activeField === 'subject' && (
                            <motion.div 
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          )}
                          {formErrors.subject && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -bottom-6 left-0 text-sm text-red-500"
                            >
                              {formErrors.subject}
                            </motion.p>
                          )}
                        </motion.div>
                      </ScrollAnimation>
                    </div>
                    
                    <div className="relative">
                      <label 
                        htmlFor="message" 
                        className={`block text-sm font-medium mb-2 transition-all duration-300 ${
                          activeField === 'message' 
                            ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            : isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        Message
                      </label>
                      <ScrollAnimation delay={0.8}>
                        <motion.div 
                          whileHover={{ scale: 1.02 }}
                          className={`relative transition-all duration-300 ${
                            activeField === 'message' ? 'scale-105' : ''
                          }`}
                        >
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={handleBlur}
                            required
                            rows="5"
                            className={`w-full px-4 py-3 ${
                              isDarkMode ? 'bg-[#2A2F42]/30' : 'bg-gray-50'
                            } border rounded-xl ${
                              isDarkMode ? 'text-white' : 'text-gray-800'
                            } placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none ${
                              activeField === 'message' 
                                ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' 
                                : isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
                            }`}
                            placeholder="Tell me about your project..."
                          ></textarea>
                          {activeField === 'message' && (
                            <motion.div 
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                          )}
                          {formErrors.message && (
                            <motion.p 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -bottom-6 left-0 text-sm text-red-500"
                            >
                              {formErrors.message}
                            </motion.p>
                          )}
                        </motion.div>
                      </ScrollAnimation>
                    </div>
                    
                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-300 ${
                          isSubmitting
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30'
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            Send Message
                          </span>
                        )}
                      </motion.button>
                    </div>
                    
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400"
                        >
                          <p className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Message sent successfully! I'll get back to you soon.
                          </p>
                        </motion.div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400"
                        >
                          <p className="flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Something went wrong. Please try again later.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions Floating Card */}
      <AnimatePresence>
        {showQuickActions && (
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className={`fixed bottom-8 right-8 z-50 ${
              isDarkMode ? 'bg-[#1C1F2E]/90' : 'bg-white/90'
            } backdrop-blur-lg rounded-2xl shadow-xl border ${
              isDarkMode ? 'border-[#2A2F42]/50' : 'border-gray-200'
            } p-4`}
          >
            <div className="flex space-x-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={action.action}
                  className={`w-10 h-10 rounded-xl ${
                    isDarkMode ? 'bg-[#2A2F42]/50' : 'bg-gray-100'
                  } flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300`}
                  title={action.label}
                >
                  {action.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact; 