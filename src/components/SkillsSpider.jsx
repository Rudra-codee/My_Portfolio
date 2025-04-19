import { javascript, typescript, react, tailwind } from "../assets";

const SkillsSpider = () => {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[600px] rounded-[40px] overflow-hidden bg-[#1B0B3B] p-10">
          {/* Purple gradient arc */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-600/30 to-transparent rounded-t-[40px]" />
          
          {/* Stars background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Central Skills text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white rounded-full px-8 py-4 shadow-lg">
              <h2 className="text-2xl font-bold text-black">Skills</h2>
            </div>
          </div>

          {/* Skill icons with connecting lines */}
          <div className="relative h-full">
            {/* JavaScript */}
            <div className="absolute left-[15%] top-[30%] flex flex-col items-center">
              <img src={javascript} alt="JavaScript" className="w-16 h-16" />
              <div className="absolute h-[100px] w-[2px] bg-red-500 rotate-45 origin-top" />
            </div>

            {/* React */}
            <div className="absolute left-[35%] top-[20%] flex flex-col items-center">
              <img src={react} alt="React" className="w-16 h-16" />
              <div className="absolute h-[120px] w-[2px] bg-red-500 rotate-[30deg] origin-top" />
            </div>

            {/* CSS3 */}
            <div className="absolute right-[35%] top-[20%] flex flex-col items-center">
              <img src={tailwind} alt="CSS3" className="w-16 h-16" />
              <div className="absolute h-[120px] w-[2px] bg-red-500 -rotate-[30deg] origin-top" />
            </div>

            {/* TypeScript */}
            <div className="absolute right-[15%] top-[30%] flex flex-col items-center">
              <img src={typescript} alt="TypeScript" className="w-16 h-16" />
              <div className="absolute h-[100px] w-[2px] bg-red-500 -rotate-45 origin-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSpider; 