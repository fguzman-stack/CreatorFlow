import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'gradient';
  padding?: 'default' | 'large' | 'small';
}

const Section = ({ 
  children, 
  className, 
  variant = 'default',
  padding = 'default'
}: SectionProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'muted':
        return 'bg-muted/30';
      case 'gradient':
        return 'hero-gradient text-white';
      default:
        return 'bg-background';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'large':
        return 'py-20 md:py-32 lg:py-40';
      case 'small':
        return 'py-8 md:py-12';
      default:
        return 'section-padding';
    }
  };

  return (
    <section className={cn(
      getPaddingClasses(),
      getVariantClasses(),
      className
    )}>
      <div className="max-w-7xl mx-auto container-padding">
        {children}
      </div>
    </section>
  );
};

export default Section; 