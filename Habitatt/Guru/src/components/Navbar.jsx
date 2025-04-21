import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const handleLogin = () => {
    window.location.href = 'https://fitora-brown.vercel.app/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Habitat</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-buttons">
          <button 
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="navbar-button" 
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
