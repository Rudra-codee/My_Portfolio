import { check, github } from "../assets";
import { aboutContent, aboutText, techStack } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses id="about">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            About Me
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {aboutContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Resume</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {aboutText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={github}
                    width={48}
                    height={48}
                    alt="GitHub"
                    loading="lazy"
                    className="will-change-transform"
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0">
              <ul className="relative w-full h-full animate-slow-spin will-change-transform backface-visibility-hidden">
                {techStack.map((tech, index) => {
                  const angle = (index * 360) / techStack.length;
                  return (
                    <li
                      key={tech.id}
                      className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                      style={{
                        transform: `rotate(${angle}deg)`
                      }}
                    >
                      <div
                        className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl will-change-transform"
                      >
                        <img
                          className="m-auto"
                          width={tech.width}
                          height={tech.height}
                          alt={tech.title}
                          src={tech.icon}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
