import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setShowGreeting(true);
          }, 500);
          setTimeout(() => {
            onLoadingComplete();
          }, 2500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-n-8"
    >
      {!showGreeting ? (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Center loading animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-40 h-40 relative mx-auto mb-8">
              <svg
                className="animate-spin-slow absolute inset-0"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset={283 - (283 * progress) / 100}
                  className="transform -rotate-90 origin-center"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4A90E2" />
                    <stop offset="0.5" stopColor="#B06AB3" />
                    <stop offset="1" stopColor="#4A90E2" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-4xl font-bold text-n-1"
                >
                  {progress}%
                </motion.span>
              </div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-n-1/50 font-code text-lg"
            >
              Loading amazing things...
            </motion.h2>
          </motion.div>

          {/* Bottom right percentage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-8 right-8 font-mono text-n-1/50"
          >
            {progress.toString().padStart(3, "0")}
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-6"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-n-1 mb-4"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-n-1/50 text-lg md:text-xl"
          >
            Let's explore my creative journey together
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Loader; 