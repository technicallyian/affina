"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedStarburst } from "./AnimatedStarburst";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [starburstAnimating, setStarburstAnimating] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const pageLoadAndTimeoutComplete = () => {
      setStarburstAnimating(false);
    };

    if (document.readyState === "complete") {
      timeoutId = setTimeout(pageLoadAndTimeoutComplete, 2000);
    } else {
      const loadHandler = () => {
        timeoutId = setTimeout(pageLoadAndTimeoutComplete, 2000);
      };
      window.addEventListener("load", loadHandler);

      return () => {
        window.removeEventListener("load", loadHandler);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const handleStarburstAnimationComplete = () => {
    setLoading(false); 
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-dark"
        >
          <div className="relative flex items-center justify-center">
            <AnimatedStarburst
              className="max-w-[200px] w-full"
              strokeWidth="8"
              isDrawing={starburstAnimating}
              onAnimationComplete={handleStarburstAnimationComplete}
            />
            <p className="absolute inset-0 flex items-center justify-center text-sm text-white">
              Loading...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 