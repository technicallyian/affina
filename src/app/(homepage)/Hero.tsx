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
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const spanVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <div className="py-40">
      <Heading as="h1" className="text-[130px] !leading-[130px]">
        Loyalty & Engagement <br />
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