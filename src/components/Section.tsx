import React from 'react';
import { cn } from '@/lib/utils';

// Define mapping for section sizes to Tailwind vertical padding classes
const paddingYSizeClasses = {
  1: 'py-4', // Small padding
  2: 'py-8', // Medium padding
  3: 'py-12', // Large padding (Default)
  4: 'py-16', // Extra large padding
};

// Define mapping for section sizes to Tailwind horizontal padding classes
const paddingXSizeClasses = {
  0: 'px-0',  // No padding
  1: 'px-4',  // Small padding (Default)
  2: 'px-8',  // Medium padding
  3: 'px-12', // Large padding
  4: 'px-16', // Extra large padding
};

type PaddingYSize = keyof typeof paddingYSizeClasses;
type PaddingXSize = keyof typeof paddingXSizeClasses;

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  pySize?: PaddingYSize;
  pxSize?: PaddingXSize;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ pySize = 3, pxSize = 1, children, className, ...props }) => {
  const pySizeClass = paddingYSizeClasses[pySize];
  const pxSizeClass = paddingXSizeClasses[pxSize];

  return (
    <section className={cn(pySizeClass, pxSizeClass, className)} {...props}>
      {children}
    </section>
  );
};

export { Section };
export type { SectionProps, PaddingYSize, PaddingXSize }; 