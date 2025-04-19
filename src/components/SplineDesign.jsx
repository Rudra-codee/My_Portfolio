import Spline from '@splinetool/react-spline';

export default function SplineDesign() {
  return (
    <div className="relative w-full h-[900px]">
      <Spline
        scene="https://prod.spline.design/95sByYJ5StWWWtXc/scene.splinecode" 
      />
      <div className="absolute bottom-3 right-3 w-44 h-12 bg-black rounded-lg z-10" />
    </div>
  );
}
