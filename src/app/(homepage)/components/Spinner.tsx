'use client';

import React, { useState, useEffect } from 'react';
import { Property } from 'csstype';
import { motion, useTransform, MotionValue } from 'motion/react';

interface SpinnerProps {
  parentScrollYProgress: MotionValue<number>;
}

const Spinner = ({ parentScrollYProgress }: SpinnerProps) => {
  const scrollDrivenRotate = useTransform(parentScrollYProgress, [0, 0.7, 1], [0, 230, 230]);

  const NUM_CARDS = 6;
  const RADIUS_VW_PERCENTAGE = 60;
  const [dynamicRadiusPx, setDynamicRadiusPx] = useState(0);

  useEffect(() => {
    const calculatePixelRadius = () => {
      const newPixelRadius = window.innerWidth * (RADIUS_VW_PERCENTAGE / 100);
      setDynamicRadiusPx(newPixelRadius);
    };

    calculatePixelRadius();
    window.addEventListener('resize', calculatePixelRadius);
    return () => window.removeEventListener('resize', calculatePixelRadius);
  }, [RADIUS_VW_PERCENTAGE]);

  const START_ANGLE_DEGREES = 130;
  const ANGLE_STEP_DEGREES = -180 / (NUM_CARDS - 1);

  const cards = Array(NUM_CARDS).fill(null);

  const transforms = cards.map((_, index) => {
    const angleDeg = START_ANGLE_DEGREES + index * ANGLE_STEP_DEGREES;
    const angleRad = angleDeg * (Math.PI / 180);
    const x = dynamicRadiusPx * Math.cos(angleRad);
    const y = dynamicRadiusPx * Math.sin(angleRad);
    const rotateDeg = angleDeg + 180;
    return {
      transform: `translate(${x}px, ${y}px) rotate(${rotateDeg}deg)`,
    };
  });

  return (
    <div 
      style={{
        position: 'relative',
        right: '-90%',
        top: '50vh'
      }}
    >
      <motion.div
        style={{
          transformOrigin: 'center',
          width: '100%',
          height: '100%',
          rotate: scrollDrivenRotate,
          position: 'sticky',
          y: '-50%',
        }}
      >
        {cards.map((_, index) => (
          <div
            key={index}
            style={{
              ...transforms[index],
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: '30vw',
              height: '22.5vw',
              marginLeft: '-15vw',
              marginTop: '-11.25vw',
              backgroundColor: 'rgba(229, 231, 235, 1)',
              padding: '1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Card {index + 1}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Spinner; 