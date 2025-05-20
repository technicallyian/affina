'use client';

import React, { useState, useEffect, useRef, createRef } from 'react';
import { motion, useTransform, MotionValue } from 'motion/react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData1 from '../../../../public/homepage/spinner/01.json';
import animationData2 from '../../../../public/homepage/spinner/02.json';
import animationData3 from '../../../../public/homepage/spinner/03.json';
import animationData4 from '../../../../public/homepage/spinner/04.json';
import animationData5 from '../../../../public/homepage/spinner/05.json';
import animationData6 from '../../../../public/homepage/spinner/06.json';

const lottieAnimations = [
  animationData1,
  animationData2,
  animationData3,
  animationData4,
  animationData5,
  animationData6,
];

interface SpinnerProps {
  parentScrollYProgress: MotionValue<number>;
  activeIndex: number;
}

const SCROLL_RANGE_END = 0.85;
const ACTIVE_CARD_TARGET_ANGLE = 180;
const NUM_CARDS = 6;
const TOTAL_ROTATION_ANGLE = 180;

const Spinner = ({ parentScrollYProgress, activeIndex }: SpinnerProps) => {
  const scrollDrivenRotate = useTransform(
    parentScrollYProgress, 
    [0, SCROLL_RANGE_END], 
    [0, TOTAL_ROTATION_ANGLE], 
    { clamp: true }
  );

  const RADIUS_VW_PERCENTAGE = 60;
  const [dynamicRadiusPx, setDynamicRadiusPx] = useState(0);
  const lottieRefs = useRef(Array.from({ length: NUM_CARDS }, () => createRef<LottieRefCurrentProps>()));

  useEffect(() => {
    const calculatePixelRadius = () => {
      const newPixelRadius = window.innerWidth * (RADIUS_VW_PERCENTAGE / 100);
      setDynamicRadiusPx(newPixelRadius);
    };

    calculatePixelRadius();
    window.addEventListener('resize', calculatePixelRadius);
    return () => window.removeEventListener('resize', calculatePixelRadius);
  }, [RADIUS_VW_PERCENTAGE]);

  useEffect(() => {
    lottieRefs.current.forEach((refObject, idx) => {
      const lottieInstance = refObject.current;
      if (lottieInstance) {
        if (idx === activeIndex) {
          lottieInstance.play();
        } else {
          lottieInstance.pause();
        }
      }
    });
  }, [activeIndex]);

  const START_ANGLE_DEGREES = ACTIVE_CARD_TARGET_ANGLE;
  const ANGLE_STEP_DEGREES = -TOTAL_ROTATION_ANGLE / (NUM_CARDS - 1);

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
        top: '0'
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {index < lottieAnimations.length ? (
              <Lottie 
                lottieRef={lottieRefs.current[index]}
                animationData={lottieAnimations[index]} 
                loop={index === activeIndex}
                autoplay={false}
              />
            ) : (
              `Card ${index + 1}`
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Spinner; 