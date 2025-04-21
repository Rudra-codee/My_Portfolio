import { HeartOff } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WeeklyMoodTrend from './components/WeeklyMoodTrend';
import { useState, createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div>
          <Navbar />
          <Hero />
          <WeeklyMoodTrend />
          <Services />
          <About />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
