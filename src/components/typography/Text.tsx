import React from 'react';
import { cn } from '@/lib/utils';
import { fontWeightClasses, colorClasses, FontWeight, TextColor } from './utils'; // Import shared utils

// Define mapping for text sizes to base Tailwind classes (size and line height)
const textSizeClasses = {
  p1: 'text-size-p1 leading-normal',
  p2: 'text-size-p2 leading-p2',
  p3: 'text-size-p3 leading-normal',
};

// Define mapping for font weights
// const fontWeightClasses = { ... };

// Define mapping for colors (adjust keys based on your tailwind.config.ts)
// const colorClasses = { ... };

type TextSize = keyof typeof textSizeClasses;
// type FontWeight = keyof typeof fontWeightClasses;
// type TextColor = keyof typeof colorClasses;

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize;
  weight?: FontWeight;
  color?: TextColor;
  as?: 'p' | 'span' | 'div' | 'label';
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  size = 'p2',
  weight = 'normal', // Default to normal weight
  color = 'foreground', // Set default color
  as: Component = 'p',
  children,
  className,
  ...props
}) => {
  const sizeClass = textSizeClasses[size];
  const weightClass = fontWeightClasses[weight];
  const colorClass = colorClasses[color]; // Apply the (default or provided) color class

  return (
    <Component className={cn('font-sans', sizeClass, weightClass, colorClass, className)} {...props}>
      {children}
    </Component>
  );
};

export { Text };
export type { TextProps }; 