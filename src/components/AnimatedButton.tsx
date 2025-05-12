'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { buttonVariants } from './Button'; // Only import variants
import AffinaIcon from './icons/AffinaIcon';

// Define AnimatedButtonProps based on buttonVariants and add children
export interface AnimatedButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, // Omit conflicting props if necessary
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode; // Ensure children is explicitly defined
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, variant, size, inverted, ...props }, ref) => {
    const iconVariants = {
      initial: {
        opacity: 0,
        y: 0,
        x: 160
      },
      hover: {
        opacity: 1,
        y: -20, 
        x: 170,
        transition: {
          type: 'spring',
          stiffness: 260,
          damping: 20,
        },
      },
    };

    // Cast props to the expected type for motion.button
    const motionProps = props as Omit<HTMLMotionProps<"button">, keyof AnimatedButtonProps | 'ref'>;

    return (
      <motion.button
        ref={ref}
        className={clsx(
          buttonVariants({ variant, size, inverted, className }), // Restore button styles
          'relative inline-flex' // Keep relative positioning and add inline-flex
        )}
        whileHover="hover"
        initial="initial"
        {...motionProps} // Spread the correctly typed props
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          variants={iconVariants}
          className="absolute top-0 left-0 right-0 z-0"
          initial="initial"
          inherit={false}
        >
          <AffinaIcon className="h-[1rem] w-[1rem]" />
        </motion.div>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton }; 