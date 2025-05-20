import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
          'text-size-h1', 
          'text-size-h2', 
          'text-size-h3', 
          'text-size-h4', 
          'text-size-h5', 
          'text-size-h6', 
          'text-size-p1', 
          'text-size-p2', 
          'text-size-p3'
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
} 