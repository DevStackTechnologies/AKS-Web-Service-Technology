import React from 'react';

interface TecVorLogoProps {
  variant?: 'default' | 'dark' | 'iconOnly' | 'fullImage';
  className?: string;
  height?: number;
}

export const TecVorLogo: React.FC<TecVorLogoProps> = ({ variant = 'default', className = '', height = 50 }) => {
  if (variant === 'iconOnly') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/tecvor-icon.png"
          alt="TecVor Emblem"
          width={height}
          height={height}
          loading="eager"
          decoding="async"
          style={{ height: `${height}px`, width: `${height}px` }}
          className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md"
        />
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/tecvor-logo-dark.jpg"
          alt="TecVor Technologies Logo Dark"
          loading="eager"
          decoding="async"
          style={{ height: `${height}px`, width: 'auto' }}
          className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md max-w-full rounded-lg"
        />
      </div>
    );
  }

  // Default light variant
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/tecvor-logo.png"
        alt="TecVor Technologies Logo"
        loading="eager"
        decoding="async"
        style={{ height: `${height}px`, width: 'auto' }}
        className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md max-w-full"
      />
    </div>
  );
};

export default TecVorLogo;
