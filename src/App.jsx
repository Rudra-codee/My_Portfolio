import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import ChatBot from "./components/ChatBot";
import Skills from "./components/Skills";
import Desktop from "./components/Desktop";
import Contact from "./components/Contact";
import ScrollAnimation from "./components/ScrollAnimation";
import MouseEffect from "./components/MouseEffect";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <MouseEffect />
        <Header />
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <Collaboration />
        </ScrollAnimation>
        <ScrollAnimation delay={0.3}>
          <Skills />
        </ScrollAnimation>
        <ScrollAnimation delay={0.4}>
          <Desktop />
        </ScrollAnimation>
        <ScrollAnimation delay={0.5}>
          <Contact />
        </ScrollAnimation>
      </div>
      <ButtonGradient />
      <ChatBot />
    </>
  );
};

export default App;
