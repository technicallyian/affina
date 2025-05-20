import React from 'react';
import { cn } from '@/lib/utils'; // Restored cn import
import { fontWeightClasses, colorClasses, FontWeight, TextColor as HeadingColor } from './utils'; // Import shared utils and alias TextColor

// Define mapping for heading levels to base Tailwind classes (size and line height)
const headingSizeClasses = {
  1: 'text-size-h1 leading-h1',
  2: 'text-size-h2 leading-h2',
  3: 'text-size-h3 leading-h3',
  4: 'text-size-h4 leading-h4',
  5: 'text-size-h5 leading-h5',
  6: 'text-size-h6 leading-h6',
};

// // Reusing font weight mapping - Removed, now imported
// const fontWeightClasses = { ... };

// // Reusing color mapping - Removed, now imported
// const colorClasses = { ... };

type HeadingLevel = keyof typeof headingSizeClasses;
// type FontWeight = keyof typeof fontWeightClasses; // Removed, now imported
// type HeadingColor = keyof typeof colorClasses; // Removed, now imported

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  weight?: FontWeight;
  color?: HeadingColor;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  level = 2,
  weight = 'bold',
  color,
  as,
  children,
  className,
  ...props
}) => {
  const Component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = as ?? `h${level}`;
  const sizeClass = headingSizeClasses[level];
  const weightClass = fontWeightClasses[weight];
  const finalColorClass = color ? colorClasses[color] : colorClasses['primary-dark'];

  // Restore usage of cn
  return (
    <Component className={cn('font-sans', sizeClass, weightClass, finalColorClass, className)} {...props}>
      {children}
    </Component>
  );
};

export { Heading };
export type { HeadingProps }; 