import React from 'react';
import { cn } from '@/lib/utils';

interface StrongProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Strong: React.FC<StrongProps> = ({ children, className, ...props }) => {
  return (
    <strong className={cn('font-bold', className)} {...props}>
      {children}
    </strong>
  );
};

export { Strong };
export type { StrongProps }; 