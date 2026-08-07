import React from 'react';

interface AksLogoProps {
  variant?: 'default' | 'dark' | 'iconOnly';
  className?: string;
  height?: number;
}

export const AksLogo: React.FC<AksLogoProps> = ({ variant = 'default', className = '', height = 54 }) => {
  if (variant === 'iconOnly') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/company-logo-dark.png"
          alt="AKS Logo"
          style={{ height: `${height}px`, width: `${height}px` }}
          className="rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  // DARK VARIANT: Render official circular logo image
  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/company-logo-dark.png"
          alt="AKS Web Service Technologies"
          style={{ height: `${height}px` }}
          className="w-auto object-contain rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    );
  }

  // DEFAULT LIGHT VARIANT: Render official circular logo image
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/company-logo.jpeg"
        alt="AKS Web Service Technologies"
        style={{ height: `${height}px` }}
        className="w-auto object-contain rounded-full shadow-md transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
