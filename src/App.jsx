import React, { useCallback, memo } from 'react';
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
import ErrorHandler from "./components/ErrorHandler";

// Memoized components to prevent unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedCollaboration = memo(Collaboration);
const MemoizedSkills = memo(Skills);
const MemoizedDesktop = memo(Desktop);
const MemoizedContact = memo(Contact);
const MemoizedResume = memo(Resume);
const MemoizedChatBot = memo(ChatBot);
const MemoizedErrorHandler = memo(ErrorHandler);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <MouseEffect />
      <MemoizedErrorHandler />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <MemoizedHeader />
            <Routes>
              <Route path="/" element={
                <>
                  <MemoizedHero />
                  <ScrollAnimation>
                    <MemoizedCollaboration />
                  </ScrollAnimation>
                  <ScrollAnimation>
                    <MemoizedSkills />
                  </ScrollAnimation>
                  <ScrollAnimation delay={0.4}>
                    <MemoizedDesktop />
                  </ScrollAnimation>
                  <ScrollAnimation delay={0.5}>
                    <MemoizedContact />
                  </ScrollAnimation>
                </>
              } />
              <Route path="/resume" element={<MemoizedResume />} />
            </Routes>
            <ButtonGradient />
            <MemoizedChatBot />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
