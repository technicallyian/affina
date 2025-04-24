import React from 'react';
import Slider from 'react-infinite-logo-slider';

interface InfiniteLogoSliderProps {
  children: React.ReactNode;
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
  blurBorders?: boolean;
  blurBorderColor?: string;
}

const InfiniteLogoSlider: React.FC<InfiniteLogoSliderProps> = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
  pauseOnHover = false,
  blurBorders = false,
  blurBorderColor = '#fff',
}) => {
  return (
    <Slider
      width={width}
      duration={duration}
      toRight={toRight}
      pauseOnHover={pauseOnHover}
      blurBorders={blurBorders}
      blurBorderColor={blurBorderColor}
    >
      {children}
    </Slider>
  );
};

// Expose the Slide component for convenience
export const InfiniteLogoSlide = Slider.Slide;

export default InfiniteLogoSlider; 