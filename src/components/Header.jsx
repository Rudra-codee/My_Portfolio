import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (event, url) => {
    event.preventDefault();
    
    // Special case for Projects - redirect to portfolio.showcase
    if (url === "#projects") {
      const desktopSection = document.querySelector("#desktop");
      if (desktopSection) {
        if (openNavigation) {
          setOpenNavigation(false);
          enablePageScroll();
        }
        
        setTimeout(() => {
          desktopSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 150);
      }
      return;
    }
    
    // Special case for Home - scroll to top
    if (url === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    
    const element = document.querySelector(url);
    
    if (element) {
      if (openNavigation) {
        setOpenNavigation(false);
        enablePageScroll();
      }

      // Add a small delay for mobile menu to close
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a 
          className="block w-[12rem] xl:mr-8" 
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
        >
          <h1 className="text-[2rem] font-bold text-n-1">Rudraksh</h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={(e) => handleClick(e, item.url)}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="hidden lg:flex px-6 py-2 rounded-full font-mono text-sm text-n-1 border border-transparent bg-gradient-to-r from-[#4A90E2]/20 via-[#B06AB3]/20 to-[#4A90E2]/20 hover:border-[#4A90E2]/50 transition-all duration-300 relative group"
          >
            <span className="relative z-10">HIRE ME</span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#4A90E2]/10 via-[#B06AB3]/10 to-[#4A90E2]/10" />
          </a>

          <Button
            className="lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;