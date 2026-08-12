import React from 'react';

interface AksLogoProps {
  variant?: 'default' | 'dark' | 'iconOnly';
  className?: string;
  height?: number;
}

export const AksLogo: React.FC<AksLogoProps> = ({ variant = 'default', className = '', height = 50 }) => {
  if (variant === 'iconOnly') {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/tecvor-icon.png"
          alt="TecVor Logo"
          style={{ height: `${height}px`, width: `${height}px` }}
          className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm rounded-full"
        />
      </div>
    );
  }

  // DARK VARIANT (Navbar in dark mode or Footer)
  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
        <img
          src="/tecvor-icon.png"
          alt="TecVor Emblem"
          style={{ height: `${height}px`, width: `${height}px` }}
          className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-md rounded-full flex-shrink-0"
        />
        <div className="flex flex-col leading-none">
          <span 
            style={{ fontSize: `${Math.max(18, height * 0.48)}px` }}
            className="font-black tracking-tight flex items-baseline font-sans"
          >
            <span className="text-white">Tec</span>
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#7C3AED] to-[#E94057] bg-clip-text text-transparent">
              Vor
            </span>
          </span>
          <span 
            style={{ fontSize: `${Math.max(8, height * 0.17)}px`, letterSpacing: '0.24em' }}
            className="font-extrabold uppercase text-sky-400/90 pt-0.5"
          >
            Technologies
          </span>
        </div>
      </div>
    );
  }

  // DEFAULT LIGHT VARIANT
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src="/tecvor-icon.png"
        alt="TecVor Emblem"
        style={{ height: `${height}px`, width: `${height}px` }}
        className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm rounded-full flex-shrink-0"
      />
      <div className="flex flex-col leading-none">
        <span 
          style={{ fontSize: `${Math.max(18, height * 0.48)}px` }}
          className="font-black tracking-tight flex items-baseline font-sans"
        >
          <span className="text-slate-900">Tec</span>
          <span className="bg-gradient-to-r from-[#0072FF] via-[#7C3AED] to-[#E94057] bg-clip-text text-transparent">
            Vor
          </span>
        </span>
        <span 
          style={{ fontSize: `${Math.max(8, height * 0.17)}px`, letterSpacing: '0.24em' }}
          className="font-extrabold uppercase text-slate-500 pt-0.5"
        >
          Technologies
        </span>
      </div>
    </div>
  );
};
