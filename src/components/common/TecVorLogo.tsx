import React from 'react';

interface TecVorLogoProps {
  variant?: 'default' | 'dark' | 'iconOnly' | 'fullImage';
  className?: string;
  height?: number;
}

export const TecVorLogo: React.FC<TecVorLogoProps> = ({ variant = 'default', className = '', height = 50 }) => {
  // Exact intrinsic aspect ratio: 963 / 327 ≈ 2.945
  const logoWidth = Math.round(height * (963 / 327));

  if (variant === 'iconOnly') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <picture>
          <source srcSet="/tecvor-icon.webp" type="image/webp" />
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
        </picture>
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/tecvor-logo-dark.jpg"
          alt="TecVor Technologies Logo Dark"
          width={logoWidth}
          height={height}
          loading="eager"
          decoding="async"
          style={{ height: `${height}px`, width: 'auto', aspectRatio: '963 / 327' }}
          className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md max-w-full rounded-lg"
        />
      </div>
    );
  }

  // Default light variant
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <picture>
        <source srcSet="/tecvor-logo.webp" type="image/webp" />
        <img
          src="/tecvor-logo.png"
          alt="TecVor Technologies Logo"
          width={logoWidth}
          height={height}
          loading="eager"
          decoding="async"
          style={{ height: `${height}px`, width: 'auto', aspectRatio: '963 / 327' }}
          className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md max-w-full"
        />
      </picture>
    </div>
  );
};

export default TecVorLogo;
