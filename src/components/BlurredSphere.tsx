import clsx from 'clsx';
import React from 'react';

type BlurredSphereProps = {
  className?: string;
  color: string; // e.g., 'bg-teal-400'
  size: string; // e.g., 'w-64 h-64' or 'w-[600px] h-[600px]'
  opacity: string; // e.g., 'opacity-30'
  blur: string; // e.g., 'blur-3xl' or 'blur-[100px]'
  position: string; // e.g., 'absolute top-0 left-1/2'
  transform?: string; // e.g., 'transform -translate-x-1/2 -translate-y-1/4'
  zIndex: string; // e.g., 'z-0'
};

export const BlurredSphere: React.FC<BlurredSphereProps> = ({
  className,
  color,
  size,
  opacity,
  blur,
  position,
  transform,
  zIndex,
}) => {
  return (
    <div
      className={clsx(
        'rounded-full filter',
        color,
        size,
        opacity,
        blur,
        position,
        transform,
        zIndex,
        className
      )}
    />
  );
}; 