import React from 'react';
import { cn } from '@/lib/utils';

interface EmProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const Em: React.FC<EmProps> = ({ children, className, ...props }) => {
  return (
    <em className={cn('italic', className)} {...props}>
      {children}
    </em>
  );
};

export { Em };
export type { EmProps }; 