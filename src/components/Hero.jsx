import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";
import { Button } from "./design/Button";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-n-8 overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <div className="relative mb-6 md:mb-8 lg:mb-10">
            <h1 className="h1 text-center text-n-1 text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-tight">
              Hi, I'm Rudraksh
              <br />
              <span className="inline-block relative">
                Software Developer
                <img
                  src={heroIcons[1]}
                  className="absolute w-full left-0 top-[-10%] md:top-[-20%]"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <div className="absolute top-[-10%] left-0 w-full h-full pointer-events-none">
              <ScrollParallax isAbsolutelyPositioned>
                <img
                  src={heroIcons[0]}
                  className="absolute top-[60%] left-[50%] w-[12rem] md:w-[18rem] transform -translate-x-1/2"
                  alt="Hero decoration"
                />
              </ScrollParallax>
            </div>
          </div>

          <p className="body-1 max-w-3xl mx-auto mb-8 text-n-2 text-base md:text-lg lg:text-xl">
            I'm a passionate software developer with expertise in building modern web applications. Let's create something amazing together!
          </p>

          <Button href="#contact" white className="md:text-lg">
            Get in touch
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] overflow-hidden">
              <div className="h-[1.4rem] bg-[#1B1B1F] rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src="/images/hero/hero.jpg"
                  className="w-full h-full object-cover object-center scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="Hero"
                />

                <ScrollParallax
                  className="absolute top-0 left-0 w-full h-full"
                  isAbsolutelyPositioned
                >
                  <Generating className="absolute left-4 right-4 bottom-5 md:left-auto md:right-6 md:bottom-8 md:w-[31rem]" />
                </ScrollParallax>

                <ScrollParallax
                  className="absolute top-0 left-0 w-full h-full"
                  isAbsolutelyPositioned
                >
                  <img
                    src={heroIcons[2]}
                    className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay opacity-40"
                    width={1024}
                    height={490}
                    alt="Hero glow"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>

          <div className="absolute -top-[54%] left-[46%] w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroIcons[3]}
              className="w-full opacity-60 mix-blend-color-dodge"
              width={1440}
              height={1800}
              alt="hero background"
            />
          </div>
        </div>
      </div>
      <LeftLine />
      <RightLine />
    </Section>
  );
};

export default Hero;
