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

type AllowedTextTags = 'p' | 'span' | 'div' | 'label';

// Props that are specific to our Text component
interface CustomTextProps {
  size?: TextSize;
  weight?: FontWeight;
  color?: TextColor;
  children: React.ReactNode;
  className?: string;
}

// Utility to make 'align' optional if it exists on P
// This specifically addresses issues where @types/react might define `align` as required for HTMLParagraphElement.
type OptionalAlign<P> = 'align' extends keyof P
  ? Omit<P, 'align'> & { align?: P['align'] }
  : P;

// Determine the correct props type for the given tag, applying OptionalAlign for paragraphs
type PropsForTag<T extends AllowedTextTags> = T extends 'p'
  ? OptionalAlign<React.ComponentPropsWithoutRef<'p'>>
  : React.ComponentPropsWithoutRef<T>;

// Final TextProps type for external and internal use
type TextProps<T extends AllowedTextTags = 'p'> = {
  as?: T;
} & CustomTextProps & Omit<PropsForTag<T>, keyof CustomTextProps>;

const Text = <T extends AllowedTextTags = 'p'>(
  {
    as,
    size = 'p2',
    weight = 'normal',
    color = 'foreground',
    children,
    className,
    ...rest // These are the native HTML props, correctly typed by Omit<PropsForTag<T>, keyof CustomTextProps>
  }: TextProps<T>
) => {
  const ComponentToRender = as || 'p';

  const sizeClass = textSizeClasses[size!];
  const weightClass = fontWeightClasses[weight!];
  const colorClass = colorClasses[color!];

  return (
    <ComponentToRender
      className={cn('font-sans', sizeClass, weightClass, colorClass, className)}
      {...rest as React.HTMLAttributes<HTMLElement>}
    >
      {children}
    </ComponentToRender>
  );
};

export { Text };
export type { TextProps }; 