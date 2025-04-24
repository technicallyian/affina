import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'default' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', ...props }) => {
  const defaultFill = '#0C004B';
  const whiteFill = '#ffffff';
  const gradientId = 'paint0_linear_145_134_logo'; // Unique ID for gradient

  const fillColor = variant === 'white' ? whiteFill : defaultFill;
  const gradientFill = variant === 'white' ? whiteFill : `url(#${gradientId})`;

  return (
    <svg viewBox="0 0 489 144" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Variant=Default"> 
        <g id="affina">
          <path d="M217.008 0.980957C195.862 0.980957 183.139 13.8844 183.139 34.3199V51.7445H211.456V37.3707C211.456 30.1988 214.507 27.1579 221.669 27.1579H225.97V0.980957H217.008Z" fill={fillColor} />
          <path d="M376.7 85.5735C376.7 60.1267 360.926 44.3525 335.119 44.3525C309.312 44.3525 293.538 60.1267 293.538 85.5735V141.669H321.856V86.6438C321.856 76.4211 326.697 70.6896 335.119 70.6896C343.541 70.6896 348.383 76.4311 348.383 86.6438V141.669H376.7V85.5735Z" fill={fillColor} />
          <path fillRule="evenodd" clipRule="evenodd" d="M462.733 55.2854L462.913 46.6831H488V141.668H462.913L462.733 133.066C456.282 139.878 445.889 143.459 435.316 143.459C409.689 143.459 388.003 123.384 388.003 94.1758C388.003 64.968 409.689 44.8926 435.316 44.8926C445.889 44.8926 456.282 48.4736 462.733 55.2854ZM413.44 94.1858C413.44 107.749 424.433 118.742 437.997 118.742C451.56 118.742 462.553 107.749 462.553 94.1858C462.553 80.6222 451.56 69.6292 437.997 69.6292C424.433 69.6292 413.44 80.6222 413.44 94.1858Z" fill={fillColor} />
          <path fillRule="evenodd" clipRule="evenodd" d="M75.92 46.683L75.74 55.2853C69.2882 48.4735 58.8955 44.8925 48.3226 44.8925C22.6858 44.8925 1 64.9679 1 94.1857C1 123.403 22.6858 143.469 48.3126 143.469C58.8855 143.469 69.2782 139.888 75.7299 133.076L75.91 141.678H100.997V46.683H75.92ZM51.0033 118.742C37.4397 118.742 26.4468 107.749 26.4468 94.1857C26.4468 80.6221 37.4397 69.6291 51.0033 69.6291C64.567 69.6291 75.5599 80.6221 75.5599 94.1857C75.5599 107.749 64.567 118.742 51.0033 118.742Z" fill={fillColor} />
          <path d="M183.129 64.1677H211.446V141.678H183.129V64.1677Z" fill={fillColor} />
          <path d="M156.211 64.1677H127.894V141.678H156.211V64.1677Z" fill={fillColor} />
          <path d="M238.333 83.573H266.651V141.669H238.333V83.573Z" fill={fillColor} />
          <path d="M127.894 51.7445V34.3199C127.894 13.8844 140.617 0.980957 161.763 0.980957H170.725V27.1579H166.424C159.262 27.1579 156.211 30.1988 156.211 37.3707V51.7445H127.894Z" fill={fillColor} />
        </g>
        <path id="meteora" d="M277.174 49.3939V54.3552C264.9 54.3552 254.958 64.3079 254.958 76.5712H249.996C249.996 64.3048 240.055 54.3665 227.801 54.3552H112.3V49.3939L227.781 49.3939C240.054 49.3939 249.996 39.4413 249.996 27.178H254.958C254.958 39.4513 264.91 49.3939 277.174 49.3939Z" fill={gradientFill} />
      </g>
      <defs>
        {variant === 'default' && (
          <linearGradient id={gradientId} x1="92.0652" y1="28.0633" x2="157.481" y2="256.347" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1B98E0" />
            <stop offset="0.780367" stopColor="#0C004B" />
          </linearGradient>
        )}
      </defs>
    </svg>
  );
};

export { Logo };
export type { LogoProps }; 