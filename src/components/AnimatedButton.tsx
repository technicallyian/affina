'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, type HTMLMotionProps, useAnimationControls, AnimatePresence } from 'motion/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { buttonVariants } from './Button';
import AffinaIcon from './icons/AffinaIcon';
import { BlurredSphere } from './BlurredSphere'; 


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

const smallStarConfigs: StarConfig[] = [
  { initialY: -20, initialX: -25, hoverY: -30, hoverX: -10, delay: 0, iconClassName: 'h-[0.6rem] w-[0.6rem]' },
  { initialY: -10, initialX: -15, hoverY: -25, hoverX: 0, delay: 0.05, iconClassName: 'h-[0.9rem] w-[0.9rem]' },
  { initialY: -6, initialX: -8, hoverY: -8, hoverX: 10, delay: 0.1, iconClassName: 'h-[1.1rem] w-[1.1rem]' },
];

export interface AnimatedButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

const AnimatedButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedButtonProps
>(({ className, children, variant, size, inverted, ...props }, ref) => {
  const {
    onHoverStart,
    onHoverEnd,
    ...restProps 
  } = props as AnimatedButtonProps & HTMLMotionProps<"button">;

  const currentStarConfigs = size === 'small' ? smallStarConfigs : starConfigs;
  const starControls = currentStarConfigs.map(() => useAnimationControls());
  const [isHovering, setIsHovering] = useState(false);
  const isHoveringRef = useRef(isHovering);

  useEffect(() => {
      isHoveringRef.current = isHovering;
  }, [isHovering]);

  const handleHoverStartInternal = () => {
    setIsHovering(true);
    starControls.forEach((controls, index) => {
      const config = currentStarConfigs[index];
      controls.start({
        opacity: 1, y: config.hoverY, x: config.hoverX,
        transition: { type: 'spring', stiffness: 260, damping: 20, delay: config.delay }
      }).then(() => {
        if (isHoveringRef.current) { 
          controls.start({
            y: [config.hoverY, config.hoverY - 2, config.hoverY + 2, config.hoverY],
            transition: {
              delay: 0.1 + index * 0.03,
              duration: 1.5,
              ease: "easeInOut", 
              repeat: Infinity, 
              repeatType: "loop", 
            }
          });
        }
      });
    });
  };

  const handleHoverEndInternal = () => {
    setIsHovering(false);
    starControls.forEach((controls, index) => {
      const config = currentStarConfigs[index];
      controls.stop(); 
      controls.start({ 
        opacity: 0,
        y: config.initialY,
        x: config.initialX,
        transition: { duration: 0.2 }
      });
    });
  };

  return (
    <div className="relative inline-flex items-center justify-center isolate">
      <motion.button
        ref={ref}
        className={clsx(
          buttonVariants({ variant, size, inverted, className }),
          "relative inline-flex items-center group",
          "transition-[background-image] duration-500 ease-in-out",
          "transition-[box-shadow,border-color,color] duration-300 ease-in-out",
          "hover:bg-gradient-to-b hover:from-[rgba(255,255,255,0.7)] hover:from-45% hover:to-[rgba(200,209,219,0.7)] hover:to-100%",
          "hover:shadow-[0px_0px_14px_rgba(255,255,255,0.5)]",
          "hover:border-white",
          "z-10"
        )}
        onHoverStart={handleHoverStartInternal}
        onHoverEnd={handleHoverEndInternal}
        {...restProps}
      >
        <span className="relative z-20 group-hover:text-foreground">{children}</span>

        {currentStarConfigs.map((config, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-full -translate-y-1/2 z-10"
            initial={{
              opacity: 0,
              y: config.initialY,
              x: config.initialX,
            }}
            animate={starControls[index]}
          >
            <AffinaIcon className={config.iconClassName} />
          </motion.div>
        ))}
      </motion.button>

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <BlurredSphere
              color="bg-secondary"
              size={size === 'small' ? "w-8 h-8" : "w-20 h-20"}
              opacity="opacity-100"
              blur={size === 'small' ? "blur-lg" : "blur-xl"}
              position={size === 'small' ? "absolute top-[25%] left-[20%]" : "absolute top-[30%] left-[20%]"}
              zIndex="z-0"
            />
            <BlurredSphere
              color="bg-accent"
              size={size === 'small' ? "w-8 h-8" : "w-20 h-20"}
              opacity="opacity-100"
              blur={size === 'small' ? "blur-lg" : "blur-xl"}
              position={size === 'small' ? "absolute top-[25%] right-[20%]" : "absolute top-[30%] right-[20%]"}
              zIndex="z-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton }; 
