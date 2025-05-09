'use client';

import { useEffect, useRef } from 'react';
import { motion, animate, useInView, useMotionValue, useTransform } from 'motion/react';

interface AnimatedNumberProps {
  targetNumber: number;
  className?: string;
  textAfter?: string;
}

export function AnimatedNumber({ targetNumber, className, textAfter = '' }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const count = useMotionValue(0);
  const animatedText = useTransform(count, latest => Math.round(latest).toString() + textAfter);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 1.5,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, count, textAfter]);

  return (
    <motion.span ref={ref} className={className}>
      {animatedText}
    </motion.span>
  );
} 