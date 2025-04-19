import { useState, useEffect } from "react";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState({ hash: "" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleHashChange = () => {
      setPathname({ hash: window.location.hash });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigationClick = (url) => {
    setOpenNavigation(false);
    if (url === '#about') {
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-n-8/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      } ${
        openNavigation ? "bg-n-8" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 max-lg:py-4">
        <a 
          className="block w-[10rem] sm:w-[12rem] xl:mr-8 transition-transform hover:scale-105" 
          href="#home"
          onClick={() => handleNavigationClick('#home')}
        >
          <h1 className="text-[1.5rem] sm:text-[2rem] font-bold text-n-1 bg-gradient-to-r from-color-1 to-color-2 bg-clip-text text-transparent">
            Rudraksh
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8/95 backdrop-blur-lg lg:static lg:flex lg:mx-auto lg:bg-transparent transition-all duration-300`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={() => handleNavigationClick(item.url)}
                className={`block relative font-code text-xl sm:text-2xl uppercase transition-all duration-300 hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-4 sm:px-6 py-4 sm:py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12 hover:scale-105`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={() => setOpenNavigation(!openNavigation)}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
