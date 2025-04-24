"use client";

import React from 'react';
import { Section } from '@/components/Section';
import InfiniteLogoSlider, { InfiniteLogoSlide } from '@/components/InfiniteLogoSlider';
import { Text } from '@/components/typography/Text';

const LogoSlider = () => {
  return (
    <Section className="mt-16">
      <Text className="text-center text-lg text-gray-600 mb-8">Trusted by</Text>
      <InfiniteLogoSlider width="250px" duration={40} pauseOnHover={true}>
        <InfiniteLogoSlide>
          <span className="text-gray-500">Logo 1</span>
        </InfiniteLogoSlide>
        <InfiniteLogoSlide>
          <span className="text-gray-500">Logo 2</span>
        </InfiniteLogoSlide>
        <InfiniteLogoSlide>
          <span className="text-gray-500">Logo 3</span>
        </InfiniteLogoSlide>
        <InfiniteLogoSlide>
          <span className="text-gray-500">Logo 4</span>
        </InfiniteLogoSlide>
        <InfiniteLogoSlide>
          <span className="text-gray-500">Logo 5</span>
        </InfiniteLogoSlide>
      </InfiniteLogoSlider>
    </Section>
  );
};

export default LogoSlider; 