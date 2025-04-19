import Spline from '@splinetool/react-spline';
import {
  react,
  typescript,
  javascript,
  tailwind,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill10,
  skill11,
  skill12,
} from '../assets';

const skillsData = [
  { name: 'React', icon: react },
  { name: 'TypeScript', icon: typescript },
  { name: 'JavaScript', icon: javascript },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Node.js', icon: skill2 },
  { name: 'MongoDB', icon: skill3 },
  { name: 'Express.js', icon: skill4 },
  { name: 'Python', icon: skill5 },
  { name: 'Git', icon: skill6 },
  { name: 'AWS', icon: skill7 },
  { name: 'Docker', icon: skill8 },
  { name: 'Firebase', icon: skill9 },
  { name: 'Redux', icon: skill10 },
  { name: 'Next.js', icon: skill11 },
  { name: 'GraphQL', icon: skill12 },
];

const SkillCard = ({ name, icon }) => {
  return (
    <div className="group relative w-28 h-28 perspective-1000">
      <div className="absolute w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
        {/* Front of card */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-n-8/80 rounded-xl backdrop-blur-sm border border-n-1/10 shadow-lg">
          <div className="w-16 h-16 flex items-center justify-center mb-2">
            <img src={icon} alt={name} className="w-12 h-12 object-contain" />
          </div>
          <div className="text-n-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hover to flip
          </div>
        </div>
        {/* Back of card */}
        <div className="absolute w-full h-full flex items-center justify-center bg-n-1 rounded-xl transform rotate-y-180 backface-hidden shadow-lg">
          <div className="text-center">
            <span className="text-n-8 text-lg font-bold">{name}</span>
            <div className="mt-2 w-12 h-1 bg-n-8/20 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Pop = () => {
  return (
    <section className="relative w-full min-h-screen bg-n-8 py-20 overflow-hidden">
      {/* Background Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/PpFCHZqutOOfZkbO/scene.splinecode"
          className="w-full h-full"
        />
        <div className="absolute bottom-4 right-4 bg-n-8 p-2 rounded-lg shadow-lg z-10">
          <div className="w-32 h-10"></div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-n-1 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Pop;
