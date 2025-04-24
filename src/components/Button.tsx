import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import type { LucideProps } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary-dark text-white hover:bg-primary',
        ghost:
          'border-2 border-primary-dark bg-transparent text-primary-dark hover:border-primary hover:text-primary',
        // Add other variants like destructive, outline, secondary, link etc. if needed
      },
      size: {
        // Using exact px/py values as requested
        large: 'rounded-full px-[40px] py-[22px] text-[20px]',
        medium: 'rounded-full px-[32px] py-[16px]',    // Updated padding, removed h-9
        small: 'rounded-full px-[28px] py-[12px]',     // Updated padding, removed h-8
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: React.ReactElement<LucideProps>;
  iconRight?: React.ReactElement<LucideProps>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconLeft, iconRight, children, ...props }, ref) => {
    const IconLeft = iconLeft ? React.cloneElement(iconLeft, { size: '1em' }) : null;
    const IconRight = iconRight ? React.cloneElement(iconRight, { size: '1em' }) : null;

    return (
      <button
        className={clsx(buttonVariants({ variant, size, className }), {
          'gap-2': (IconLeft || IconRight) && children, // Add gap if icon and text are present
        })}
        ref={ref}
        {...props}
      >
        {IconLeft}
        {children}
        {IconRight}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants }; 