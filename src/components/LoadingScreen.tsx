"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedStarburst } from "./AnimatedStarburst"; // Assuming AnimatedStarburst is in the same directory

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // Add a small delay before fading out to ensure everything is rendered,
      // especially if AnimatedStarburst has its own intro animation.
      setTimeout(handleLoad, 2000);
    } else {
      const loadHandler = () => {
        // Add a small delay before fading out
        setTimeout(handleLoad, 2000);
      };
      window.addEventListener("load", loadHandler);

      return () => {
        window.removeEventListener("load", loadHandler);
      };
    }
  }, []);

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
            <AnimatedStarburst className="max-w-[200px] w-full" strokeWidth="8" />
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