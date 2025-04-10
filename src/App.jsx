import ButtonGradient from "./assets/svg/ButtonGradient";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SplineDesign from "./components/SplineDesign";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        {/* <Robo/> */}
        <SplineDesign/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
