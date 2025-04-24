// Define mapping for font weights
export const fontWeightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
};

// Define mapping for colors based on tailwind.config.ts
export const colorClasses = {
  primary: 'text-primary',
  'primary-dark': 'text-primary-dark',
  secondary: 'text-secondary',
  accent: 'text-accent',
  'foreground-strong': 'text-foreground-strong',
  foreground: 'text-foreground',
  'foreground-medium': 'text-foreground-medium',
  'foreground-muted': 'text-foreground-muted',
  // Add other appropriate colors from your config here if needed
  // e.g., 'primary-dark': 'text-primary-dark'
};

export type FontWeight = keyof typeof fontWeightClasses;
export type TextColor = keyof typeof colorClasses; 