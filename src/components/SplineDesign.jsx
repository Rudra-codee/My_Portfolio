import Spline from '@splinetool/react-spline';
import ChatBot from './ChatBot';

export default function SplineDesign() {
  return (
    <div className="relative w-full h-[900px]">
      <Spline
        scene="https://prod.spline.design/95sByYJ5StWWWtXc/scene.splinecode" 
      />
      <ChatBot />
    </div>
  );
}
