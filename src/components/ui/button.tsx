import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

const variantClasses = {
  default: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'bg-transparent hover:bg-muted',
};

const sizeClasses = {
  default: 'px-6 py-3 text-base rounded-xl',
  sm: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-2xl',
  icon: 'p-2 rounded-full',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'default', size = 'default', ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        'font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';

export default Button; 