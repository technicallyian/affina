'use client';

import { useRef } from 'react';
import { motion, useScroll, MotionValue } from 'motion/react';
import Spinner from './components/Spinner';

const Platforms = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'], // Stick from the start of the container to the end
  });

  // We might need useTransform later if we want to animate based on scrollYProgress

  return (
    <div ref={containerRef} className="relative h-[500vh]"> {/* Ensure this is the scrollable container */}
      <motion.div 
        style={{ 
          position: 'sticky', 
          top: 0, // Stick to the top of the viewport
          // We can adjust 'top' if there's a header/navbar, e.g., top: 'var(--header-height)'
        }}
        className="h-screen" // The sticky element itself should probably have a defined height, e.g., screen height
      >
        <div className="grid grid-cols-2 h-full">
          <div>sdfg</div>
          <div>
            <Spinner parentScrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>

      {/* This div is outside the sticky element, but within the scrollable container */}
      {/* It will appear after the 400vh scroll */}
      <div className="w-full absolute bottom-0">
        <img src="/bgShape.svg" className="w-full" />
      </div>
    </div>
  );
};

export default Platforms; 