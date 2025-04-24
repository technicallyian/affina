import { type ClassValue, clsx } from "clsx"
import { twMerge, extendTailwindMerge } from "tailwind-merge"

// Custom merge function with extended configuration
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // Tell tailwind-merge that our custom text-size-* classes conflict with 
      // existing font-size utilities (like text-lg, text-xl)
      // and should be treated as part of the font-size group.
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
      // Optionally, you could also define line-height conflicts if needed
      // 'line-height': ['leading-h1', 'leading-h2', ..., 'leading-p2']
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  // Use the custom merge function
  return customTwMerge(clsx(inputs))
} 