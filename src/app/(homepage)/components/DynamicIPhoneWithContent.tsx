'use client';

import { IPhone, IPhoneProps } from './iPhone';
import { motion, MotionProps, Transition } from 'motion/react';

interface ContentBoxProps {
  id: string | number;
  content: React.ReactNode;
  positionStyles: React.CSSProperties;
  motionProps?: MotionProps;
  className?: string;
}

interface DynamicIPhoneWithContentProps extends Omit<IPhoneProps, 'children'> {
  iphoneClassName?: string;
  contentBoxes: ContentBoxProps[];
  containerMotionProps?: MotionProps;
  containerClassName?: string;
  staggerDelaySeconds?: number;
}

export function DynamicIPhoneWithContent({
  iphoneClassName,
  contentBoxes,
  containerMotionProps,
  containerClassName,
  staggerDelaySeconds = 0.15,
  ...iphoneProps
}: DynamicIPhoneWithContentProps) {
  return (
    <motion.div {...containerMotionProps} className={containerClassName}>
      <IPhone {...iphoneProps} className={iphoneClassName}>
        {contentBoxes.map((box, index) => {
          const existingTransition = typeof box.motionProps?.transition === 'object' 
            ? box.motionProps.transition 
            : {};

          const calculatedTransition: Transition = {
            ...existingTransition,
            delay: (existingTransition?.delay || 0) + (index * staggerDelaySeconds)
          };

          return (
            <motion.div
              key={box.id}
              style={{ ...box.positionStyles, position: 'absolute' }}
              className={box.className}
              {...box.motionProps}
              transition={calculatedTransition}
            >
              {box.content}
            </motion.div>
          );
        })}
      </IPhone>
    </motion.div>
  );
} 