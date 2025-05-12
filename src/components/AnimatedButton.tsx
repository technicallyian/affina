'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, type HTMLMotionProps, useAnimationControls, AnimatePresence } from 'motion/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { buttonVariants } from './Button'; // Only import variants
import AffinaIcon from './icons/AffinaIcon';
import { BlurredSphere } from './BlurredSphere'; // Import BlurredSphere

// Define simple variants for the button itself
const buttonMotionVariants = {
  initial: {},
  hover: {}
};

interface StarConfig {
  initialY: number;
  initialX: number;
  hoverY: number;
  hoverX: number;
  delay: number;
  iconClassName: string;
}

const starConfigs: StarConfig[] = [
  { initialY: -40, initialX: -35, hoverY: -60, hoverX: -20, delay: 0, iconClassName: 'h-[0.8rem] w-[0.8rem]' },
  { initialY: -20, initialX: -20, hoverY: -45, hoverX: 0, delay: 0.05, iconClassName: 'h-[1.2rem] w-[1.2rem]' },
  { initialY: -12, initialX: -10, hoverY: -12, hoverX: 15, delay: 0.1, iconClassName: 'h-[1.5rem] w-[1.5rem]' },
  //{ initialY: 15, initialX: -180, hoverY: 25, hoverX: -210, delay: 0.15, iconClassName: 'h-[0.7rem] w-[0.7rem]' },
];

// Define AnimatedButtonProps based on buttonVariants and add children
export interface AnimatedButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, // Omit conflicting props if necessary
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode; // Ensure children is explicitly defined
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, variant, size, inverted, ...props }, ref) => {
    const motionProps = props as Omit<HTMLMotionProps<"button">, keyof AnimatedButtonProps | 'ref'>;
    const starControls = starConfigs.map(() => useAnimationControls());
    const [isHovering, setIsHovering] = useState(false);
    const isHoveringRef = useRef(isHovering);

    useEffect(() => {
        isHoveringRef.current = isHovering;
    }, [isHovering]);

    const handleHoverStart = () => {
      setIsHovering(true);
      starControls.forEach((controls, index) => {
        const config = starConfigs[index];
        controls.start({
          opacity: 1, y: config.hoverY, x: config.hoverX,
          transition: { type: 'spring', stiffness: 260, damping: 20, delay: config.delay }
        }).then(() => {
          // Check ref inside .then() to ensure we have the latest hover state
          if (isHoveringRef.current) { 
            controls.start({
              // Loop sequence: hoverY -> hoverY-2 -> hoverY+2 -> hoverY
              y: [config.hoverY, config.hoverY - 2, config.hoverY + 2, config.hoverY],
              transition: {
                delay: 0.1 + index * 0.03, // Staggered pause after spring completes
                duration: 1.5, // Duration for one full up/down cycle
                ease: "easeInOut", 
                repeat: Infinity, 
                repeatType: "loop", // Ensures smooth repetition of the keyframes
              }
            });
          }
        });
      });
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      starControls.forEach((controls, index) => {
        const config = starConfigs[index];
        controls.stop(); // Stop any ongoing animations (like the loop)
        controls.start({ // Animate back to initial state
          opacity: 0,
          y: config.initialY,
          x: config.initialX,
          transition: { duration: 0.2 } // Quick fade out/move back
        });
      });
    };

    return (
      <motion.button
        ref={ref}
        className={clsx(
          buttonVariants({ variant, size, inverted, className }), 
          'relative inline-flex items-center',
          'transition-[background-image] duration-500 ease-in-out',
          'transition-[box-shadow,border-color,color] duration-300 ease-in-out',
          'hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:from-45% hover:to-[rgba(200,209,219,0.7)] hover:to-100%',
          'hover:shadow-[0px_0px_14px_rgba(255,255,255,0.5)]',
          'hover:border-white',
          'hover:text-foreground'
        )}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        {...motionProps} 
      >
        <span className="relative z-10">{children}</span>

        {starConfigs.map((config, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-full -translate-y-1/2 z-0"
            initial={{
              opacity: 0,
              y: config.initialY,
              x: config.initialX,
            }}
            animate={starControls[index]} // Use animation controls
          >
            <AffinaIcon className={config.iconClassName} />
          </motion.div>
        ))}

        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // Start invisible and slightly smaller
              animate={{ opacity: 1, scale: 1 }}   // Animate to visible and normal size
              exit={{ opacity: 0, scale: 0.8 }}    // Animate back to invisible and smaller
              transition={{ duration: 0.2 }}       // Animation duration
              // Ensure the motion div doesn't interfere with layout when invisible
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
            >
              {/* First Sphere (moved left) */}
              <BlurredSphere
                color="bg-secondary" 
                size="w-20 h-20"     
                opacity="opacity-25"
                blur="blur-xl"
                position="absolute top-1/2 left-1/2"
                transform="transform -translate-x-[90%] -translate-y-1/2" // Shifted left
                zIndex="z-0"
              />
              {/* Second Sphere (added right) */}
              <BlurredSphere
                color="bg-accent" // New color
                size="w-20 h-20"     
                opacity="opacity-25"
                blur="blur-xl"
                position="absolute top-1/2 left-1/2"
                transform="transform -translate-x-[10%] -translate-y-1/2" // Shifted right
                zIndex="z-0"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton }; 
