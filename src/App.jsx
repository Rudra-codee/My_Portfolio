import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Skills from "./components/Skills";
import Desktop from "./components/Desktop";
import Contact from "./components/Contact";
import ScrollAnimation from "./components/ScrollAnimation";
import MouseEffect from "./components/MouseEffect";
import Loader from "./components/Loader";
import Resume from './components/Resume';
import ChatBot from "./components/ChatBot";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <MouseEffect />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ScrollAnimation>
                    <Collaboration />
                  </ScrollAnimation>
                  <ScrollAnimation>
                    <Skills />
                  </ScrollAnimation>
                  <ScrollAnimation delay={0.4}>
                    <Desktop />
                  </ScrollAnimation>
                  <ScrollAnimation delay={0.5}>
                    <Contact />
                  </ScrollAnimation>
                </>
              } />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            <ButtonGradient />
            <ChatBot />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
