'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { buttonVariants } from './Button'; // Only import variants
import AffinaIcon from './icons/AffinaIcon';

// Define simple variants for the button itself
const buttonMotionVariants = {
  initial: {},
  hover: {}
};

// Variants for the first star
const iconVariants = {
  initial: {
    opacity: 0,
    y: -40, 
    x: -35   
  },
  hover: {
    opacity: 1,
    y: -60, 
    x: -20,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

// Variants for the second star
const iconVariants2 = {
  initial: {
    opacity: 0,
    y: -20, 
    x: -20   
  },
  hover: {
    opacity: 1,
    y: -45, // Slightly different ending Y from the first star
    x: 0,  // Slightly different ending X from the first star
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.05 // Slight delay for the second star
    },
  },
};

// Variants for the third star
const iconVariants3 = {
  initial: {
    opacity: 0,
    y: -12, // Different starting Y
    x: -10  // Different starting X
  },
  hover: {
    opacity: 1,
    y: -12, // Different ending Y
    x: 15,  // Different ending X
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.1 // Slightly longer delay
    },
  },
};

// Variants for the fourth star
const iconVariants4 = {
  initial: {
    opacity: 0,
    y: 15,  // Different starting Y
    x: -180  // Different starting X
  },
  hover: {
    opacity: 1,
    y: 25, // Different ending Y
    x: -210, // Different ending X
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 0.15 // Slightly longer delay again
    },
  },
};

// Define AnimatedButtonProps based on buttonVariants and add children
export interface AnimatedButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, // Omit conflicting props if necessary
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode; // Ensure children is explicitly defined
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, variant, size, inverted, ...props }, ref) => {
    // Cast props to the expected type for motion.button
    const motionProps = props as Omit<HTMLMotionProps<"button">, keyof AnimatedButtonProps | 'ref'>;

    return (
      <motion.button
        ref={ref}
        className={clsx(
          buttonVariants({ variant, size, inverted, className }), // Restore button styles
          'relative inline-flex items-center' // Keep relative positioning, add inline-flex and items-center
        )}
        variants={buttonMotionVariants} // Add variants to the button
        whileHover="hover"
        initial="initial"
        {...motionProps} // Spread the correctly typed props
      >
        <span className="relative z-10">{children}</span>
        
        {/* First star */}
        <motion.div
          variants={iconVariants}
          className="absolute top-1/2 left-full -translate-y-1/2 z-0"
        >
          <AffinaIcon className="h-[0.8rem] w-[0.8rem]" />
        </motion.div>
        
        {/* Second star */}
        <motion.div
          variants={iconVariants2}
          className="absolute top-1/2 left-full -translate-y-1/2 z-0"
        >
          <AffinaIcon className="h-[1.2rem] w-[1.2rem]" />
        </motion.div>

        {/* Third star */}
        <motion.div
          variants={iconVariants3}
          className="absolute top-1/2 left-full -translate-y-1/2 z-0"
        >
          <AffinaIcon className="h-[1.5rem] w-[1.5rem]" />
        </motion.div>

        {/* Fourth star */}
        <motion.div
          variants={iconVariants4}
          className="absolute top-1/2 left-full -translate-y-1/2 z-0"
        >
          <AffinaIcon className="h-[0.7rem] w-[0.7rem]" /> { /* Smallest size */}
        </motion.div>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton }; 