'use client';

import { Heading } from '@/components/typography';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedButton } from '@/components/AnimatedButton';

const texts = ["For Customers", "For Users", "For Partners"];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const spanVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className="lg:py-24 xl:py-28 2xl:py-40">
      <Heading as="h1" className="lg:text-[5rem] lg:!leading-[5rem] xl:text-[6.5rem] xl:!leading-[6rem] 2xl:text-[9rem] 2xl:!leading-[8.5rem]">
        Loyalty & <br />Engagement <br />
        <AnimatePresence mode="wait">
          <motion.span
            key={texts[index]}
            className="text-primary inline-block" 
            variants={spanVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </Heading>

      <div className="mt-10">
        <AnimatedButton variant="ghost" size="large">
          Book a Demo
        </AnimatedButton>
      </div>
    </div>
  );
}; 