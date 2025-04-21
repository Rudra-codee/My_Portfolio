import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ErrorHandler = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args) => {
      originalError.apply(console, args);
      setShowError(true);
    };

    console.warn = (...args) => {
      originalWarn.apply(console, args);
      setShowError(true);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <AnimatePresence>
      {showError && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-n-8 border border-n-6 rounded-lg p-4 shadow-lg max-w-sm">
            <h3 className="text-n-1 font-bold mb-2">Oops! Something went wrong</h3>
            <p className="text-n-2 mb-4">
              We encountered an error. Please reload the page to continue.
            </p>
            <button
              onClick={handleReload}
              className="w-full bg-n-6 hover:bg-n-5 text-n-1 font-mono py-2 px-4 rounded transition-colors"
            >
              Reload Page
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ErrorHandler; 